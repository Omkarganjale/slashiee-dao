import LoadingScreen from "components/LoadingScreen";
// import { firebaseConfig } from "config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,signInWithCustomToken } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { createContext, useEffect, useReducer } from "react";
import { ethers } from "ethers";
// firebase app initialize

const firebaseConfig = {
  apiKey: "AIzaSyAUhdHa2v5bwF_dtVBe7vIFwI1oPkm3WaI",
  authDomain: "slashiee-chat-non-prod.firebaseapp.com",
  databaseURL: "https://slashiee-chat-non-prod.firebaseio.com",
  projectId: "slashiee-chat-non-prod",
  storageBucket: "slashiee-chat-non-prod.appspot.com",
  messagingSenderId: "703274191977",
  appId: "1:703274191977:web:84253cc6e2de861bfea6f8",
  measurementId: "G-HH0TTBK86B"
};
const firebaseApp = initializeApp(firebaseConfig); // auth types

const analytics = getAnalytics(firebaseApp);
// ==========================================

var Types;

(function (Types) {
  Types["Init"] = "INIT";
})(Types || (Types = {}));

// ==========================================
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state, action) => {
  if (action.type === "INIT") {
    const {
      isAuthenticated,
      user
    } = action.payload;
    return { ...state,
      user,
      isAuthenticated,
      isInitialized: true
    };
  }

  return state;
};

const AuthContext = createContext({ ...initialState,
  method: "firebase",
  register: (email, password, name) => Promise.resolve(),
  login: (email, password) => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  loginWithFacebook: () => Promise.resolve(),
  loginWithWeb3: () => Promise.resolve(),
  logout: () => Promise.resolve()
}); // props type

export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: Types.Init,
          payload: {
            isAuthenticated: true,
            user: {
              id: user.uid,
              email: user.email,
              avatar: user.photoURL,
              name: user.displayName || "Jason Alexander"
            }
          }
        });
      } else {
        dispatch({
          type: Types.Init,
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch, auth]);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password, name) => createUserWithEmailAndPassword(auth, email, password).then(async response => {
    const userCollection = collection(db, "users");
    const findDoc = doc(userCollection, response.user?.uid);
    await setDoc(findDoc, {
      email,
      displayName: name,
      uid: response.user.uid
    });
  }); // .catch((error) => error);
  // const register = (email: string, password: string, name: string) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };


  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

   const loginWithWeb3 = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = provider.send("eth_requestAccounts", []).then( (result)=> {
      console.info("Login with Web3 Provider");

      const userId = result[0];
      const additionalClaims = {
        premiumAccount: true,
      };
      const token =""; 
      getAuth()
        .createCustomToken(userId, additionalClaims)
        .then((customToken) => {
          // Send token back to client
          token = customToken;
        })
        .catch((error) => {
          console.log('Error creating custom token:', error);
        });

      return signInWithCustomToken(auth, token)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.info("user login : ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });;
    });
    
  };

  const logout = () => auth.signOut();

  if (!state.isInitialized) {
    return <LoadingScreen />;
  }

  return <AuthContext.Provider value={{ ...state,
    method: "firebase",
    //@ts-ignore
    login,
    logout,
    //@ts-ignore
    register,
    //@ts-ignore
    loginWithGoogle,
    //@ts-ignore
    loginWithFacebook,
    loginWithWeb3
  }}>
      {children}
    </AuthContext.Provider>;
};
export default AuthContext;
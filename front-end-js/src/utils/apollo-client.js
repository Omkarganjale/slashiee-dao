// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

// example how you can pass in the x-access-token into requests using `ApolloLink`
// const authLink = new ApolloLink((operation, forward) => {
//   // Retrieve the authorization token from local storage.
//   // if your using node etc you have to handle your auth different
//   const token = localStorage.getItem('auth_token');

//   if (token != null && token.length > 0) {
//     // Use the setContext method to set the HTTP headers.
//     operation.setContext({
//       headers: {
//         'x-access-token': token ? `Bearer ${token}` : ''
//       }
//     });

//     console.log("Using Storage token for authentication")
//     // Call the next link in the middleware chain.
//     return forward(operation);
//   } else {
//     return "";
//   }

// });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth_token');
  // return the headers to the context so httpLink can read them
  // return {
  //   headers: {
  //     ...headers,
  //     authorization: token ? `Bearer ${token}` : "",
  //   }
  // }

  if (token == "undefined") {
    token = "";
  }

  if (token != null && token.length > 0) {
    // Use the setContext method to set the HTTP headers.
    // operation.setContext({
    //   headers: {
    //     'x-access-token': token ? `Bearer ${token}` : ''
    //   }
    // });

    console.log("Using Storage token for authentication", token)
    // Call the next link in the middleware chain.
    // return forward(operation);
    return {
      headers: {
        ...headers,
        authorization: token.length >0 ? `Bearer ${token}` : "",
      }
    }
  } else {
    return  {
      headers: {
        ...headers,
        authorization: token.length >0 ? `Bearer ${token}` : "",
      }
    };
  }

});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: 'https://api-mumbai.lens.dev/',
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });







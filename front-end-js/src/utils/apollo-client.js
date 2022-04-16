// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

// example how you can pass in the x-access-token into requests using `ApolloLink`

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = localStorage.getItem('auth_token');

  if (token === "undefined") {
    token = "";
  }

  if (token != null && token.length > 0) {
    // Use the setContext method to set the HTTP headers.

    console.log("Using Storage token for authentication", token)
    // Call the next link in the middleware chain.
    // return forward(operation);
    return {
      headers: {
        ...headers,
        authorization: token.length > 0 ? `Bearer ${token}` : "",
      }
    }
  } else {
    return {
      headers: {
        ...headers,
        authorization: token.length > 0 ? `Bearer ${token}` : "",
      }
    };
  }

});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: 'https://api-mumbai.lens.dev/',
  cache: new InMemoryCache(),
})








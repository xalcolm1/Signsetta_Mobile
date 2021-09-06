

import React from 'react';

import Root from './src/components/Root';
import configureStore from './src/store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './src/util/session_api_util';
import { logout } from './src/actions/session_actions';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let store = configureStore({});
  return (
    <Root store={store}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//  addEventListener(contentLoaded, () => {
//   let store;
//   if (localStorage.jwtToken){
//     setAuthToken(localStorage.jwtToken);
//     const decodedUser = jwt_decode(localStorage.jwtToken);
//     const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
//     store = configureStore(preloadedState);

//     const currentTime = Date.now() / 1000;

//     if (decodedUser.exp < currentTime){
//       store.dispatch(logout());
//       window.location.href = '/login';
//     }
//   } else {
//     store = configureStore({});
//   }
//   window.getState = store.getState;
//   const root = document.getElementById('root')
//   ReactDOM.render(<Root store={store} />, root);
    
// })


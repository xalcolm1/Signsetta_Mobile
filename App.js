

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './src/components/Root';
import configureStore from './src/store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './src/util/session_api_util';
import { logout } from './src/actions/session_actions';
import 'semantic-ui-css/semantic.min.css';
import { StyleSheet, Text, View } from 'react-native';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime){
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  window.getState = store.getState;
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root);
    
})

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text h1>Signsetta Online!</Text>
//       <Signsetta/>
//      </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#00bff0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';


export default class App extends React.Component {
  componentDidMount(){
      // Initialize Firebase
      const config = {
          apiKey: "AIzaSyC5u3zM9n2z6aXUuwSPGlV700wpRPQc8Xo",
          authDomain: "someapp-7f2f1.firebaseapp.com",
          databaseURL: "https://someapp-7f2f1.firebaseio.com",
          projectId: "someapp-7f2f1",
          storageBucket: "someapp-7f2f1.appspot.com",
          messagingSenderId: "270598071563"
      };
      firebase.initializeApp(config);

  }
  render() {
    return (
      <View style={styles.container}>
       <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     // justifyContent: 'center',
     justifyContent: 'space-around',
  },
});

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDzpu0t2RXV2U51ETnp8FT5mHnCANXZoLg",
    authDomain: "clone-41669.firebaseapp.com",
    projectId: "clone-41669",
    storageBucket: "clone-41669.appspot.com",
    messagingSenderId: "384043247128",
    appId: "1:384043247128:web:df90b58a5fae68216b456d",
    measurementId: "G-GSYLDTTZHW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

 const db= firebaseApp.firestore();

 const auth = firebase.auth();

 const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, db, provider};
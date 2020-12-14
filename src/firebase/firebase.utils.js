import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config ={
        apiKey: "AIzaSyC5_lNlKeMdVp-hULKEp5DpKbyiOKwHRK4",
        authDomain: "vvthecs.firebaseapp.com",
        databaseURL: "https://vvthecs.firebaseio.com",
        projectId: "vvthecs",
        storageBucket: "vvthecs.appspot.com",
        messagingSenderId: "506137308644",
        appId: "1:506137308644:web:484ca2addd325f72e4abf1",
        measurementId: "G-1K5BWWQZNS" 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =() =>auth.signInWithPopup(provider);

export default firebase;

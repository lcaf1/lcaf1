import * as firebaseLocalConfig from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

export const firebaseLocalConfig = {
  apiKey: "AIzaSyAl6ofchoX5qRwtc9W1R_fObmEYB-i6d84",
  authDomain: "projetoreact-d4cab.firebaseapp.com",
  projectId: "projetoreact-d4cab",
  storageBucket: "projetoreact-d4cab.appspot.com",
  messagingSenderId: "50471244965",
  appId: "1:50471244965:web:59da4426ad5e87f20f294c",
  measurementId: "G-2MWSNDB2G6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebaseLocalConfig };
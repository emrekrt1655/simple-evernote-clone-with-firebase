import firebase from 'firebase/app'
import "firebase/firestore"
const {REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN,REACT_APP_APP_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID} = process.env

var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: 'evernoteclone-11ce0',
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
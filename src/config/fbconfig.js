import firebase from 'firebase/app'
import "firebase/firestore"
var firebaseConfig = {
    apiKey: "AIzaSyC_H9-FZ8jff2VM9NFEgK57LyYdzr25vm4",
    authDomain: "evernoteclone-11ce0.firebaseapp.com",
    projectId: "evernoteclone-11ce0",
    storageBucket: "evernoteclone-11ce0.appspot.com",
    messagingSenderId: "388925020862",
    appId: "1:388925020862:web:0c7a06998231ca9d085cef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
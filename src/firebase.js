import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBRJTWfiDXLqNMbwmQlOV5psuO1p7pPs9Y",
    authDomain: "fb-clone-59110.firebaseapp.com",
    databaseURL: "https://fb-clone-59110.firebaseio.com",
    projectId: "fb-clone-59110",
    storageBucket: "fb-clone-59110.appspot.com",
    messagingSenderId: "707244919747",
    appId: "1:707244919747:web:18158bf04e28c4449bcb76",
    measurementId: "G-313HHXTS5T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db

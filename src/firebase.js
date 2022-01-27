import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCnrUO6nf5tWXvklsf8wnjRprhUh1mJ90",
  authDomain: "whatsapp-d4229.firebaseapp.com",
  databaseURL: "https://whatsapp-d4229-default-rtdb.firebaseio.com",
  projectId: "whatsapp-d4229",
  storageBucket: "whatsapp-d4229.appspot.com",
  messagingSenderId: "200590503794",
  appId: "1:200590503794:web:dd1f56e507685480f3b7eb",
  measurementId: "G-2N32LR66P8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
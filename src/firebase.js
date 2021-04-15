import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB6iYinZt2kaVugg0q6AFawNhXcuRlLtgM",
  authDomain: "e-challenge-bb3ad.firebaseapp.com",
  projectId: "e-challenge-bb3ad",
  storageBucket: "e-challenge-bb3ad.appspot.com",
  messagingSenderId: "519767202467",
  appId: "1:519767202467:web:e02b366e6cd59116a87d16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };

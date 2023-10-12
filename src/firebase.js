import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore from Firebase modular SDK

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
    databaseURL: process.env.REACT_APP_databaseURL,
};

const app = initializeApp(firebaseConfig); // Initialize the app
const firestore = getFirestore(app); // Initialize Firestore using the app instance

export { app, firestore }; // Export app and firestore for use in other parts of your application

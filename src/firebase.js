import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyAtZ8R-R8UHeh3G3QZI8JEtg4nbCpLiCsw',
    authDomain: 'mobileinvitation-f5217.firebaseapp.com',
    projectId: 'mobileinvitation-f5217',
    storageBucket: 'mobileinvitation-f5217.appspot.com',
    messagingSenderId: '630019112277',
    appId: '1:630019112277:web:e930e3643434242d75c3dc',
    // measurementId: 'G-GDCM6DC1SM',
    //     databaseURL:
    //         'https://mobileinvitation-f5217-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

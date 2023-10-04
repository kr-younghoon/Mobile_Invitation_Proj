// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAtZ8R-R8UHeh3G3QZI8JEtg4nbCpLiCsw',
    authDomain: 'mobileinvitation-f5217.firebaseapp.com',
    projectId: 'mobileinvitation-f5217',
    storageBucket: 'mobileinvitation-f5217.appspot.com',
    messagingSenderId: '630019112277',
    appId: '1:630019112277:web:e930e3643434242d75c3dc',
    measurementId: 'G-GDCM6DC1SM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

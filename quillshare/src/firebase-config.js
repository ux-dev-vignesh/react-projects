import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase config object (get this from the Firebase console)
const firebaseConfig = {
    apiKey: "AIzaSyAQZqcFOjJPBRTL-cDNPLWMXLwn2vlU7ug",
    authDomain: "quillshare-730dd.firebaseapp.com",
    projectId: "quillshare-730dd",
    storageBucket: "quillshare-730dd.firebasestorage.app",
    messagingSenderId: "606893764362",
    appId: "1:606893764362:web:4343184e98e0ea543914f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
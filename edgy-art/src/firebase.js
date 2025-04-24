import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    initializeFirestore,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBdkCDP5ApmhDuo0Q6MrGHLXL9ISGPhQX4",
    authDomain: "edgy-art.firebaseapp.com",
    projectId: "edgy-art",
    storageBucket: "edgy-art.firebasestorage.app",
    messagingSenderId: "402003602322",
    appId: "1:402003602322:web:4a8427d225f93c7e242f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
});

export { db };
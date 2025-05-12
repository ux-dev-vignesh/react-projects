import { db } from "../firebase-config";
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';

// Add a new document to Firestore collection
export const addUser = async (user) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), user);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

// Get all users from Firestore
export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
};

// Get a specific user by ID
export const getUserById = async (id) => {
    const userDoc = doc(db, 'users', id);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? userSnapshot.data() : null;
};
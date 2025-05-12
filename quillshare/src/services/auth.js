// src/services/auth.js
import { auth } from '../firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { jwtDecode } from 'jwt-decode';


// Register a new user
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', token);
        return userCredential.user;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Login existing user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', token);
        return userCredential.user;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

// Check if token exists and is valid (decoded check)
export const isValidToken = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
    } catch (error) {
        console.error('Invalid token:', error);
        return false;
    }
};

// Monitor current auth state
export const monitorAuthState = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

// Logout the user
export const logoutUser = async () => {
    try {
        await signOut(auth);
        localStorage.removeItem('authToken');
        console.log('User logged out');
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

// src/services/firebaseService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchMenus = async () => {

    console.log(collection(db,"menus"));
    
    const querySnapshot = await getDocs(collection(db, "menus"));
    const menus = querySnapshot.docs.map(doc => ({
        id: doc.id,             // Document ID
        ...doc.data()           // Contains label and link
    }));

    console.log(menus);
    
    return menus;
};

// initialize Firebase app
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebaseConfig.js";
const app= initializeApp(firebaseConfig);

// initialize Firestore
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
const db= getFirestore(app);

// make doc and setDoc available at the Console for testing
window.doc= doc        
window.setDoc= setDoc
window.db= db

const COLLECTION="MoWie";

export function connectToPersistence(){
    //TODO, WHAT DO WE WANT TO SAVE?
}
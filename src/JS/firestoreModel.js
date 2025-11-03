import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebaseConfig.js";
const app= initializeApp(firebaseConfig);

import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
const db= getFirestore(app);

window.doc= doc        
window.setDoc= setDoc
window.db= db

const COLLECTION="MoWie";

export function connectToPersistence(){
    //TODO, WHAT DO WE WANT TO SAVE?
}
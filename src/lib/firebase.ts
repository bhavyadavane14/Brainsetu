import { initializeApp, getApps } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import type { Auth, User as FirebaseUser } from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

/**
 * Firebase Configuration
 * Defaults to live BrainSetu project (brainsetu-1b363) with override from .env
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBP577OdZMcWm_M9d52S2fx7DtUxKINaIY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'brainsetu-1b363.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'brainsetu-1b363',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'brainsetu-1b363.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '25287557736',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:25287557736:web:a73a5ea7741d82b6fdf1dd'
};

export const isFirebaseConfigured = true;

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
auth = getAuth(app);
db = getFirestore(app);

// Configure Google Auth Provider to always prompt user to choose their account
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { 
  app, 
  auth, 
  db, 
  googleProvider,
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  firebaseSignOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp
};
export type { FirebaseUser };

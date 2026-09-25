import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
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
  updateDoc,
  serverTimestamp 
} from '../lib/firebase';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: 'student' | 'parent';
  grade?: string;
  xp: number;
  streak: number;
  completedMissions?: string[];
  createdAt?: any;
  isNew?: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role?: 'student' | 'parent', grade?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  saveProgress: (xpGained: number, missionId?: string) => Promise<void>;
  isFirebaseActive: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Synchronize state with Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const data = userDoc.data();
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: data.displayName || firebaseUser.displayName || 'BrainSetu Explorer',
              role: data.role || 'student',
              grade: data.grade || 'Grade 3–4',
              xp: data.xp || 150,
              streak: data.streak || 1,
              completedMissions: data.completedMissions || []
            });
          } else {
            // Document not yet in Firestore (e.g., initial Google Sign-In)
            const newProfile: UserProfile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || 'BrainSetu Student',
              role: 'student',
              grade: 'Grade 3–4',
              xp: 150,
              streak: 1,
              completedMissions: []
            };
            await setDoc(userDocRef, {
              ...newProfile,
              createdAt: serverTimestamp(),
              lastLoginAt: serverTimestamp()
            });
            setUser(newProfile);
          }
        } catch (err) {
          console.error('Error fetching Firestore user profile:', err);
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || 'BrainSetu Student',
            role: 'student',
            xp: 150,
            streak: 1
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email/Password Login: Only allows existing accounts to log in!
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err: any) {
      console.error('Firebase sign-in error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        throw new Error('No account found with this email, or invalid password. Please sign up first.');
      } else if (err.code === 'auth/wrong-password') {
        throw new Error('Incorrect password. Please verify your password and try again.');
      } else if (err.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      } else if (err.code === 'auth/operation-not-allowed') {
        throw new Error('Email/Password sign-in is not enabled yet in your Firebase Authentication console.');
      } else {
        throw new Error(err.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Sign Up: Creates account and saves in Firebase Auth + Firestore users collection
  const signup = async (
    name: string,
    email: string,
    password: string,
    role: 'student' | 'parent' = 'student',
    grade: string = 'Grade 3–4'
  ) => {
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const newProfile: UserProfile = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: name,
        role,
        grade,
        xp: 100,
        streak: 1,
        completedMissions: [],
        isNew: true
      };
      sessionStorage.setItem('brainsetu_is_new_' + cred.user.uid, 'true');

      // Save user to Firestore users collection
      await setDoc(doc(db, 'users', cred.user.uid), {
        ...newProfile,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp()
      });

      setUser(newProfile);
    } catch (err: any) {
      console.error('Firebase sign-up error:', err);
      if (err.code === 'auth/email-already-in-use') {
        throw new Error('An account with this email already exists. Please log in instead.');
      } else if (err.code === 'auth/weak-password') {
        throw new Error('Password should be at least 6 characters.');
      } else if (err.code === 'auth/operation-not-allowed') {
        throw new Error('Email/Password sign-up is not enabled yet in your Firebase Authentication console.');
      } else {
        throw new Error(err.message || 'Account creation failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In with Account Selection
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      const userDocRef = doc(db, 'users', cred.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        const newProfile: UserProfile = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName || 'BrainSetu Student',
          role: 'student',
          grade: 'Grade 3–4',
          xp: 150,
          streak: 1,
          completedMissions: [],
          isNew: true
        };
        sessionStorage.setItem('brainsetu_is_new_' + cred.user.uid, 'true');
        await setDoc(userDocRef, {
          ...newProfile,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        });
        setUser(newProfile);
      } else {
        await updateDoc(userDocRef, {
          lastLoginAt: serverTimestamp()
        });
      }
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        throw new Error('Google sign-in popup was closed before completing.');
      } else if (err.code === 'auth/operation-not-allowed') {
        throw new Error('Google provider is not enabled in your Firebase Authentication Console.');
      } else if (err.code === 'auth/unauthorized-domain') {
        throw new Error('This domain (localhost) is not yet authorized in your Firebase project. Please add "localhost" under Firebase Console > Authentication > Settings > Authorized domains.');
      } else {
        throw new Error(err.message || 'Google sign-in failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      localStorage.removeItem('brainsetu_auth_user');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Save Progress (XP, Missions) into Firestore
  const saveProgress = async (xpGained: number, missionId?: string) => {
    if (!user) return;

    const newXp = (user.xp || 0) + xpGained;
    const completed = [...(user.completedMissions || [])];
    if (missionId && !completed.includes(missionId)) {
      completed.push(missionId);
    }

    const updated: UserProfile = {
      ...user,
      xp: newXp,
      completedMissions: completed
    };

    setUser(updated);

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        xp: newXp,
        completedMissions: completed,
        lastActiveAt: serverTimestamp()
      });
    } catch (err) {
      console.warn('Could not sync progress to Firestore:', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        loginWithGoogle,
        logout,
        saveProgress,
        isFirebaseActive: true
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

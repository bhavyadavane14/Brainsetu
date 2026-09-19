import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  auth, 
  db, 
  isFirebaseConfigured, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  firebaseSignOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
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
  createdAt?: string;
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

const LOCAL_STORAGE_KEY = 'brainsetu_auth_user';
const LOCAL_USERS_DB = 'brainsetu_users_db';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize Auth listener or LocalStorage session
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          try {
            // Fetch extra profile from Firestore
            if (db) {
              const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
              if (userDoc.exists()) {
                const data = userDoc.data();
                setUser({
                  uid: firebaseUser.uid,
                  email: firebaseUser.email,
                  displayName: data.displayName || firebaseUser.displayName || 'BrainSetu Explorer',
                  role: data.role || 'student',
                  grade: data.grade || 'Grade 3–4',
                  xp: data.xp || 120,
                  streak: data.streak || 1,
                  completedMissions: data.completedMissions || []
                });
              } else {
                // Initialize doc
                const newProfile: UserProfile = {
                  uid: firebaseUser.uid,
                  email: firebaseUser.email,
                  displayName: firebaseUser.displayName || 'BrainSetu Explorer',
                  role: 'student',
                  grade: 'Grade 3–4',
                  xp: 120,
                  streak: 1,
                  completedMissions: []
                };
                await setDoc(doc(db, 'users', firebaseUser.uid), {
                  ...newProfile,
                  createdAt: serverTimestamp()
                });
                setUser(newProfile);
              }
            }
          } catch (err) {
            console.error('Error fetching Firestore user profile:', err);
            // Fallback object
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || 'BrainSetu Explorer',
              role: 'student',
              xp: 120,
              streak: 1
            });
          }
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      // Local Storage Fallback
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Failed to parse local auth user:', e);
      }
      setLoading(false);
    }
  }, []);

  // Email/Password Login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (isFirebaseConfigured && auth) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Local Storage Simulation
        const usersDb: Record<string, { password: string; profile: UserProfile }> = 
          JSON.parse(localStorage.getItem(LOCAL_USERS_DB) || '{}');
        
        const existing = usersDb[email.toLowerCase()];
        if (existing) {
          if (existing.password !== password) {
            throw new Error('Incorrect password. Please try again.');
          }
          setUser(existing.profile);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.profile));
        } else {
          // Auto-create local user for hassle-free testing
          const newProfile: UserProfile = {
            uid: `user_${Date.now()}`,
            email,
            displayName: email.split('@')[0],
            role: 'student',
            grade: 'Grade 3–4',
            xp: 150,
            streak: 1,
            completedMissions: ['Mission 01: Starlight Bakery'],
            createdAt: new Date().toISOString()
          };
          usersDb[email.toLowerCase()] = { password, profile: newProfile };
          localStorage.setItem(LOCAL_USERS_DB, JSON.stringify(usersDb));
          setUser(newProfile);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProfile));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Sign Up
  const signup = async (
    name: string, 
    email: string, 
    password: string, 
    role: 'student' | 'parent' = 'student',
    grade: string = 'Grade 3–4'
  ) => {
    setLoading(true);
    try {
      if (isFirebaseConfigured && auth && db) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const newProfile: UserProfile = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: name,
          role,
          grade,
          xp: 100,
          streak: 1,
          completedMissions: []
        };
        await setDoc(doc(db, 'users', cred.user.uid), {
          ...newProfile,
          createdAt: serverTimestamp()
        });
        setUser(newProfile);
      } else {
        // Local Storage Simulation
        const usersDb: Record<string, { password: string; profile: UserProfile }> = 
          JSON.parse(localStorage.getItem(LOCAL_USERS_DB) || '{}');

        if (usersDb[email.toLowerCase()]) {
          throw new Error('An account with this email already exists. Please log in.');
        }

        const newProfile: UserProfile = {
          uid: `user_${Date.now()}`,
          email,
          displayName: name,
          role,
          grade,
          xp: 100,
          streak: 1,
          completedMissions: [],
          createdAt: new Date().toISOString()
        };

        usersDb[email.toLowerCase()] = { password, profile: newProfile };
        localStorage.setItem(LOCAL_USERS_DB, JSON.stringify(usersDb));
        setUser(newProfile);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProfile));
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured && auth) {
        const cred = await signInWithPopup(auth, googleProvider);
        if (db) {
          const userDoc = await getDoc(doc(db, 'users', cred.user.uid));
          if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', cred.user.uid), {
              uid: cred.user.uid,
              email: cred.user.email,
              displayName: cred.user.displayName || 'Google Student',
              role: 'student',
              grade: 'Grade 3–4',
              xp: 150,
              streak: 1,
              completedMissions: [],
              createdAt: serverTimestamp()
            });
          }
        }
      } else {
        // Google simulation in local storage fallback
        const mockGoogleUser: UserProfile = {
          uid: `google_${Date.now()}`,
          email: 'student.demo@brainsetu.academy',
          displayName: 'Demo Student (Google)',
          role: 'student',
          grade: 'Grade 3–4',
          xp: 250,
          streak: 3,
          completedMissions: ['Mission 01', 'Mission 02'],
          createdAt: new Date().toISOString()
        };
        setUser(mockGoogleUser);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockGoogleUser));
      }
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await firebaseSignOut(auth);
    }
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  // Save Learning Lab Progress & XP
  const saveProgress = async (xpGained: number, missionId?: string) => {
    if (!user) return;

    const updatedXP = (user.xp || 0) + xpGained;
    const missions = user.completedMissions ? [...user.completedMissions] : [];
    if (missionId && !missions.includes(missionId)) {
      missions.push(missionId);
    }

    const updatedUser: UserProfile = {
      ...user,
      xp: updatedXP,
      completedMissions: missions
    };

    setUser(updatedUser);

    if (isFirebaseConfigured && db && auth?.currentUser) {
      try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          xp: updatedXP,
          completedMissions: missions,
          lastActive: serverTimestamp()
        }, { merge: true });
      } catch (err) {
        console.warn('Failed to update progress in Firestore:', err);
      }
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));
      // update db entry
      const usersDb = JSON.parse(localStorage.getItem(LOCAL_USERS_DB) || '{}');
      if (user.email && usersDb[user.email.toLowerCase()]) {
        usersDb[user.email.toLowerCase()].profile = updatedUser;
        localStorage.setItem(LOCAL_USERS_DB, JSON.stringify(usersDb));
      }
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
        isFirebaseActive: isFirebaseConfigured
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

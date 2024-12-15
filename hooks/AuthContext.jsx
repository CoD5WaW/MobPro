// Import Firebase and necessary modules
import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './../app/firebaseConfig'; // Adjust the path if needed

// Initialize Firebase Auth using the app
const auth = getAuth(app);

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user info
  const [loading, setLoading] = useState(true); // Manage loading state

  // Fetch user info from Firebase Auth when the app starts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Finish loading regardless of success or error
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Login function using Firebase Auth
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Signup function using Firebase Auth
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Logout function using Firebase Auth
  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null); // Reset user state to null (log out the user)
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  // Memoize the context value to optimize performance
  const authContextValue = useMemo(() => ({
    user,
    loading,
    login,
    signup,
    logout,
  }), [user, loading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

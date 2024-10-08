import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user info
  const [loading, setLoading] = useState(true); // Manage loading state

  // Fetch user info from AsyncStorage when the app starts
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPassword = await AsyncStorage.getItem('password');
        if (storedEmail && storedPassword) {
          setUser({ email: storedEmail }); // Mock login with stored credentials
        }
      } catch (e) {
        console.error('Failed to load user');
      } finally {
        setLoading(false); // Finish loading regardless of success or error
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (storedEmail === email && storedPassword === password) {
      setUser({ email });
      return true;
    } else {
      return false;
    }
  };

  // Signup function
  const signup = async (email, password) => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      setUser({ email });
      return true;
    } catch (e) {
      return false;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      setUser(null);
    } catch (e) {
      console.error('Failed to log out');
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

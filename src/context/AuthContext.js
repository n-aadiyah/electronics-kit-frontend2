// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage on refresh
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // persist login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // clear on logout
  };

  // This useEffect is optional: if you ever want to sync login state live
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser && !user) {
      setUser(JSON.parse(savedUser));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Custom hook
export const useAuth = () => useContext(AuthContext);

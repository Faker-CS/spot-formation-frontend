import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // TODO: load token from localStorage
    const stored = localStorage.getItem("sf_token");
    if (stored) setToken(stored);
  }, []);

  const login = (u, t) => {
    setUser(u);
    setToken(t);
    localStorage.setItem("sf_token", t);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("sf_token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

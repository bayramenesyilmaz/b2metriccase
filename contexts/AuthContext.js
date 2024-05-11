"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    router.push("/login");
  };

  useEffect(() => {
    if (currentUser) {
      if (pathname === "/") {
        router.push("/dashboard");
      } else {
        router.push(pathname);
      }
      setLoading(false);
    } else {
      router.push("/login");

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center text-2xl">
          Loading...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

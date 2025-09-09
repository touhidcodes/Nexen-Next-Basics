"use client";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<DecodedUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded: DecodedUser = jwtDecode(token);
        setUser(decoded);
        setIsLoggedIn(true);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  return { isLoggedIn, user, setIsLoggedIn, setUser };
}

"use client";

import { getCurrentUser } from "@/service/getCurrentUser";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const result = await getCurrentUser();
      setUser(result);
      setLoading(false);
    };
    loadUser();
  }, []);

  return { user, loading };
};

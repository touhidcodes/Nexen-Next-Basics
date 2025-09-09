"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SimpleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // 🔥 You can add your login API call here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-lg border bg-white p-6 shadow-md"
      >
        <p className="text-center text-md">
          <Link href="/" className="text-black hover:underline">
            ← Back to Home
          </Link>
        </p>
        <h2 className="text-center text-xl font-semibold">Register</h2>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-black text-white">
          Register
        </Button>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-medium underline hover:text-gray-800">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}

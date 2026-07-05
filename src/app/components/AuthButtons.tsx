"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

export default function AuthButtons() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      console.log("✅ Login Successful:", result.user);

      const savedRole = localStorage.getItem("brightcornerRole");

      if (savedRole) {
        router.push("/dashboard");
      } else {
        router.push("/onboarding");
      }
    } catch (error: any) {
      console.error("Firebase Error:", error);

      if (error.code === "auth/cancelled-popup-request") {
        return;
      }

      alert(
        `Firebase Error\n\nCode: ${error.code}\n\nMessage:\n${error.message}`
      );
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("brightcornerRole");
      router.push("/login");
    } catch (error: any) {
      console.error(error);

      alert(
        `Logout Error\n\nCode: ${error.code}\n\nMessage:\n${error.message}`
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {!user ? (
        <button
          onClick={handleGoogleLogin}
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
        >
          Continue with Google
        </button>
      ) : (
        <div className="bg-[#111] border border-gray-800 p-6 rounded-3xl mt-6 text-center max-w-sm w-full shadow-lg">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
          )}

          <h2 className="text-2xl font-bold">{user.displayName}</h2>

          <p className="text-gray-400 mt-2 break-all">{user.email}</p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
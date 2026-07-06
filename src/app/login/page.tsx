"use client";

import AuthButtons from "@/components/AuthButtons";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 max-w-md w-full text-center">

        <h1 className="text-4xl font-bold mb-4">
          Welcome to BrightCorner
        </h1>

        <p className="text-gray-400 mb-8">
          Continue with your Google account to start learning, teaching, or hiring.
        </p>

        <AuthButtons />

      </div>

    </main>
  );
}
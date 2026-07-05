"use client";

import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function OnboardingPage() {
  const router = useRouter();

  const chooseRole = async (role: string) => {
    const user = auth.currentUser;

    if (!user) {
      router.push("/login");
      return;
    }

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: role,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("brightcornerRole", role);

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-4">Choose your role</h1>

        <p className="text-gray-400 mb-12">
          Select how you want to use BrightCorner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button onClick={() => chooseRole("learner")} className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold mb-3">Learner</h2>
            <p className="text-gray-400">Learn skills, build projects, and apply for jobs.</p>
          </button>

          <button onClick={() => chooseRole("tutor")} className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <h2 className="text-2xl font-bold mb-3">Tutor</h2>
            <p className="text-gray-400">Teach your skills and earn from courses.</p>
          </button>

          <button onClick={() => chooseRole("hirer")} className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-pink-500 transition">
            <h2 className="text-2xl font-bold mb-3">Hirer</h2>
            <p className="text-gray-400">Post jobs and find practical skilled candidates.</p>
          </button>
        </div>
      </div>
    </main>
  );
}
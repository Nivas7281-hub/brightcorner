"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  photoURL: string;
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      }
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {profile.name}
            </h1>
            <p className="text-gray-400 mt-2">{profile.email}</p>
          </div>

          {profile.photoURL && (
            <img
              src={profile.photoURL}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-400">Enrolled Courses</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-400">Certificates</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold capitalize">{profile.role}</h2>
            <p className="text-gray-400">Current Role</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">My Courses</h2>
            <p className="text-gray-400 mb-6">
              You have not enrolled in any courses yet.
            </p>
            <Link href="/courses" className="bg-white text-black px-6 py-3 rounded-xl font-semibold inline-block">
  Browse Courses
</Link>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Recommended Jobs</h2>
            <p className="text-gray-400 mb-6">
              Jobs matching your skills will appear here.
            </p>
            <Link href="/jobs" className="border border-gray-700 px-6 py-3 rounded-xl font-semibold inline-block">
  View Jobs
</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
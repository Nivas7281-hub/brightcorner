"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function CreateCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateCourse(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "courses"), {
        title,
        category,
        level,
        description,
        price: Number(price),
        status: "draft",
        createdAt: serverTimestamp(),
      });

      alert("Course created successfully!");
      router.push("/courses");
    } catch (error) {
      console.error(error);
      alert("Failed to create course");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Create Course
        </h1>

        <p className="mb-8 text-gray-600">
          Add a new course to BrightCorner.
        </p>

        <form onSubmit={handleCreateCourse} className="space-y-5">
          <input
            type="text"
            placeholder="Course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            type="text"
            placeholder="Category e.g. Data Analyst"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full rounded-xl border px-4 py-3"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <textarea
            placeholder="Course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={5}
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            type="number"
            placeholder="Price in ₹"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            {loading ? "Creating..." : "Create Course"}
          </button>
        </form>
      </div>
    </main>
  );
}
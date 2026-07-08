"use client";

import { useState } from "react";
import { createSection } from "@/services/sectionService";

interface AddSectionFormProps {
  courseId: string;
  nextOrder: number;
  onSectionCreated: () => void;
}

export default function AddSectionForm({
  courseId,
  nextOrder,
  onSectionCreated,
}: AddSectionFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Section title is required.");
      return;
    }

    setSaving(true);

    try {
      await createSection({
        courseId,
        title,
        description,
        order: nextOrder,
        createdAt: new Date(),
      });

      setTitle("");
      setDescription("");
      onSectionCreated();
      alert("Section added successfully!");
    } catch (error) {
      console.error("Error creating section:", error);
      alert("Failed to create section.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6"
    >
      <h3 className="text-xl font-bold text-gray-900">Add New Section</h3>

      <input
        type="text"
        placeholder="Section title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
      />

      <textarea
        placeholder="Section description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        rows={4}
      />

      <button
        type="submit"
        disabled={saving}
        className="mt-4 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
      >
        {saving ? "Saving..." : "Add Section"}
      </button>
    </form>
  );
}
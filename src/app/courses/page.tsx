"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  description: string;
  price: number;
  status: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);

        const courseList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Course[];

        setCourses(courseList);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <p className="text-gray-600">Loading courses...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
            <p className="mt-2 text-gray-600">
              Learn practical skills and move closer to getting hired.
            </p>
          </div>

          <Link
            href="/create-course"
            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Create Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow">
            <h2 className="text-xl font-semibold text-gray-900">
              No courses yet
            </h2>
            <p className="mt-2 text-gray-600">
              Create your first course to display it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-lg"
              >
                <p className="mb-3 text-sm font-medium text-gray-500">
                  {course.category}
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {course.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    {course.level}
                  </span>

                  <span className="font-bold text-gray-900">
                    ₹{course.price}
                  </span>
                </div>

                <Link
                  href={`/courses/${course.id}`}
                  className="mt-6 block rounded-xl bg-black px-4 py-3 text-center font-semibold text-white hover:bg-gray-800"
                >
                  View Course
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
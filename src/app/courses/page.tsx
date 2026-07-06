"use client";

import Link from "next/link";
import { useCourses } from "@/hooks/useCourses";
import CourseCard from "@/components/course/CourseCard";

export default function CoursesPage() {
  const { courses, loading } = useCourses();

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
            <h1 className="text-3xl font-bold text-gray-900">
              Courses
            </h1>

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
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
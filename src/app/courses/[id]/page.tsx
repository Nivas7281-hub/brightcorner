"use client";
import { RoleGuard } from "@/components/common/RoleGuard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { db, auth } from "@/lib/firebase";
import { useSections } from "@/hooks/useSections";
import AddSectionForm from "@/components/course/AddSectionForm";

import {
  doc,
  getDoc,
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

type Course = {
  title: string;
  category: string;
  level: string;
  description: string;
  price: number;
  status: string;
};

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params.id as string;

  const {
    sections,
    loading: sectionsLoading,
    refreshSections,
  } = useSections(courseId);

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const courseRef = doc(db, "courses", courseId);
        const courseSnap = await getDoc(courseRef);

        if (courseSnap.exists()) {
          setCourse(courseSnap.data() as Course);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    }

    async function checkEnrollment() {
      if (!auth.currentUser) return;

      const q = query(
        collection(db, "enrollments"),
        where("userId", "==", auth.currentUser.uid),
        where("courseId", "==", courseId)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setIsEnrolled(true);
      }
    }

    if (courseId) {
      fetchCourse();
      checkEnrollment();
    }
  }, [courseId]);

  async function handleEnroll() {
    if (!auth.currentUser) {
      alert("Please login first to enroll.");
      return;
    }

    if (!course) {
      alert("Course not loaded yet.");
      return;
    }

    setEnrolling(true);

    try {
      await addDoc(collection(db, "enrollments"), {
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        courseId,
        courseTitle: course.title,
        progress: 0,
        status: "active",
        enrolledAt: serverTimestamp(),
      });

      setIsEnrolled(true);
      alert("Enrollment successful!");
    } catch (error) {
      console.error("Enrollment error:", error);
      alert("Failed to enroll.");
    } finally {
      setEnrolling(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <p className="text-gray-600">Loading course...</p>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
          <h1 className="text-2xl font-bold text-gray-900">
            Course not found
          </h1>

          <Link
            href="/courses"
            className="mt-4 inline-block text-blue-600"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/courses"
          className="text-sm font-medium text-gray-600"
        >
          ← Back to Courses
        </Link>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow">
          {/* Course Header */}

          <p className="mb-3 text-sm font-semibold text-gray-500">
            {course.category}
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            {course.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
              {course.level}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
              ₹{course.price}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
              {course.status}
            </span>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            {course.description}
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="font-bold text-gray-900">
                Practical Learning
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Learn through real examples, exercises, and guided practice.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="font-bold text-gray-900">
                Assessments
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Session quizzes and a final test unlock certification.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="font-bold text-gray-900">
                Career Path
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Complete the course, earn badges, increase level and apply for jobs.
              </p>
            </div>
          </div>

          {/* Course Sections */}

          <section className="mt-12">
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Course Sections
            </h2>

            {sectionsLoading ? (
              <p className="text-gray-600">
                Loading sections...
              </p>
            ) : sections.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 p-6 text-center">
                <p className="text-gray-500">
                  No sections added yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="rounded-2xl border border-gray-200 p-5 transition hover:border-black"
                  >
                    <p className="text-sm font-semibold text-gray-500">
                      Section {section.order}
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Only Tutors can add sections */}

            <RoleGuard allow={["Tutor"]}>
              <AddSectionForm
                courseId={courseId}
                nextOrder={sections.length + 1}
                onSectionCreated={refreshSections}
              />
            </RoleGuard>
          </section>

          {/* Enrollment */}

          <div className="mt-10">
            {isEnrolled ? (
              <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white">
                Continue Learning
              </button>
            ) : (
              <button
                onClick={handleEnroll}
                disabled={enrolling}
                className="rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
              >
                {enrolling ? "Enrolling..." : "Enroll Now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
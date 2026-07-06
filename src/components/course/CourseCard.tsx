import Link from "next/link";
import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition-shadow">
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
  );
}
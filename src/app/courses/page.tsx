export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-gray-400 mb-10">
          Learn practical analyst skills from working professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Advanced Excel", "Power BI", "SQL for Analysts"].map((course) => (
            <div key={course} className="bg-[#111] border border-gray-800 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-3">{course}</h2>
              <p className="text-gray-400 mb-6">
                Beginner-friendly course with practical projects.
              </p>
              <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function JobsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Jobs</h1>

        <p className="text-gray-400 mb-10">
          Apply to startup roles that value practical skills and project work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Junior Data Analyst",
            "MIS Executive",
            "Business Analyst Intern",
            "Power BI Trainee",
          ].map((job) => (
            <div
              key={job}
              className="bg-[#111] border border-gray-800 rounded-3xl p-6"
            >
              <h2 className="text-2xl font-bold mb-3">{job}</h2>

              <p className="text-gray-400 mb-4">
                Remote / Entry Level / Skill-based opportunity.
              </p>

              <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function Features() {
  return (
    <section className="py-28 px-8 bg-black">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Features
          </p>

          <h2 className="text-5xl font-bold">
            Everything Needed To Build Your Career
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Learn From Real Professionals
            </h3>

            <p className="text-gray-400 leading-7">
              Learn practical skills directly from working professionals.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Affordable Skill Learning
            </h3>

            <p className="text-gray-400 leading-7">
              Choose tutors and courses based on your budget.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Direct Hiring Opportunities
            </h3>

            <p className="text-gray-400 leading-7">
              Apply for jobs directly through the platform.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
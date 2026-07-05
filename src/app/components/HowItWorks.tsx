export default function HowItWorks() {
  return (
    <section className="py-28 px-8 bg-[#050505]">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Process
          </p>

          <h2 className="text-5xl font-bold">
            How BrightCorner Works
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">

            <div className="text-5xl font-bold text-blue-400 mb-6">
              01
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Learn Skills
            </h3>

            <p className="text-gray-400 leading-7">
              Enroll in practical Business Analysis and Data Analysis courses from working professionals.
            </p>

          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">

            <div className="text-5xl font-bold text-purple-400 mb-6">
              02
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Build Projects
            </h3>

            <p className="text-gray-400 leading-7">
              Create real projects and improve your portfolio with practical assignments.
            </p>

          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">

            <div className="text-5xl font-bold text-pink-400 mb-6">
              03
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Get Hired
            </h3>

            <p className="text-gray-400 leading-7">
              Apply directly to startups and companies searching for practical skilled talent.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
export default function Testimonials() {
  return (
    <section className="py-28 px-8 bg-black">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold">
            What Learners Say
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 leading-7 mb-6">
              BrightCorner helped me understand practical Excel and Power BI skills faster than traditional courses.
            </p>

            <h3 className="font-bold text-xl">
              Rahul K
            </h3>

            <p className="text-gray-500">
              Aspiring Data Analyst
            </p>

          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 leading-7 mb-6">
              The tutors explain real company workflows which helped me build confidence for interviews.
            </p>

            <h3 className="font-bold text-xl">
              Sneha R
            </h3>

            <p className="text-gray-500">
              Business Analyst Learner
            </p>

          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">

            <p className="text-gray-400 leading-7 mb-6">
              This platform feels more practical than regular learning platforms because it focuses on skills.
            </p>

            <h3 className="font-bold text-xl">
              Arjun M
            </h3>

            <p className="text-gray-500">
              Startup Candidate
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
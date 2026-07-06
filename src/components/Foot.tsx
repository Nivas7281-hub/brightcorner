export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-8 bg-black">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-xl font-bold mb-4 md:mb-0">
          BrightCorner
        </h2>

        <div className="flex gap-6 text-gray-400">

          <a href="#" className="hover:text-white transition">
            Courses
          </a>

          <a href="#" className="hover:text-white transition">
            Tutors
          </a>

          <a href="#" className="hover:text-white transition">
            Jobs
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}
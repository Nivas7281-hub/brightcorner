export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-gray-900 backdrop-blur-md">

      <h1 className="text-2xl font-bold tracking-wide">
        BrightCorner
      </h1>

      <div className="hidden md:flex gap-8 text-gray-400 font-medium">

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
          Login
        </a>

      </div>

    </nav>
  );
}
import Link from "next/link";
import AuthButtons from "@/components/AuthButtons";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Foot from "@/components/Foot";
import Features from "@/components/Features";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 h-screen">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <p className="text-blue-400 font-semibold mb-4 tracking-widest uppercase">
            Learn • Build • Get Hired
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6">
            BrightCorner
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10">
            Learn Business Analysis and Data Analysis from real working professionals and connect directly with startups hiring skilled talent.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Link
  href="/login"
  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
>
  Start Learning
</Link>
            <Link
  href="/login"
  className="border border-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300"
>
  Become a Tutor
</Link>
          </div>

        

        </div>

      </section>

      {/* STATS */}
      <section className="py-16 px-8 border-y border-gray-900 bg-[#050505]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-400 mt-2">Courses</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-gray-400 mt-2">Tutors</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-gray-400 mt-2">Learners</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p className="text-gray-400 mt-2">Hiring Startups</p>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <Testimonials />
      <Foot />

    </main>
  );
}

import MainLayout from "../components/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-5">
            Welcome to <span className="text-blue-700">Acme Web Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Build modern web apps quickly with Next.js and Tailwind CSS.
          </p>
          <Link href="/contact" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center border border-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Web Development</h3>
            <p className="text-gray-600">Modern, scalable web apps built using the latest technologies.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center border border-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Beautiful, user-friendly interfaces to delight your users.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center border border-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Consulting</h3>
            <p className="text-gray-600">Expert guidance to take your project to the next level.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-lg">Contact us today and let’s build something great together!</p>
        <Link href="/contact" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-900 transition">
          Contact Us
        </Link>
      </section>
    </MainLayout>
  );
}
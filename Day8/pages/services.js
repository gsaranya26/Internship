import React from "react";

// Example: Using JSONPlaceholder's /users endpoint as "services"
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const services = await res.json();

  return {
    props: {
      services,
    },
    revalidate: 3600, // ISR: revalidate every hour
  };
}

export default function Services({ services }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 via-purple-100 to-pink-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 drop-shadow">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-3">
                {/* Use a fun emoji based on id for demo */}
                {["🎨", "💡", "💻", "🚀", "📊", "📱", "🔒", "🌍", "⚡", "🛠"][service.id % 10]}
              </div>
              <h2 className="text-xl font-bold text-blue-700 mb-2">{service.name}</h2>
              <p className="text-gray-700 text-center mb-2">{service.company.catchPhrase}</p>
              <p className="text-sm text-gray-500 text-center">{service.email}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
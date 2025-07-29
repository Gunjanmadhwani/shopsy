import React, { useState } from "react";

const Hero = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", query);
    // Add navigation or API logic here
  };

  return (
    <section className="py-20 sm:pt-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Find Your First Tech Job with{" "}
          <span className="text-primary">HireWire</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          HireWire connects freshers and professionals to career opportunities,
          growth paths, and a community that supports every step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search job titles, skills..."
            className="w-full sm:w-2/3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSearch}
            className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 duration-200 shadow-md"
          >
            Search
          </button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/jobs"
            className="bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white px-8 py-4 rounded-full shadow hover:bg-primary/60 dark:hover:bg-primary/60 transition duration-200 flex items-center justify-center gap-2"
          >
            Explore Jobs →
          </a>
          <a
            href="/community"
            className="bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white px-8 py-4 rounded-full shadow hover:bg-primary/60 dark:hover:primary/60 transition duration-200 flex items-center justify-center gap-2"
          >
            Join the Community →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

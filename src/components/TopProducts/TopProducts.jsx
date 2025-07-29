import React from "react";
import { FaStar } from "react-icons/fa";

const JobData = [
  {
    id: 1,
    companyLogo: "/logos/google.png",
    companyName: "Google",
    jobTitle: "Software Engineer Intern",
    jobType: "Internship",
    experienceLevel: "Fresher",
    location: "Bangalore, India",
  },
  {
    id: 2,
    companyLogo: "/logos/microsoft.png",
    companyName: "Microsoft",
    jobTitle: "Product Manager - Entry Level",
    jobType: "Full-time",
    experienceLevel: "0-1 Years",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    companyLogo: "/logos/tcs.png",
    companyName: "TCS",
    jobTitle: "Java Developer",
    jobType: "Full-time",
    experienceLevel: "Fresher",
    location: "Pune, India",
  },
  {
    id: 4,
    companyLogo: "/logos/tcs.png",
    companyName: "TCS",
    jobTitle: "Java Developer",
    jobType: "Full-time",
    experienceLevel: "Fresher",
    location: "Pune, India",
  },
];

const TopProducts = ({ handleApply }) => {
  return (
    <div>
      <div className="container bg-primary p-10">
        {/* Header section */}
        <div className="text-left mb-12">
          <p
            data-aos="fade-up"
            className="text-sm text-white dark:text-gray-800"
          >
            Handpicked Opportunities
          </p>

          {/* Flex row for heading and button */}
          <div className="flex items-center justify-between mt-2">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-white dark:text-gray-800"
            >
              Top Entry-Level Roles
            </h1>
            <button
              data-aos="fade-up"
              className="text-l text-white hover:underline hover:text-gray-200 font-medium dark:text-blue-800"
            >
              Explore All Openings →
            </button>
          </div>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {JobData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full"
            >
              {/* Company logo */}
              <div className="h-[100px] flex items-center justify-center pt-4">
                <img
                  src={data.companyLogo}
                  alt={`${data.companyName} logo`}
                  className="max-w-[100px] h-auto object-contain block"
                />
              </div>

              {/* Job details */}
              <div className="p-4 text-left">
                {/* Company name */}
                <h2 className="text-sm font-semibold text-gray-600 group-hover:text-white mb-1">
                  {data.companyName}
                </h2>

                {/* Job title */}
                <h1 className="text-lg font-bold mb-2">{data.jobTitle}</h1>

                {/* Job type, experience, location */}
                <div className="flex flex-col gap-1 text-sm text-gray-500 group-hover:text-white">
                  <p>
                    <span className="font-medium">Type:</span> {data.jobType}
                  </p>
                  <p>
                    <span className="font-medium">Experience:</span>{" "}
                    {data.experienceLevel}
                  </p>
                  <p>
                    <span className="font-medium">Location:</span>{" "}
                    {data.location}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleApply}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

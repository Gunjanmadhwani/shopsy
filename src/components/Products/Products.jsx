import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    title: "Fresher-Friendly Jobs",
    description:
      "Entry-level tech roles from companies open to hiring and training freshers.",
  },
  {
    id: 2,
    title: "Skill-Building Hackathons",
    description:
      "Beginner-friendly coding events to showcase skills and gain real experience.",
  },
  {
    id: 3,
    title: "Supportive Community",
    description:
      "A safe space to connect with peers, mentors, and tech professionals.",
  },
];

const Products = () => {
  return (
    <div className="mt-2 mb-6">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-6 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Why HireWire?
          </p>
          <h1 data-aos="fade-up" className="text-3xl p-2 font-bold">
            Tailored for Emerging Tech Talent
          </h1>
          <p data-aos="fade-up" className="text-xs p-2 mb-4 text-gray-400">
            We’re dedicated to supporting the unique journey of freshers
            entering the tech industry.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-12">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="w-full max-w-xs h-40 flex flex-col justify-between  bg-primary/40  dark:bg-white/80  rounded-lg shadow-md p-4"
              >
                <div>
                  <h3 className="text-lg mb-2 font-bold text-gray-800">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600">{data.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* view all button */}
        </div>
      </div>
    </div>
  );
};

export default Products;

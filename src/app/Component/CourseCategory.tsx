import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    image: "/frame1.png",
    title: "Design & Development",
    description: "50+ Courses Available",
  },
  {
    image: "/frame2.png",
    title: "Marketing",
    description: "50+ Courses Available",
  },
  {
    image: "/frame3.png",
    title: "Development",
    description: "50+ Courses Available",
  },
  {
    image: "/frame4.png",
    title: "Communication",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
  {
    image: "/frame5.png",
    title: "Digital Marketing",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
  {
    image: "/frame6.png",
    title: "Self Development",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
  {
    image: "/frame7.png",
    title: "Business",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
  {
    image: "/frame8.png",
    title: "Finance",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
  {
    image: "/frame9.png",
    title: "Consulting",
    description: "50+ Courses Available",
    className: "hidden sm:flex",
  },
];

const CourseCategory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-bold text-[#000000] ">
          Explore Courses By Category
        </h2>
        <p className="text-[18px] text-[#000000] mt-4">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center gap-[32px] p-6 bg-[#F7F7F7] rounded-lg hover:shadow-lg hover:shadow-black transition-all ${
              category.className || ""
            }`}
          >
            <Image
              src={category.image}
              alt={category.title}
              width={32}
              height={32}
              className="mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="text-[#000000] mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Button className="w-[155px] h-[48px] px-6 py-3 gap-2 rounded-tl-[5px] border-black text-black bg-white border-2">
          View All Courses
        </Button>
      </div>
    </section>
  );
};

export default CourseCategory;

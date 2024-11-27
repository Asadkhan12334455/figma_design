import React from "react";
import Image from "next/image";

const CustomerTestimonial = () => {
  const testimonials = [
    {
      image: "/team3.png",
      name: "Joseph Ngumbau",
      role: "Software Developer",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: "/team6.png",
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: "/team1.png",
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16">
      <div className="mb-12 ">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#000000] px-4 sm:px-8">
          Customer Testimonials
        </h2>
        <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4 px-4 sm:px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-10 ">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="border hover:shadow-lg hover:shadow-black border-black p-6 bg-white shadow-md"
          >
            <div className="flex mb-4 text-[20px] sm:text-[24px] text-black py-2">★★★★★</div>
            <p className="text-[14px] sm:text-[16px] text-[#000000] mb-4">
              {customer.testimonial}
            </p>
            <div className="flex items-center gap-4 py-4">
              <Image
                src={customer.image}
                alt={customer.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#000000]">
                  {customer.name}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-[#000000]">
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex mt-8 gap-8 px-4 sm:px-8 py-8">
    
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
        </div>

        <div>
          <Image 
            src={"/Slider Buttons.png"} 
            alt="slider arrow" 
            width={111} 
            height={48} 
            className="ml-[65rem] border-black"
            />
        </div>
        
      </div>
    </section>
  );
};
export default CustomerTestimonial;

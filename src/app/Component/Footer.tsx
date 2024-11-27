import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from "@/components/ui/button";


const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 md:px-16">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-[18px] font-bold text-[#000000] md:items-center ">
            Subscribe to our newsletter
          </h2>
          <p className="text-[16px] text-[#000000] mt-2 md:items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-4 ">
          <form className="flex items-center justify-start gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[#000000] text-[#000000] rounded-md focus:outline-none text-sm"
            />
            <Button
              type="submit"
              className="text-sm border border-[#000000] bg-white text-[#000000] rounded-md"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-[14px] text-[#000000] mt-4">
            By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-9">
        <div className="flex items-center space-x-2 pt-5 pb-5">
          
          <Image
                    src={"/Logo.png"}
                    alt="logo"
                    width={130.6}
                    height={41}
                    className="pt-[39px] pb-[29px] gap-[10.5px] ml-[10px]"
                    />
          
        </div>

        <div>
          <h4 className="text-lg font-medium text-[#000000]">Courses</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-[#000000]">Resources</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-[#000000]">About Us</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-gray-800 text-sm">
  <p className="text-center md:text-left">
    2023 Ddsgnr. All rights reserved.
  </p>

  <div className="flex space-x-6 mt-4 md:mt-0">
    <div  className="hover:underline">
      Privacy Policy
    </div>
    <div  className="hover:underline">
      Terms of Service
    </div>
    <div className="hover:underline">
      Cookies Settings
    </div>
  </div>

  <div className="flex space-x-4 mt-4 md:mt-0">
    <div
      aria-label="Facebook"
      className="text-gray-800"
    >
      <FaFacebook size={20} />
    </div>
    <div
      aria-label="Instagram"
      className="text-gray-800"
    >
      <FaInstagram size={20} />
    </div>
    <div
      aria-label="Twitter"
      className="text-gray-800"
    >
      <FaTwitter size={20} />
    </div>
    <div
      aria-label="LinkedIn"
      className="text-gray-800 "
    >
      <FaLinkedin size={20} />
    </div>
  </div>
 </div>
</footer>
  );
};

export default Footer;
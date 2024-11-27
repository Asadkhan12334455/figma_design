import React from 'react';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import HeroSection from './Component/HeroSection'
import Courses from './Component/Courses';
import CourseCategory from './Component/CourseCategory';
import Achievement from './Component/Achievement';
import Team from './Component/Team'
import CustomerTestimonial from './Component/CustomerTestimonials';

export default function Home() {
  return (
    <div>
     <Header />
     <Navbar />
     <HeroSection />
     <CourseCategory />
     <Achievement />
     <Courses />
     <Team />
     <CustomerTestimonial />
     <Footer />
    </div>
  );
}

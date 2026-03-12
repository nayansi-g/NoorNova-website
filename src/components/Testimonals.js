"use client";

import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Before Noornova, we missed many calls during busy hours. Now our AI agent answers every lead and books appointments automatically. We've increased our monthly bookings by 40%.",
    name: "Dr. Sarah Mitchell",
    role: "Owner, Bright Smile Dental Clinic",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Our business leads doubled after using the AI assistant. It captures every inquiry even after hours.",
    name: "John Carter",
    role: "Founder, Carter Plumbing",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "This tool saved us hours every day and improved customer experience dramatically.",
    name: "Emma Wilson",
    role: "Manager, Glow Spa",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-16 sm:py-20">
      <div className="relative bg-[#f6f7fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Heading */}
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-0.02em] text-slate-950 sm:text-[34px] md:text-[50px]">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Local Businesses
          </span>
        </h2>

        <p className="text-gray-600 mt-3">
          See how businesses like yours are growing revenue with Noornova AI
        </p>
      </div>

      {/* Slider Card */}
      <div>
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-white p-6 text-center shadow-md sm:p-10 lg:p-12">

        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <FaQuoteLeft />
          </div>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Text */}
        <p className="mx-auto max-w-3xl text-base italic text-gray-700 sm:text-lg">
          <span aria-hidden="true">&ldquo;</span>
          {testimonials[current].text}
          <span aria-hidden="true">&rdquo;</span>
        </p>

        {/* User */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <img
            src={testimonials[current].image}
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div className="text-left">
            <h4 className="font-semibold">{testimonials[current].name}</h4>
            <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
          </div>
        </div>

      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 sm:flex sm:left-6 lg:left-10"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 sm:flex sm:right-6 lg:right-10"
      >
        <FaChevronRight />
      </button>
      </div>

      <div className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 px-6 py-10 text-center sm:px-10">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Join Hundreds of Growing Businesses
        </h2>

        <p className="text-white/90 mt-4 text-md">
          Start capturing every lead and growing your revenue with AI automation
        </p>

        <button className="mt-6 bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md hover:scale-105 transition">
          Book Your Demo Today
        </button>

      </div>
      </div>
   
</div>
    </section>
  );
}

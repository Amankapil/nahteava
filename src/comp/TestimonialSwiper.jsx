"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily Clark, CTO",
    role: "InnovateTech Solutions",
    quote:
      "Their expertise brought clarity and direction to our technology transformation journey. We’ve never been more aligned.",
    image: "/images/t1.jpg",
  },
  {
    name: "Michael Ross, VP",
    role: "BrightWave Industries",
    quote:
      "Thanks to the outstanding guidance, we’ve scaled faster and smarter. Their insights made all the difference.",
    image: "/images/t2.jpg",
  },
  {
    name: "Sophia Turner, Product Lead",
    role: "Visionary Labs",
    quote:
      "From strategy to execution, the team delivered exceptional value. We are truly impressed by their professionalism.",
    image: "/images/t3.jpg",
  },
  {
    name: "Daniel Evans, Founder",
    role: "NextGen Startups",
    quote:
      "The collaboration has been game-changing. Their guidance helped us pivot confidently and effectively.",
    image: "/images/t4.jpg",
  },
  {
    name: "Ava Mitchell, COO",
    role: "CoreConnect",
    quote:
      "Outstanding service with a human touch. We now have the clarity and focus needed to push forward.",
    image: "/images/t5.jpg",
  },
];

export default function TestimonialSwiper() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <>
      <div className="grid grid-cols-12 border-b border-gray-200 bg-[#F5F5F5]">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          <div className="bgblack text-white px-6 py-8 font-bold h-[76px] w-[200px] mt-4 ">
            {/* <spna className="text-[60px] leading-[100%]">04</spna> */}
          </div>
        </div>
        <div className="col-span-9 px-8 py-8">
          <h2 className="text-[60px] font-normal font-mark mb-4">
            {/* What Our Clients Are Saying */}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          {/* <div className="bg-black text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4 ">
            <spna className="text-[60px] leading-[100%]">04</spna>
          </div> */}
          <motion.div
            className="bg-black text-white  px-6 py-2 font-bold h-[76px] w-[200px] mt-6 "
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 200, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <spna className="text-[60px] leading-[100%]">04</spna>
          </motion.div>
        </div>
        <div className="col-span-9 px-8 py-4">
          {/* <h2 className="text-[60px] font-normal font-mark mb-4">
            What Our Clients Are Saying
          </h2> */}
          <div className="  h-[108px] overflowhidden  ">
            <motion.h1
              className="text-[60px] font-normal font-mark mb-12"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,

                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              What Our Clients Are Saying
            </motion.h1>
          </div>
        </div>
      </div>
      <section className="w-full bg-[#F2F2F2] py10 h-[400px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col">
            <div className="grid grid-cols-12 w-full">
              {/* Image with animation */}
              <div className="col-span-3 relative h-[400px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonial.image}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    // exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0, 0.56, 0.48, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right card content */}
              <div className="col-span-9 flex flex-col justify-between font-mark bg-[#FF8000] text-white relative p-10 space-y-6">
                {/* Quote Animation */}
                <motion.div
                  key={testimonial.quote}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0, 0.56, 0.48, 1] }}
                  className="text-2xl leading-snug"
                >
                  “{testimonial.quote}”
                </motion.div>

                {/* Name and Role Animation */}
                <motion.div
                  key={testimonial.name + testimonial.role}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0, 0.56, 0.48, 1],
                  }}
                >
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.role}</p>
                </motion.div>

                {/* Arrow Button (unchanged) */}
                <button
                  onClick={next}
                  className="absolute right-8 top-1/2 transform border-dashed border-[#fff] border-[1px] -translate-y-1/2 bg-black text-white p-4 hover:scale-105 transition"
                >
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10.5H22.255L13.87 2.115L16 0L28 12L16 24L13.885 21.885L22.255 13.5H0V10.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

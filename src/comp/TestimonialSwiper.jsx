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
  const prev = () => {
    setCurrent((prev) => (prev - 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <>
      <div className="grid grid-cols-12 border-b border-gray-200 bg-[#F5F5F5]">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          <div className="bgblack text-white px-6 py-16 font-bold h-[76px] w-[200px] mt-4 ">
            {/* <spna className="text-[60px] leading-[100%]">04</spna> */}
          </div>
        </div>
        <div className="col-span-9 px-8 py-8">
          <h2 className="text-[60px] font-normal font-mark mb-4">
            {/* What Our Clients Are Saying */}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-[#ccc]">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          {/* <div className="bg-black text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4 ">
            <spna className="text-[60px] leading-[100%]">04</spna>
          </div> */}
          <motion.div
            className="bg-black text-white  px-6 py-2 font-bold h-[76px] w-[200px] mt-6 mb-15 "
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
        <div className="col-span-9 px-8 py-2">
          {/* <h2 className="text-[60px] font-normal font-mark mb-4">
            What Our Clients Are Saying
          </h2> */}
          <div className="  h-[108px] overflowhidden relative ">
            <motion.h1
              className="text-[60px] font-normal font-mark mb-16 leading-[60px] pt-2"
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
            <div className="absolute right-0 top-4">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.2741V0.987305L5.89269 1.03215C10.9535 1.49851 12.7097 6.03955 12.9553 8.25178C12.9986 8.87957 12.9553 13.7225 12.9553 13.7225C10.8755 13.5073 10.1533 11.7495 10.0522 10.8975L10.0089 9.05894C10.0089 8.5567 9.95114 8.19199 9.92226 8.07241C9.15967 4.9155 6.51374 4.09638 5.28609 4.08143H4.00324C3.37258 4.08143 2.86219 4.59215 2.86527 5.22279C2.87697 7.62298 2.90302 12.996 2.90302 13.2741C2.90302 13.6329 2.38312 14.5297 1.42984 14.5297C0.476567 14.5297 0 13.6329 0 13.2741Z"
                  fill="#FF8200"
                />
                <ellipse
                  cx="3.03423"
                  cy="16.6822"
                  rx="1.29986"
                  ry="1.34527"
                  fill="#FF8200"
                />
                <ellipse
                  cx="5.11339"
                  cy="19.0139"
                  rx="0.95323"
                  ry="0.986533"
                  fill="#FF8200"
                />
                <path
                  d="M18 6.72685V19.0137L12.1073 18.9688C7.04652 18.5025 5.29026 13.9614 5.04473 11.7492C5.00141 11.1214 5.04473 6.27843 5.04473 6.27843C7.12451 6.49367 7.84666 8.25149 7.94776 9.1035L7.99109 10.942C7.99109 11.4443 8.04886 11.809 8.07774 11.9286C8.84033 15.0855 11.4863 15.9046 12.7139 15.9195H13.9968C14.6274 15.9195 15.1378 15.4088 15.1347 14.7782C15.123 12.378 15.097 7.005 15.097 6.72685C15.097 6.36811 15.6169 5.47126 16.5702 5.47126C17.5234 5.47126 18 6.36811 18 6.72685Z"
                  fill="#FF8200"
                />
                <ellipse
                  cx="14.967"
                  cy="3.31879"
                  rx="1.29986"
                  ry="1.34527"
                  transform="rotate(180 14.967 3.31879)"
                  fill="#FF8200"
                />
                <ellipse
                  cx="12.8878"
                  cy="0.9871"
                  rx="0.95323"
                  ry="0.986533"
                  transform="rotate(180 12.8878 0.9871)"
                  fill="#FF8200"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <motion.section
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 422, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.7 }}
        className="w-full bg-[#F2F2F2] py10 h-[400px]"
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 flex flex-col ">
            <div className="grid grid-cols-12 w-full">
              {/* Image with animation */}
              <div className="col-span-3  border-r border-[#ccc] relative h-[422px] overflow-hidden ml-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonial.image}
                    initial={{ y: 100, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0, 0.56, 0.48, 1] }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    className="absolute inset-0 w-[353px] h-[422px]"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      // width={353}
                      // height={422}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right card content */}
              <div className="col-span-9  mr-[24px]  flex flex-col justify-between font-mark bg-[#FF8000] text-white relative p-6 ">
                {/* Quote Animation */}
                <motion.div
                  key={testimonial.quote}
                  initial={{ y: 100, opacity: 0 }}
                  // animate={{ y: 0, opacity: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.6, ease: [0, 0.56, 0.48, 1] }}
                  className="text-[28px] leading-[36px] w-[73%]"
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
                  className="mb-0"
                >
                  <p className="font-bold text-[28px] font-mark  leading-[36px]">
                    {testimonial.name}
                  </p>
                  <p className="text-[20px] leading-[32px]">
                    {testimonial.role}
                  </p>
                </motion.div>

                <motion.button
                  onClick={next}
                  className="absolute w-[60px] group h-[60px] right-8 top-1/2 transform border-dashed border-[#fff] border-[1px] -translate-y-1/2 bg-black text-white p-4  transition"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.span
                    variants={{
                      rest: {
                        height: 0,
                      },
                      hover: {
                        height: "100%",
                        transition: {
                          duration: 0.5,
                          ease: [0.35, 0.17, 0.3, 0.86],
                        },
                      },
                    }}
                    className="absolute bottom-0 left-0 w-full bg-[#212121] z-0"
                  />

                  <span className=" z-10 text-[16px] flex justify-center items-center gap-4">
                    <span className="absolute right-3 overflow-hidden w-[30px] h-[24px] inline-block">
                      <motion.span
                        className="absolute   left-0"
                        initial={{ x: 0, opacity: 1 }}
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 50, opacity: 0 },
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.59, 0.68, 1],
                        }}
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
                      </motion.span>
                      <motion.span
                        className="absolute left-0"
                        initial={{ x: -50, opacity: 0 }}
                        variants={{
                          rest: { x: -46 },
                          hover: { x: 0, opacity: 1 },
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.59, 0.68, 1],
                        }}
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
                      </motion.span>
                    </span>
                  </span>
                </motion.button>
                <motion.button
                  className="absolute w-[60px] group h-[60px] right-28 top-1/2 transform border-dashed border-[#fff] border-[1px] -translate-y-1/2 bgblack text-white p-4  transition"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* <motion.span
                    variants={{
                      rest: {
                        height: 0,
                      },
                      hover: {
                        height: "100%",
                        transition: {
                          duration: 0.5,
                          ease: [0.35, 0.17, 0.3, 0.86],
                        },
                      },
                    }}
                    className="absolute bottom-0 left-0 w-full bg-[#212121] z-0"
                  /> */}

                  <span className=" z-10 text-[16px] flex justify-center items-center gap-4">
                    <span className="absolute right-3 overflow-hidden w-[40px] h-[40px] inline-block">
                      <motion.span
                        className="absolute   left-0"
                        initial={{ x: 0, opacity: 1 }}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_529_1672)">
                            <path
                              d="M34 18.5H11.745L20.13 10.115L18 8L6 20L18 32L20.115 29.885L11.745 21.5H34V18.5Z"
                              fill="#F5F5F5"
                              fill-opacity="0.4"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_529_1672">
                              <rect
                                width="40"
                                height="40"
                                fill="white"
                                transform="matrix(-1 0 0 1 40 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </motion.span>
                    </span>
                  </span>
                </motion.button>

                {/* Arrow Button (unchanged) */}
                {/* <button
                  onClick={next}
                  className="absolute w-[60px] group h-[60px] right-8 top-1/2 transform border-dashed border-[#fff] border-[1px] -translate-y-1/2 bg-black text-white p-4  transition"
                >
                  <span className="absolute overflow-hidden w-11 h-11 top-[67%] left-[25%] -translate-y-1/2  inset-0 ">
                    <span className="absolute text-amber-50 left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">
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
                    </span>

                    <span className="absolute text-amber-50 left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
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
                    </span>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

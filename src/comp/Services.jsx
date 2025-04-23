"use client";
import { useState } from "react";
import Image from "next/image";
// import classNames from "classnames";
import { motion } from "framer-motion";
const services = [
  { title: "Advisory Services", image: "/services/img1.png" },
  { title: "IT Asset Management", image: "/services/img2.png" },
  { title: "AI Management", image: "/services/img3.png" },
  { title: "Organization And Change", image: "/services/img4.png" },
  { title: "Software Asset Management", image: "/services/img5.png" },
  {
    title: "Software Industry Consulting",
    image: "/services/img6.png",
  },
  { title: "Executive Strategy", image: "/services/img7.png" },
  { title: "Technology Consulting", image: "/services/img8.png" },
];

export default function Section02() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <div className="bg-[#EBEBEB]">
        <div className="grid grid-cols-12 border-b border-gray-200">
          <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
            <motion.div
              className="bg-black text-white  px-6 py-2 font-bold h-[76px] w-[200px] mt-6 "
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 200, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 1 }}
            >
              <spna className="text-[60px] leading-[100%]">02</spna>
            </motion.div>
          </div>
          <div className="col-span-9 px-8 py-4">
            {/* <h2 className="text-[60px] font-normal font-mark mb-4">
              Our Services
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
                Our Services
              </motion.h1>
            </div>
          </div>
        </div>
        <section className="w-full border border-[#CCCCCC] grid grid-cols-12 bg-[#E6E6E6]">
          {/* Left Side - Image */}

          <div className="col-span-3 flex  items-start justify-start bg-[#E6E6E6] border-r border-[#CCCCCC] py-8 px-4">
            <div className="wfull flex items-start justify-start overflow-hidden   sticky w-[300px] top-[150px] h-[400px]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out
                ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={354}
                    height={354}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-span-9 py8 bg-[#E6E6E6] h[900px]">
            <div className="flex flex-col space-y-0  mb-10">
              {/* {services.map((service, index) => {
                const [hovered, setHovered] = useState(false);

                return (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      setHovered(true);
                    }}
                    onMouseLeave={() => {
                      setHovered(false);
                      setActiveIndex(-1);
                    }}
                    className="relative overflow-hidden flex items-center justify-between px-4 border-t border-b border-[#CCCCCC] py-6 bg-[#E6E6E6] cursor-pointer group"
                  >
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hovered ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute inset-0 ${
                        hovered ? "origin-top" : "origin-bottom"
                      } bg-orange-500 z-0`}
                    />

                    <span className="text-[24px] text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                      {service.title}
                    </span>
                    <span className="text-lg text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                      ↗
                    </span>
                  </div>
                );
              })} */}

              {services.map((service, index) => {
                const [hovered, setHovered] = useState(false);

                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      setHovered(true);
                    }}
                    onMouseLeave={() => {
                      setHovered(false);
                      setActiveIndex(-1);
                    }}
                    className="relative overflow-hidden flex items-center justify-between px-4 border-t border-b border-[#CCCCCC] py-6 bg-[#E6E6E6] cursor-pointer group"
                  >
                    {/* Animated Background Fill */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hovered ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute inset-0 ${
                        hovered ? "origin-top" : "origin-bottom"
                      } bg-orange-500 z-0`}
                    />

                    {/* Content */}
                    <span className="text-[24px] text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                      {service.title}
                    </span>
                    <span className="text-lg text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                      ↗
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className=" mt-10 mb-28 px-4">
              <div className="flx justify-center mt-10">
                <motion.button
                  className="relative overflow-hidden group bg-black text-white py-3 px-9 flex items-center justify-center text-sm"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.span
                    variants={{
                      rest: {
                        scale: 1,
                        rotate: 0,
                        width: "6px",
                        height: "6px",
                        borderRadius: "0px",
                        x: 0,
                        y: 0,
                      },
                      hover: {
                        scale: 70,
                        rotate: 90,
                        borderRadius: "0px",
                        transition: {
                          duration: 0.9,
                          ease: [0.35, 0.17, 0.3, 0.86],
                        },
                      },
                    }}
                    className="absolute bg-[#FF8200] z-0 left-4"
                  />
                  <span className="relative text-[16px] text-[#fff] z-10 pl4 group-hoverpl-0 ">
                    Learn More
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

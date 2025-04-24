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
      <div className="bg-[#EBEBEB] border-t border-[#ccc]">
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
          <div className="col-span-9 px-6 pb-6 pt-6">
            <div className="  h-[108px] overflowhidden relative ">
              <motion.h1
                className="text-[60px] font-normal font-mark mb-12 leading-[60px]"
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
        <section className="w-full border border-[#CCCCCC] grid grid-cols-12 bg-[#E6E6E6]">
          {/* Left Side - Image */}

          <div className="col-span-3 flex  items-start justify-start bg-[#E6E6E6] border-r border-[#CCCCCC] py-6 pr-6">
            <div className="wfull flex items-start justify-start overflow-hidden   sticky w-[353px] top-[150px] h-[353px]">
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
                    width={353}
                    height={353}
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
                    className="relative overflow-hidden flex items-center justify-between px-6 border-t border-b border-[#CCCCCC] py-6 bg-[#E6E6E6] cursor-pointer group"
                  >
                    {/* Animated Background Fill */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hovered ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute inset-0 ${
                        hovered ? "origin-top" : "origin-bottom"
                      } bg-[#FF8200] z-0`}
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
              <div className="flx justify-center mt z-[9999] relative wfull origin-right overflow-hidden w-[200px]">
                <motion.div
                  initial={{ width: 400, opacity: 0, x: -200 }}
                  whileInView={{ width: 400, opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="mt-12 mb-36"
                >
                  <motion.button
                    className="relative overflow-hidden group bg-black text-white py-3 px-9 pr-[26px] flex items-center justify-center text-sm"
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
                      className="absolute bg-[#FF8200] z-0 left-[24px]"
                    />
                    <span className="relative text-[16px] text-[#fff] z-10 pl4 group-hoverpl-0 ">
                      Learn More
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

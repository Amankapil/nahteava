"use client";
import { useState } from "react";
import Image from "next/image";
// import classNames from "classnames";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function Section01() {
  const [hovered, setHovered] = useState(null); // "it", "software", or "strategy"

  // const getBgColor = () => {
  //   switch (hovered) {
  //     case "it":
  //       return "bg-[#EFE574]";
  //     case "software":
  //       return "bg-[#ECA4BD]";
  //     case "strategy":
  //       return "bg-[#6DA5E1]";
  //     default:
  //       return "bg-white";
  //   }
  // };
  const bgColors = {
    it: "#F9F29E",
    software: "#FDD1E0",
    strategy: "#B7D6F7",
    default: "#fff",
  };
  const currentBg = bgColors[hovered] || bgColors.default;
  return (
    <motion.section>
      <CustomCursor type={hovered} visible={!!hovered} />
      {/* Section Header */}
      <div className="grid grid-cols-12 border-b border-gray-200 pt-6">
        <div className="col-span-3 flex items-end justify-start border-r border-gray-200 pt-[114px]">
          <div className="h-[48px] overflowhidden  ">
            <motion.h1
              className=" text-[#727272] text-[20px] px-6 py-2 font-normal font-mark"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,

                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Section
            </motion.h1>
          </div>
        </div>
        <div className="col-span-9 flex items-end justify-start p8">
          {/* <h2 className="text-[#727272] text-[20px] px-6 py-2 font-normal font-mark">
            Description
          </h2> */}
          <div className="  h-[48px] overflowhidden  ">
            <motion.p
              className="text-[#727272] text-[20px] px-6 py-2 font-normal font-mark"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,

                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Description
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        // className={`w-full  mt-0 border-gray-200 bg[#F5F5F5] }`}
        animate={{ backgroundColor: currentBg }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-12 border-b border-gray-200"
      >
        <div className="col-span-3 flex items-satrt justify-start border-r border-gray-200 ">
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
            <spna className="text-[60px] leading-[100%]">01</spna>
          </motion.div>
        </div>
        <div className="col-span-9 pl-8 py-4">
          <div className="  h-[100px] overflow-hidden relative ">
            <motion.h1
              className="text-[60px] font-normal font-mark mb-12"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              What We Do
            </motion.h1>
            <div className="absolute right-6 top-2">
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

          {/* <motion.p
            className="text-[38px] leading-[48px] w-[80%]"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1], delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Nahteava is an independent consulting firm focused on
            <motion.span
              className="mx-1 px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#EFE574, #EFE574)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{
                backgroundSize: "100% 100%",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              IT Asset Management
            </motion.span>
            ,
            <motion.span
              className="mx-1 px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#ECA4BD, #ECA4BD)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{
                backgroundSize: "100% 100%",
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software Asset Management
            </motion.span>
            , and
            <motion.span
              className="mx-1 px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#6DA5E1, #6DA5E1)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{
                backgroundSize: "100% 100%",
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Strategy
            </motion.span>
            .
          </motion.p> */}
          {/* <motion.p
            className="text-[38px] leading-[48px] w-[80%] mx-auto py-20"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1], delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Nahteava is an independent consulting firm focused on{" "}
            <motion.span
              className="mx-1 px-1 inline-block cursor-none relative z-10"
              style={{
                backgroundImage: "linear-gradient(#EFE574, #EFE574)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              onMouseEnter={() => setHovered("it")}
              onMouseLeave={() => setHovered(null)}
            >
              IT Asset Management
            </motion.span>
            ,{" "}
            <motion.span
              className="mx-1 px-1 inline-block cursor-none relative z-10"
              style={{
                backgroundImage: "linear-gradient(#ECA4BD, #ECA4BD)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              onMouseEnter={() => setHovered("software")}
              onMouseLeave={() => setHovered(null)}
            >
              Software Asset Management
            </motion.span>
            , and{" "}
            <motion.span
              className="mx-1 px-1 inline-block cursor-none relative z-10"
              style={{
                backgroundImage: "linear-gradient(#6DA5E1, #6DA5E1)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              onMouseEnter={() => setHovered("strategy")}
              onMouseLeave={() => setHovered(null)}
            >
              Strategy
            </motion.span>
            .
          </motion.p> */}

          <motion.p
            className="text-[38px] leading-[48px] w-[80%] mauto py-20"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1], delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Nahteava is an independent consulting firm focused on{" "}
            <motion.span
              className="mx-1 px-1 inline-block relative z-10 hover:z-[999999]    hover:text-white  "
              style={{
                background: "linear-gradient(#EFE574, #EFE574)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              onMouseEnter={() => setHovered("it")}
              onMouseLeave={() => setHovered(null)}
            >
              IT Asset Management
            </motion.span>
            ,{" "}
            <motion.span
              className="mx-1 px-1 inline-block relative z-10 hover:z-[99999999999]      hover:text-white "
              style={{
                backgroundImage: "linear-gradient(#ECA4BD, #ECA4BD)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              onMouseEnter={() => setHovered("software")}
              onMouseLeave={() => setHovered(null)}
            >
              Software Asset Management
            </motion.span>
            , and{" "}
            <motion.span
              className="mx-1 px-1 inline-block relative z-10  hover:z-[9999999999]    hover:text-white "
              style={{
                backgroundImage: "linear-gradient(#6DA5E1, #6DA5E1)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              onMouseEnter={() => setHovered("strategy")}
              onMouseLeave={() => setHovered(null)}
            >
              Strategy
            </motion.span>
            .
          </motion.p>

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
      </motion.div>

      {/* Metrics Section */}
      <div className="grid grid-cols-12 border-t border-gray-200 text-lg">
        {/* Row 1 */}
        <div className="col-span-3 flex items-center justify-center border-r border-gray-200 py-6">
          {/* <img
            src="/icons/star-person.svg"
            alt="icon1"
            className="h-8 w-8 text-orange-500"
          /> */}
          <motion.div
            className="font-normal text-[38px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.4398 33.3597C45.1998 33.3597 49.8398 28.2397 49.8398 21.9197C49.8398 15.6797 45.1998 10.4797 39.4398 10.4797C33.6798 10.4797 29.0398 15.5997 29.0398 21.9197C29.0398 28.2397 33.6798 33.3597 39.4398 33.3597Z"
                fill="#FF8200"
              />
              <path
                d="M39.5202 53.2003C52.7202 52.6404 59.6802 49.0403 59.6802 49.0403V40.8803C59.6802 34.8803 54.8002 33.3604 48.8002 33.3604C48.8002 33.3604 44.8002 36.4004 39.4402 36.3204C34.2402 36.2404 30.0802 33.3604 30.0802 33.3604C24.0802 33.3604 19.2002 34.8803 19.2002 40.8803V48.9604C19.2002 49.0404 28.3202 53.5203 39.5202 53.2003Z"
                fill="#FF8200"
              />
              <path
                d="M50.8802 65.2803C50.7202 65.2803 50.6402 65.2803 50.5602 65.2003C50.4002 65.0403 50.3202 64.8003 50.3202 64.6403L50.9602 60.8803L48.2402 58.1603C48.0802 58.0003 48.0002 57.7603 48.0802 57.5203C48.1602 57.2803 48.3202 57.1203 48.5602 57.1203L52.4002 56.5603L54.0802 53.1203C54.3202 52.7203 54.9602 52.7203 55.1202 53.1203L56.8002 56.5603L60.6402 57.1203C60.8802 57.1203 61.0402 57.2803 61.1202 57.5203C61.2002 57.7603 61.1202 58.0003 60.9602 58.1603L58.1602 60.8003L58.8002 64.5603C58.8002 64.8003 58.7202 65.0403 58.5602 65.1203C58.4002 65.2803 58.1602 65.2803 57.9202 65.2003L54.4802 63.4403L51.0402 65.2003C51.0402 65.2803 50.9602 65.2803 50.8802 65.2803Z"
                fill="#FF8200"
              />
              <path
                d="M73.28 60.5603C73.2 60.5603 73.12 60.5603 73.04 60.4803L69.6 58.7203L66.16 60.4803C65.92 60.5603 65.68 60.5603 65.52 60.4003C65.36 60.2403 65.28 60.0003 65.28 59.8403L65.92 56.0803L63.2 53.3603C63.04 53.2003 62.96 52.9603 63.04 52.7203C63.12 52.4803 63.28 52.3203 63.52 52.3203L67.36 51.7603L69.04 48.3203C69.28 47.9203 69.92 47.9203 70.08 48.3203L71.76 51.7603L75.6 52.3203C75.84 52.3203 76 52.4803 76.08 52.7203C76.16 52.9603 76.08 53.2003 75.92 53.3603L73.2 56.0003L73.84 59.7603C73.84 60.0003 73.76 60.2403 73.6 60.3203C73.52 60.4803 73.36 60.5603 73.28 60.5603Z"
                fill="#FF8200"
              />
              <path
                d="M43.2003 67.8401C43.1203 67.8401 43.0403 67.84 42.9603 67.76L39.5203 66L36.0803 67.76C35.8403 67.84 35.6003 67.84 35.4403 67.68C35.2803 67.52 35.2003 67.2801 35.2003 67.1201L35.8403 63.36L33.1203 60.6401C32.9603 60.4801 32.8803 60.24 32.9603 60C33.0403 59.76 33.2003 59.6 33.4403 59.6L37.2803 59.0401L38.9603 55.6C39.2003 55.2 39.8403 55.2 40.0003 55.6L41.6803 59.0401L45.5203 59.6C45.7603 59.6 45.9203 59.76 46.0003 60C46.0803 60.24 46.0003 60.4801 45.8403 60.6401L43.1203 63.36L43.7603 67.1201C43.7603 67.3601 43.6803 67.6 43.5203 67.68C43.4403 67.84 43.3603 67.8401 43.2003 67.8401Z"
                fill="#FF8200"
              />
              <path
                d="M28.1601 65.2802C28.0801 65.2802 28.0001 65.2802 27.9201 65.2002L24.4801 63.4402L21.0401 65.2002C20.8001 65.2802 20.5601 65.2802 20.4001 65.1202C20.2401 64.9602 20.1601 64.7202 20.1601 64.5602L20.8001 60.8002L18.0801 58.0802C17.9201 57.9202 17.8401 57.6802 17.9201 57.4402C18.0001 57.2002 18.1601 57.0402 18.4001 57.0402L22.2401 56.4802L23.9201 53.0402C24.1601 52.6402 24.8001 52.6402 24.9601 53.0402L26.6401 56.4802L30.4801 57.0402C30.7201 57.0402 30.8801 57.2002 30.9601 57.4402C31.0401 57.6802 30.9601 57.9202 30.8001 58.0802L28.1601 60.8002L28.8001 64.5602C28.8001 64.8002 28.7201 65.0402 28.5601 65.1202C28.4001 65.2002 28.3201 65.2802 28.1601 65.2802Z"
                fill="#FF8200"
              />
              <path
                d="M13.1203 60.5603C13.0403 60.5603 12.9603 60.5603 12.8803 60.4803L9.44029 58.7203L6.00029 60.4803C5.76029 60.5603 5.52029 60.5603 5.36029 60.4003C5.20029 60.2403 5.12029 60.0003 5.12029 59.8403L5.84029 56.0003L3.12029 53.2803C2.96029 53.1203 2.88029 52.8803 2.96029 52.6403C3.04029 52.4003 3.20029 52.2403 3.44029 52.2403L7.20029 51.7603L8.88029 48.3203C9.12029 47.9203 9.76029 47.9203 9.92029 48.3203L11.6003 51.7603L15.4403 52.3203C15.6803 52.3203 15.8403 52.4803 15.9203 52.7203C16.0003 52.9603 15.9203 53.2003 15.7603 53.3603L13.1203 56.0003L13.7603 59.7603C13.7603 60.0003 13.6803 60.2403 13.5203 60.3203C13.4403 60.4803 13.2803 60.5603 13.1203 60.5603Z"
                fill="#FF8200"
              />
            </svg>
          </motion.div>
        </div>
        <div className="col-span-9 flex items-center py-6 text-[38px]">
          {/* <p className="px-10">
            <span className="font-normal text-[48px]">97%</span> client
            satisfaction rating
          </p> */}

          <div className=" px-10 h-[60px] overflowhidden  ">
            <motion.p
              className="font-normal text-[38px]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <span className="font-normal text-[48px]">97%</span> client
              satisfaction rating
            </motion.p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-3 flex items-center justify-center border-t border-r border-gray-200 py-6">
          <motion.div
            className="font-normal text-[38px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.4612 60.1911C39.5956 60.2349 42.4425 62.0224 43.8394 64.8255C45.2394 67.6287 44.9581 70.9787 43.1081 73.5071C42.0581 71.6165 40.255 70.2603 38.1456 69.7727C39.3863 69.1977 40.2675 68.0571 40.5112 66.7165C40.7581 65.3727 40.3331 63.9947 39.3768 63.0227C38.1956 61.8383 36.4144 61.4883 34.8706 62.1352C33.33 62.7821 32.33 64.2977 32.3488 65.9696H32.3425C32.3394 67.6071 33.2925 69.0915 34.78 69.7727C32.6707 70.2634 30.8676 71.6196 29.8176 73.5103C27.9676 70.9821 27.6832 67.6321 29.0832 64.8263C30.4832 62.0231 33.3268 60.2349 36.4612 60.1911ZM7.76121 51.4255C9.25185 51.4318 10.4894 52.5849 10.605 54.0724L13.7456 55.0693C13.4737 55.7474 13.3081 56.4631 13.2581 57.1911L9.96435 56.1474C9.3331 56.8943 8.36435 57.2661 7.39563 57.1349C6.42691 57.0068 5.58939 56.3912 5.17691 55.5067C4.76441 54.6192 4.83004 53.5849 5.35191 52.7567C5.87378 51.9318 6.78319 51.4286 7.76127 51.4223L7.76121 51.4255ZM20.002 53.0037C21.8927 52.9818 23.6083 54.1006 24.3489 55.8412C25.0864 57.5787 24.702 59.5912 23.3739 60.935C22.0457 62.2787 20.0395 62.6881 18.2895 61.9725C16.5426 61.2538 15.4019 59.5507 15.4019 57.6631C15.3863 55.1038 17.4458 53.0193 20.002 53.0037ZM36.4612 27.7317C40.5956 27.7848 44.3425 30.1786 46.13 33.9099C47.9144 37.638 47.4331 42.0571 44.8831 45.3131C43.33 42.4193 40.405 40.5193 37.1269 40.2818C39.03 40.0005 40.6144 38.6724 41.2238 36.8505C41.8331 35.0255 41.3675 33.013 40.0175 31.6443C39.08 30.6911 37.7988 30.1536 36.4613 30.1536C35.1238 30.1536 33.8426 30.6911 32.9051 31.6443C31.9613 32.6005 31.4332 33.8943 31.4363 35.238H31.4332C31.4207 37.7755 33.2863 39.9287 35.7988 40.2787C32.5207 40.5162 29.5957 42.4162 28.0426 45.3131C25.4957 42.0568 25.0113 37.638 26.7988 33.9099C28.5832 30.1817 32.327 27.788 36.4612 27.7317ZM43.2956 46.9533C39.3425 50.2627 33.586 50.2627 29.6332 46.9533L29.7738 46.6627C30.6832 44.7502 32.3645 43.3189 34.3957 42.7283C36.427 42.1377 38.6144 42.4439 40.405 43.572C41.5926 44.3252 42.5457 45.397 43.155 46.6658L43.2956 46.9533ZM36.4612 32.3285C34.8643 32.3379 33.5768 33.6379 33.5799 35.2347H33.5862C33.5768 36.4035 34.2737 37.4597 35.3518 37.9129C36.4268 38.3629 37.6705 38.1192 38.4955 37.2942C39.3174 36.4629 39.5643 35.2191 39.1205 34.1379C38.6768 33.0566 37.6299 32.3441 36.4612 32.3285ZM12.2828 34.941C14.5547 35.4847 16.0579 37.6441 15.7859 39.9659C15.5109 42.2847 13.5422 44.0347 11.2078 44.0347C8.87025 44.0347 6.90153 42.2847 6.62961 39.9659C6.35461 37.6441 7.85777 35.4847 10.1296 34.941V28.8316C10.8484 28.8723 11.5703 28.8347 12.2827 28.7191L12.2828 34.941ZM39.5516 11.5442C38.9922 14.1442 36.5641 15.9035 33.9235 15.6223C31.2797 15.3442 29.2735 13.113 29.2735 10.4567C29.2735 7.79738 31.2797 5.56922 33.9235 5.29114C36.5641 5.0099 38.9922 6.7693 39.5516 9.3693H43.4954H43.4922C43.4079 10.0912 43.3985 10.8193 43.4641 11.5443L39.5516 11.5442ZM49.4332 70.2818C49.9895 72.8818 52.4176 74.6411 55.0614 74.3599C57.702 74.0818 59.7083 71.8506 59.7083 69.1943C59.7083 66.535 57.702 64.3068 55.0614 64.0287C52.4176 63.7475 49.9895 65.5069 49.4332 68.1069H46.8676C46.8957 68.835 46.852 69.5631 46.7364 70.2819L49.4332 70.2818ZM23.8772 52.0658L27.2022 47.6408C27.7022 48.1596 28.2428 48.6377 28.8178 49.069L25.424 53.5877V53.5846C24.9928 53.0002 24.471 52.4876 23.8772 52.0658ZM49.3396 38.9066L58.8236 39.9503H58.8267C58.6767 40.6597 58.5986 41.3847 58.5955 42.1097L49.1083 41.0659C49.2458 40.3534 49.324 39.6315 49.3396 38.9066ZM37.5364 51.5658V58.072C36.8208 57.997 36.0989 57.997 35.3833 58.072V51.572C36.102 51.6283 36.8208 51.6283 37.5364 51.572V51.5658ZM25.6644 31.4754L18.1831 25.5972C18.68 25.0722 19.1238 24.5003 19.5019 23.8847L26.9831 29.7629C26.4988 30.2973 26.055 30.8691 25.6644 31.4754ZM42.3828 27.0067L47.4203 18.8907C47.9828 19.3375 48.5922 19.7282 49.2359 20.05L44.1984 28.1628C43.6265 27.7284 43.0171 27.3442 42.3828 27.0067ZM41.5235 75.1475C38.5547 77.4819 34.3703 77.4819 31.4019 75.1475C31.8456 74.0975 32.5987 73.2068 33.5581 72.5943C34.8768 71.7631 36.4894 71.5381 37.9863 71.9725C39.4863 72.41 40.7238 73.4662 41.3925 74.8756L41.5235 75.1475ZM36.461 63.9819C35.3672 63.9881 34.4859 64.8787 34.4923 65.9725H34.4985H34.4954C34.4891 66.7725 34.9673 67.4943 35.7047 67.8038C36.4391 68.11 37.2891 67.9444 37.8547 67.3788C38.4141 66.8069 38.5766 65.9601 38.2735 65.2225C37.9735 64.4819 37.2579 63.9943 36.461 63.9819ZM68.861 37.5347C68.061 37.5503 67.3485 38.0378 67.0454 38.7753C66.7422 39.5128 66.9079 40.3628 67.4672 40.9315C67.936 41.3909 68.6048 41.5847 69.2485 41.4534C69.8923 41.319 70.4267 40.8753 70.6767 40.2659C70.9267 39.6565 70.8579 38.9659 70.4954 38.419C70.1298 37.8721 69.5172 37.5409 68.861 37.5347ZM68.861 35.3565V35.3596C70.5328 35.3846 72.0297 36.4034 72.6641 37.9534C73.2985 39.5034 72.9485 41.2816 71.7703 42.4721C71.4172 42.8284 71.0016 43.119 70.5422 43.3252C72.7078 43.8315 74.5484 45.2502 75.5859 47.2159C77.3859 44.8252 77.7703 41.6534 76.5984 38.8975C75.4234 36.1444 72.8735 34.2224 69.9015 33.8599C67.7109 33.6287 65.5171 34.2787 63.8109 35.6693C62.1015 37.0568 61.014 39.0693 60.7922 41.2599C60.5734 43.2818 61.0953 45.3162 62.2578 46.9849C63.3171 45.1349 65.0984 43.8099 67.1734 43.3256C65.9327 42.7537 65.0484 41.6162 64.8047 40.2724C64.5609 38.9287 64.9859 37.5475 65.9453 36.5756C66.7141 35.7943 67.7671 35.3568 68.864 35.3568L68.861 35.3565ZM53.7858 6.02523C52.692 6.03148 51.8107 6.91899 51.8107 8.01275H51.8139C51.8076 8.81275 52.2857 9.53459 53.0232 9.84403C53.7576 10.1534 54.6076 9.98778 55.1732 9.42216C55.7357 8.8534 55.9045 8.00656 55.6013 7.26592C55.2982 6.52529 54.5858 6.03771 53.7858 6.02523ZM53.7858 3.84394V3.85019C55.4576 3.87519 56.9545 4.89395 57.5889 6.44395C58.2233 7.99395 57.8701 9.76891 56.6951 10.9627C56.342 11.322 55.9264 11.6127 55.467 11.822C57.5919 12.3189 59.4045 13.6908 60.4545 15.6033C61.4607 14.2408 62.0295 12.6064 62.0889 10.9158C62.1701 8.24707 60.9607 5.70643 58.8389 4.08763C56.7139 2.47203 53.942 1.98139 51.3951 2.76891C48.8451 3.55642 46.8327 5.52515 45.992 8.05643C45.1514 10.5908 45.5858 13.372 47.1576 15.5283C48.2107 13.6532 50.0045 12.3096 52.0983 11.822C50.6107 11.1408 49.6607 9.65019 49.6701 8.01579C49.6607 6.91579 50.0888 5.85955 50.8607 5.07827C51.6326 4.29703 52.6826 3.85331 53.7826 3.84699L53.7858 3.84394ZM10.4794 13.6935C9.38561 13.6998 8.50433 14.5904 8.50753 15.6811H8.51378C8.50753 16.4811 8.98254 17.206 9.72002 17.5155C10.4575 17.8217 11.3107 17.653 11.8731 17.0873C12.4325 16.5186 12.5981 15.6686 12.295 14.9311C11.9919 14.1936 11.2763 13.7061 10.4794 13.6935ZM10.4794 11.5154V11.5185C12.4356 11.5373 14.1169 12.9123 14.52 14.8247C14.9263 16.7372 13.9481 18.6779 12.17 19.4872C14.3451 19.9935 16.1919 21.4247 17.2231 23.4059C18.82 21.3715 19.3794 18.7091 18.7356 16.2059C18.0887 13.7028 16.3107 11.6435 13.9294 10.6372C11.5481 9.63099 8.83249 9.79035 6.58561 11.0747C4.34185 12.356 2.82313 14.6123 2.47937 17.1747C2.19187 19.2623 2.695 21.3779 3.89497 23.106C4.95745 21.2747 6.73249 19.9654 8.79497 19.4873C7.30745 18.8092 6.35745 17.3217 6.36057 15.6873C6.3512 14.5873 6.78245 13.5311 7.55433 12.7498C8.32621 11.9685 9.37617 11.5248 10.4762 11.5185L10.4794 11.5154ZM58.861 17.2341C55.8766 19.5497 51.6954 19.5247 48.7362 17.1747C49.1768 16.1341 49.9268 15.2529 50.8831 14.6466C52.2018 13.8153 53.8143 13.5872 55.3112 14.0216C56.8112 14.4591 58.0487 15.5153 58.7175 16.9247L58.861 17.2341ZM15.6114 25.0059C12.5864 27.2997 8.38321 27.2153 5.45537 24.7997C5.89913 23.7747 6.63977 22.9091 7.58033 22.3091C8.89905 21.4809 10.5116 21.2528 12.0085 21.6903C13.5054 22.1247 14.746 23.1809 15.4147 24.5872L15.6114 25.0059ZM73.9802 48.8339C70.9646 51.1433 66.7583 51.0746 63.821 48.6683C64.2616 47.6339 65.0054 46.759 65.9554 46.1558C67.2741 45.3246 68.8867 45.0965 70.3835 45.534C71.8804 45.9683 73.1211 47.0246 73.7898 48.434L73.9802 48.8339Z"
                fill="#FF8200"
              />
            </svg>
          </motion.div>
        </div>
        <div className="col-span-9 flex items-center text-[38px] border-t border-gray-200 py-6">
          {/* <p className="px-10">
            <span className="font-normal text-[48px]">75%</span> of our business
            is through repeat clients or referrals
          </p> */}
          <div className=" px-10 h-[60px] overflowhidden  ">
            <motion.p
              className="font-normal text-[38px]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <span className="font-normal text-[48px]">75% </span>of our
              business is through repeat clients or referrals
            </motion.p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-3 flex items-center justify-center border-t border-r border-gray-200 py-6">
          <motion.div
            className="font-normal text-[38px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.9,
              ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_207_2516)">
                <path
                  d="M16.3988 16.3996C15.0655 17.7329 13.8655 19.0663 12.7988 20.5329H24.6655C26.3988 15.0663 28.6655 10.5329 31.5988 7.59961C25.9988 9.06628 20.6655 12.1329 16.3988 16.3996Z"
                  fill="#FF8200"
                />
                <path
                  d="M23.9993 23.4668H10.9327C8.39935 28.0001 6.93268 33.2001 6.66602 38.5335H21.9993C22.1327 33.2001 22.7993 28.1335 23.9993 23.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M38.5336 23.4668H26.9336C25.7336 28.0001 25.0669 33.0668 24.9336 38.5335H38.5336V23.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M41.4668 6.79883V20.5322H52.1335C49.6001 13.0655 45.7335 7.73216 41.4668 6.79883Z"
                  fill="#FF8200"
                />
                <path
                  d="M67.0666 20.5329C62.6666 14.2663 55.9999 9.59961 48.2666 7.59961C51.1999 10.5329 53.5999 15.0663 55.1999 20.5329H67.0666Z"
                  fill="#FF8200"
                />
                <path
                  d="M38.5339 6.79883C37.0672 7.06549 35.6005 7.99883 34.2672 9.33216C31.6005 11.8655 29.4672 15.8655 27.8672 20.6655H38.6672V6.79883H38.5339Z"
                  fill="#FF8200"
                />
                <path
                  d="M41.4668 38.5335H55.0668C54.9335 33.0668 54.2668 28.0001 53.0668 23.4668H41.4668V38.5335Z"
                  fill="#FF8200"
                />
                <path
                  d="M68.9333 23.4668H56C57.0667 28.0001 57.7333 33.0668 57.8667 38.5335H73.3333C73.0667 33.0668 71.6 28.0001 68.9333 23.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M31.7336 72.4001C28.8003 69.4668 26.4003 64.9335 24.8003 59.4668H12.9336C17.3336 65.7335 24.0003 70.4001 31.7336 72.4001Z"
                  fill="#FF8200"
                />
                <path
                  d="M38.5339 73.2001V59.4668H27.8672C30.4005 66.9335 34.2672 72.2668 38.5339 73.2001Z"
                  fill="#FF8200"
                />
                <path
                  d="M52.134 59.4668H41.334V73.2001C42.8007 72.8001 44.2673 72.0001 45.6007 70.6668C48.4007 68.2668 50.534 64.2668 52.134 59.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M67.2004 59.4668H55.3337C53.6004 64.9335 51.3337 69.4668 48.4004 72.4001C54.1337 70.9335 59.4671 68.0001 63.7337 63.6001C64.9337 62.2668 66.1337 60.9335 67.2004 59.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M23.9993 56.5335C22.9327 52.0001 22.266 46.9335 22.1327 41.4668H6.66602C6.93268 46.9335 8.39935 52.0001 11.066 56.5335H23.9993Z"
                  fill="#FF8200"
                />
                <path
                  d="M38.5336 41.4668H24.9336C25.0669 46.9335 25.7336 52.0001 26.9336 56.5335H38.5336V41.4668Z"
                  fill="#FF8200"
                />
                <path
                  d="M41.4668 56.5335H53.0668C54.2668 52.0001 54.9335 46.9335 55.0668 41.4668H41.4668V56.5335Z"
                  fill="#FF8200"
                />
                <path
                  d="M73.3328 41.4668H57.9995C57.8661 46.8001 57.1995 51.8668 56.1328 56.5335H69.0661C71.5995 52.0001 73.0661 46.8001 73.3328 41.4668Z"
                  fill="#FF8200"
                />
              </g>
              <defs>
                <clipPath id="clip0_207_2516">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
          {/* <img
            src="/icons/globe.svg"
            alt="icon3"
            className="h-8 w-8 text-orange-500"
          /> */}
        </div>
        <div className="col-span-9 flex items-center border-t text-[38px] border-gray-200 py-6">
          {/* <p className="px-10">
            <span className="font-normal text-[48px]">10</span> countries
            worldwide — our client partners.
          </p> */}
          <div className=" px-10 h-[60px] overflowhidden  ">
            <motion.p
              className="font-normal text-[38px] leading-[48px]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <span className="font-normal text-[48px]">10 </span>countries
              worldwide — our client partners.
            </motion.p>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center border-t border-r border-gray-200 py-6">
          {/* <img
            src="/icons/globe.svg"
            alt="icon3"
            className="h-8 w-8 text-orange-500"
          /> */}
        </div>
        <div className="col-span-9 flex items-center border-t text-[38px] border-gray-200 py-6">
          <p className="px-10 py-10">
            {/* <span className="font-semibold text- text-[48px]">10</span>{" "}
            countries worldwide — our client partners. */}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

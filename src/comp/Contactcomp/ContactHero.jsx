"use client";
import { useState } from "react";
import Image from "next/image";
// import classNames from "classnames";
import { motion } from "framer-motion";

export default function ContactHero() {
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

  return (
    <motion.section>
      {/* Section Header */}

      <div className="contact-hero h-[500px] fixed -z-[999999] w-full ">
        <motion.div
          className="w-full h-full z-[1]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
          }}
          style={{
            backgroundImage: 'url("/images/contact.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            // backgroundPosition: "0% 100%",
            // backgroundSize: "cover",
          }}
        ></motion.div>
      </div>
      <div className="grid grid-cols-12 border-b border-gray-200 pt-6">
        <div className="col-span-3 flex items-end justify-start border-r border-gray-200 pt-[114px]">
          <div className="h-[48px] overflowhidden  "></div>
        </div>
        <div className="col-span-9 bg-[#fff] flex items-end justify-start p8">
          {/* <h2 className="text-[#727272] text-[20px] px-6 py-2 font-normal font-mark">
            Description
          </h2> */}
          <div className="  h[48px] pl-6 overflowhidden bg-[#fff] ">
            <div className="  h-[100px]  overflow-hidden relative ">
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
                Contact Us
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

            <motion.p
              className="text-[38px] leading-[48px] w-[100%] mauto py-20"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0, 1, 0.49, 1], delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Have questions about how <br />
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
                Nahteave
              </motion.span>
              can support your journey?
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        // className={`w-full  mt-0 border-gray-200 bg[#F5F5F5] }`}

        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-12 bg-[#fff] border-b border-gray-200"
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

          <motion.p
            className="text-[20px] leading-[30px] w-[80%] mauto font-mark py-20"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1], delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            We’d love to hear from you. Whether you're exploring possibilities
            or facing specific challenges, Nahteava is here to co-create
            meaningful solutions that align with your vision. Connect with us in
            the way that feels right for you — chat with us online, send us an
            email, give us a call, or join the conversation on social media.
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
    </motion.section>
  );
}

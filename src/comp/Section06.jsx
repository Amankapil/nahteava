"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section06() {
  const sectionRef = useRef(null);

  // Get scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when the section enters and leaves the viewport
  });

  // Move X from 0 to 100px as user scrolls
  //   const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[602px] overflow-hidden w-full !bg-[#F5F5F5]"
    >
      {/* Moving Background */}
      {/* <motion.div style={{ y }} className="absolute inset-0 z-0"> */}
      <motion.div className="absolute inset-0 z-1">
        <motion.div
          // className="w-full h-full z-[1]"
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
          }}
          className="w-full h-full bg[#F5F5F5]  z-[9] relative"
          style={{
            backgroundImage: 'url("/images/bui2.svg")',
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
        ></motion.div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z10 grid grid-cols-12 w-full h-full border border-gray-300">
        {/* Left Section Number */}
        <div className="col-span-3 relative flex items-start justify-start borderr border-[#CCCCCC]">
          <div className="absolute top-0 right-0 w-[1px] h-[60%] bg-[#CCCCCC] -z-0"></div>
          {/* <div className="bg-black text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4">
            <span className="text-[60px] leading-[100%]">06</span>
          </div> */}
          <motion.div
            className="bg-black text-white z-[9]  px-6 py-2 font-bold h-[76px] w-[200px] mt-6 "
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 200, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <spna className="text-[60px] leading-[100%]">06</spna>
          </motion.div>
        </div>

        {/* Right Section Content */}
        <div className="col-span-9 px-6 flex flex-col justify-start  z-[99]">
          {/* <h2 className="text-4xl font-semibold mb-6">Work With Us</h2> */}
          <div className="  h-[108px] overflowhidden relative pt-6">
            <motion.h1
              className="text-[60px] font-normal font-mark mb15 leading-[60px]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,

                ease: [0, 1, 0.49, 1], // Custom cubic-bezier easing
              }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Work With Us
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
          {/* <p className="text-[38px] font-mark mb-10">
            Looking for more than a{" "}
            <span className="bg-[#EBFF88] px-1">Job</span>? Build the{" "}
            <span className="bg-[#96DFEF] px-1">career</span> you’ve always{" "}
            <span className="bg-[#88F58F] px-1">envisioned</span> We
            <span className="bg-[#B3F588] px-1">invest</span> in our people,
            helping them <span className="bg-[#FEDEFC] px-1">grow</span> both
            professionally and personally.
          </p> */}
          <motion.p
            className="text-[38px] font-mark mt-10 w-[75%] leading-[46px]"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Looking for more than a{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#EBFF88, #EBFF88)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Job
            </motion.span>
            ? Build the{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#96DFEF, #96DFEF)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              career
            </motion.span>{" "}
            you’ve always{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#88F58F, #88F58F)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              envisioned
            </motion.span>
            . We{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#B3F588, #B3F588)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              invest
            </motion.span>{" "}
            in our people, helping them{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#FEDEFC, #FEDEFC)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              grow
            </motion.span>{" "}
            both professionally and personally.
          </motion.p>

          <div className="mt-20 mb-36 px4">
            <div className="flx justify-center mt10">
              <motion.button
                className="relative overflow-hidden group w-[190px] h-[48px] bg-black text-white py-3 px-6 flex items-center justify-center text-sm"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Background Fill from Bottom to Top */}
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
                  className="absolute bottom-0 left-0 w-full bg-[#FF8200] z-0"
                />

                {/* Button Text & Arrows */}
                <span className="relative z-10 text-[16px] flex items-center justify-between gap-4">
                  Join Nahteava
                  <span className="relative overflow-hidden w-[16px] h-[20px] inline-block">
                    <motion.span
                      className="absolute left-0"
                      initial={{ x: 0 }}
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 16 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      →
                    </motion.span>
                    <motion.span
                      className="absolute left-0"
                      initial={{ x: -16 }}
                      variants={{
                        rest: { x: -26 },
                        hover: { x: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

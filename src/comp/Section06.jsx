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
      className="relative h[602px] overflow-hidden w-full !bg-[#F5F5F5]"
    >
      {/* Moving Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[#F5F5F5]"
          style={{
            backgroundImage: 'url("/images/mon.png")',
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
        ></div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 grid grid-cols-12 w-full h-full bg-gray100/90 border border-gray-300">
        {/* Left Section Number */}
        <div className="col-span-3 flex items-start justify-start border-r border-[#CCCCCC]">
          {/* <div className="bg-black text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4">
            <span className="text-[60px] leading-[100%]">06</span>
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
            <spna className="text-[60px] leading-[100%]">06</spna>
          </motion.div>
        </div>

        {/* Right Section Content */}
        <div className="col-span-9 p-10 flex flex-col justify-start">
          {/* <h2 className="text-4xl font-semibold mb-6">Work With Us</h2> */}
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
              Work With Us
            </motion.h1>
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
            className="text-[38px] font-mark mb-10"
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

          <div className="mt-10 mb-28 px4">
            <div className="flx justify-center mt-10">
              <motion.button
                className="relative overflow-hidden group bg-black text-white py-3 px-9 flex items-center justify-center text-sm"
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
                <span className="relative z-10 text-[16px] flex items-center gap-4">
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

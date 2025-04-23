"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section03() {
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
      className=" relative h-[90vh] overflow-hidden w-full bg-[#f5f5f5] "
    >
      {/* Moving Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* <motion.div className="absolute inset-0 z-0"> */}
        <div
          className="w-full h-full "
          style={{
            backgroundImage: 'url("/images/bui.png")',
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
            <span className="text-[60px] leading-[100%]">03</span>
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
            <spna className="text-[60px] leading-[100%]">03</spna>
          </motion.div>
        </div>

        {/* Right Section Content */}
        <div className="col-span-9 p-10 flex flex-col justify-start">
          {/* <h2 className="text-4xl font-semibold mb-6">Who We Are</h2> */}
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
              Who We Are
            </motion.h1>
          </div>
          {/* <p className="text-[38px] font-mark mb-10">
            Trusted <span className="bg-lime-300 px-1">Advisors</span>,{" "}
            <span className="bg-rose-300 px-1">Consultants</span> and{" "}
            <span className="bg-indigo-300 px-1">Strategists</span> focused on
            you and your organization's goals.
          </p> */}
          <motion.p
            className="text-[38px] font-mark mb-10"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 1, 0.49, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Trusted{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#D9F99D, #D9F99D)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Advisors
            </motion.span>
            ,{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#FECACA, #FECACA)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              Consultants
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="px-1 inline-block"
              style={{
                backgroundImage: "linear-gradient(#A5B4FC, #A5B4FC)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "0% 100%",
              }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Strategists
            </motion.span>{" "}
            focused on you and your organization's goals.
          </motion.p>

          <div className="mt-10 mb-28 px-">
            <div className="fle justify-center mt-10">
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
                <span className="relative text-[16px] z-10 pl4 group-hoverpl-0 ">
                  Get to know us
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

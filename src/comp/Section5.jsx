"use client";
import Image from "next/image";
import React from "react";

const articles = [
  {
    type: "Article",
    title: "The only way to get a grip on your technology",
    image:
      "https://s3-alpha-sig.figma.com/img/3a29/ec2a/2ca00c95b0cf02f6d8ba50500fa7159b?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uECzREsbywdY47gWt8Y3JSlOZ5OWbTIahY-nCa5dkFWbgbMvS6Z8KoxsojZ5m~WipG8kOMrqwAXeewyF6556X4ACpgSC7wm5ByA0ukNtT7F8dj2FDgccr8IMwy8BuwVU6q3u8ifmT8rnk33JlQr-rWjyRHWfdZxsV0bFJQcvmfPT21jfSTdoygU53tX2mlQEgsXYDwj7fe1Kao8A9srn8oXTg2bz4jvtiU7lMReWcuwYprbZHEqnYWiq1hPEC5voCpamivlw1AcSiuo9PQn2bWvfrF77DkGOyrZ3DjN3d9UTQMU7AD5sC7SW2Il0O7uIatOoxMWyz9mx864B3oQ7rA__",
  },
  {
    type: "Article",
    title: "The hard truth about soft assets",
    image:
      "https://s3-alpha-sig.figma.com/img/886a/6ee0/ada0e2f294a030155bdfab81c57514d9?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CEZW7vnGAT0jdi6k5cQbN-tnFtVjwfqOhGyaLeTlM23i2UqLvXXkMvgj1Ty2jcHbvWL8cMn7odNlZloJaxVnJMOYVNNUMGrDGXOqnxTm01y997DAnrAgl4EkpV~kw-VJNAblA9fT2P6gF4W3Oq6NlW6ZyZp0S~xnh5YKlBnThnPTzwVb8v7gb2J7cez8pMTx5qOVTQ09Vs4I8eKqhu0CIuuOZY1s40JC5cKHgmskY84oB0nplAm4xFw25K~p9SjwCZIMeK8ZklJqM4r09YYmQJIaOaHT~g1H6eE8Y53~QBso2KmHJJFeEzT-dpbbAVMa4EZus4eTTY5GM84xUYUKgw__",
  },
  {
    type: "Community",
    title: "Nahteava sponsors BE MINE 2022",
    image:
      "https://s3-alpha-sig.figma.com/img/cba6/34df/ff5df5d8005ab3f7dbde403c592e2f92?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VreEgn6jR2Xw1d500ph-h3olM4iYL6FSP5Z8Nq-1HELpEPAA1POkDTdjNfCrtOOaeXk3bGyJ5-BpUspkpyTTyfYgwVEiyGbo1WExvEcfZ~B9TBcVyrV0w4k953nT8zOwk~-Zl5Hnf4YruLZKZOQJsg7mIzn3vMZlqrCGv2aTyn0gRp1jQoRtdRnuxxlZCZPdPDYSFW2qnCnD-Q08msHSrtyTu6PxNC7VS55c6bxg3G4nFPs4M1jvL5IYr4dZbaqzBmAfTTGRsxsLKqQ3jfossTxUXExTTaOraeU9RFJB2HAPH3RFBaGL-vXpru-Urv6ZCwa4hbgiywQQsIesASfmew__",
  },
  {
    type: "Point Of View",
    title: "The great resignation: A New York Work-Life ",
    image:
      "https://s3-alpha-sig.figma.com/img/abcc/cea5/86df1f20164127eac2ef1f5405a782b7?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k7MfnuPxcDbh2IFwXUaAKVEMAg-rDqyYTYqvf6LvcMEsOOMUXAczjAX9JU918ClvDCwU0A~sGHjYBp12jDYNsqz5N9jR2caSij07Sc8aXbiadKcbgQ-4IWNaJE03TmiJ0r3IWzaXkzk482zYx65f4ZTjDLn~VsiTqBwzEje0JASP3D5Q6KTAkA8~IJ5JPvG~3-KIUJL9SJwn6eP46S8egqGoZ3oJZwlbAfJ7qXmW0W-UEvZ9MWzMGJpSk-lzRhgEA~2alrWQd50uE6hxl7U9zKmowLw-Wh0crlEv9ptwS4iUgl-ERZfcpqgRFX7bnBqUH7Tt08A0RrQTcTSpx1NQhA__",
  },
];
import { motion } from "framer-motion";

export default function Section5() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };
  return (
    <>
      <div className="grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          <div className="bglack text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4 ">
            {/* <spna className="text-[60px] leading-[100%]">05</spna> */}
          </div>
        </div>
        <div className="col-span-9 px-8 py-4">
          <h2 className="text-[60px] font-normal font-mark mb-4">
            {/* Our Latest News And Insights */}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-3 flex items-satrt justify-start border-r border-[#CCCCCC] ">
          {/* <div className="bg-black text-white px-6 py-2 font-bold h-[76px] w-[200px] mt-4 ">
            <spna className="text-[60px] leading-[100%]">05</spna>
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
            <spna className="text-[60px] leading-[100%]">05</spna>
          </motion.div>
        </div>
        <div className="col-span-9 px-8 py-4">
          {/* <h2 className="text-[60px] font-normal font-mark mb-4">
            Our Latest News And Insights
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
              Our Latest News And Insights
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] py-16 px-4">
        {/* <div className="grid grid-cols-1 borde sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className={`relative border-2 border-dashed h-[383px] border-orange-400 p-1 ${
                idx % 2 === 1 ? "mt-[200px]" : ""
              } ${idx === 0 ? "" : ""}`}
            >
              <div className="absolute z-[9999] -top-1 -left-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -top-1 -right-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -bottom-1 -left-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -bottom-1 -right-1 w-3 h-3 bg-orange-500"></div>

              <div className="bg-[#E0E0E0]">
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#F3F3F3] px-2 py-1 text-sm font-medium">
                    {item.type}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-[22px] font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>

                <button className="w-full bg-black text-center text-white py-4 px-6 flex items-center justify-center text-base relative">
                  Read now
                  <span className="ml-2 text-xl absolute right-4">→</span>
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4"
        >
          {articles.map((item, idx) => (
            <motion.div
              variants={card}
              key={idx}
              className={`relative border-2 border-dashed h-[383px] border-orange-400 p-1 ${
                idx % 2 === 1 ? "mt-[200px]" : ""
              }`}
            >
              {/* Orange Corners */}
              <div className="absolute z-[9999] -top-1 -left-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -top-1 -right-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -bottom-1 -left-1 w-3 h-3 bg-orange-500"></div>
              <div className="absolute z-[9999] -bottom-1 -right-1 w-3 h-3 bg-orange-500"></div>

              <div className="bg-[#E0E0E0]">
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#F3F3F3] px-2 py-1 text-sm font-medium">
                    {item.type}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-[22px] font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* <button className="w-full bg-black text-center text-white py-4 px-6 flex items-center justify-center text-base relative">
                  Read now
                  <span className="ml-2 text-xl absolute right-4">→</span>
                </button> */}
                <motion.button
                  className="relative overflow-hidden group bg-black w-full text-white py-3 px-9 flex items-center justify-center text-sm"
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
                  <span className=" z-10 text-[16px] flex justify-center items-center gap-4">
                    Read now
                    <span className="absolute right-4 overflow-hidden w-[16px] h-[13px] inline-block">
                      <motion.span
                        className="absolute left-0"
                        initial={{ x: 0 }}
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 16 },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 5.25H11.1275L6.935 1.0575L8 0L14 6L8 12L6.9425 10.9425L11.1275 6.75H0V5.25Z"
                            fill="white"
                          />
                        </svg>
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
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 5.25H11.1275L6.935 1.0575L8 0L14 6L8 12L6.9425 10.9425L11.1275 6.75H0V5.25Z"
                            fill="white"
                          />
                        </svg>
                      </motion.span>
                    </span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-16 mb-28">
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
              View all
            </span>
          </motion.button>
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

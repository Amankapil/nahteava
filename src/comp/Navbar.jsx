// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiSearch } from "react-icons/fi";
// import { IoMdClose } from "react-icons/io";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full z-[9999999999999] ">
//       <div className="text-2xl font-bold text-gray-800">nahteava</div>

//       <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
//         <a href="#">Services</a>
//         <a href="#">Insights</a>
//         <a href="#">Industries</a>
//         <a href="#">Solutions</a>
//         <a href="#">About Us</a>
//         <a href="#">Contact</a>
//       </div>

//       <div className="flex items-center gap-4">
//         <AnimatePresence>
//           {searchOpen ? (
//             <motion.input
//               key="search"
//               initial={{ width: 0, opacity: 0 }}
//               animate={{ width: 200, opacity: 1 }}
//               exit={{ width: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               type="text"
//               placeholder="Search..."
//               className="px-2 py-1 border border-gray-300 rounded-md outline-none"
//             />
//           ) : null}
//         </AnimatePresence>

//         <button
//           onClick={() => setSearchOpen(!searchOpen)}
//           className="text-xl text-gray-700"
//         >
//           {searchOpen ? <IoMdClose /> : <FiSearch />}
//         </button>

//         <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
//           Let’s Talk →
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const services = [
  { title: "Advisory Services" },
  { title: "IT Asset Management" },
  { title: "AI Management" },
  { title: "Organization And Change" },
];
const services2 = [
  { title: "Software Asset Management" },
  { title: "Software Industry Consulting" },
  { title: "Strategy" },
  { title: "Technology Consulting" },
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex1, setActiveIndex1] = useState(null);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-6 py-4  bg-[#F5F5F5] fixed w-full z-[999999999]">
        <div className="text-2xl font-bold text-gray-800">
          <Image alt="logo" src="/logo.png" width={160} height={40} />
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium text-[#4A4A4A] relative font-mark text-[16px]">
          <div
            // onMouseEnter={() => setShowDropdown("services")}
            // onMouseLeave={() => setShowDropdown(null)}
            onClick={() => setShowDropdown(!showDropdown)}
            className={`relative cursor-pointer flex items-center p-2  gap-2 ${
              showDropdown
                ? "text-[#FF8200] border border-[#DBDBDB] bg-[#E6E6E6] py-2"
                : ""
            }`}
          >
            Services{" "}
            {showDropdown ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.98448 7.23469L5.73448 3.48469C5.76931 3.44983 5.81066 3.42217 5.85619 3.4033C5.90171 3.38442 5.95051 3.37471 5.99979 3.37471C6.04907 3.37471 6.09787 3.38442 6.14339 3.4033C6.18892 3.42217 6.23028 3.44983 6.2651 3.48469L10.0151 7.23469C10.0855 7.30506 10.125 7.40049 10.125 7.50001C10.125 7.59952 10.0855 7.69495 10.0151 7.76532C9.94474 7.83568 9.8493 7.87521 9.74979 7.87521C9.65028 7.87521 9.55484 7.83568 9.48448 7.76532L5.99979 4.28016L2.5151 7.76532C2.48026 7.80016 2.4389 7.8278 2.39338 7.84665C2.34786 7.86551 2.29906 7.87521 2.24979 7.87521C2.20052 7.87521 2.15173 7.86551 2.1062 7.84665C2.06068 7.8278 2.01932 7.80016 1.98448 7.76532C1.94964 7.73048 1.922 7.68911 1.90314 7.64359C1.88429 7.59807 1.87458 7.54928 1.87458 7.50001C1.87458 7.45073 1.88429 7.40194 1.90314 7.35642C1.922 7.3109 1.94964 7.26953 1.98448 7.23469Z"
                  fill="#FF8200"
                />
              </svg>
            ) : (
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.01531 0.765311L5.26531 4.51531C5.23048 4.55018 5.18912 4.57784 5.1436 4.59671C5.09807 4.61558 5.04928 4.62529 4.99999 4.62529C4.95071 4.62529 4.90192 4.61558 4.85639 4.59671C4.81087 4.57784 4.76951 4.55018 4.73468 4.51531L0.984682 0.765311C0.914317 0.694946 0.874786 0.59951 0.874786 0.499999C0.874786 0.400487 0.914317 0.305051 0.984682 0.234686C1.05505 0.164321 1.15048 0.12479 1.24999 0.12479C1.34951 0.12479 1.44494 0.164321 1.51531 0.234686L4.99999 3.71984L8.48468 0.234686C8.51952 0.199845 8.56089 0.172207 8.60641 0.153351C8.65193 0.134495 8.70072 0.12479 8.75 0.12479C8.79927 0.12479 8.84806 0.134495 8.89358 0.153351C8.9391 0.172207 8.98047 0.199845 9.01531 0.234686C9.05015 0.269527 9.07779 0.31089 9.09664 0.356413C9.1155 0.401935 9.1252 0.450726 9.1252 0.499999C9.1252 0.549272 9.1155 0.598062 9.09664 0.643585C9.07779 0.689107 9.05015 0.73047 9.01531 0.765311Z"
                  fill="#4A4A4A"
                />
              </svg>
            )}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 -left-[380px] h[400px] w-[1450px] gap-4 border-t border-[#ccc] bg-[#F5F5F5] shadow-lg flex z-50 items-center justify-center"
                >
                  {/* Left Image */}
                  <div className="w-[377px]  bg-[#FF8200] flex justify-center items-center ">
                    <div className="w-[272px] h-[272px]  bg-[#FF8200] flex justify-center items-center p-4 m6">
                      <svg
                        width="202"
                        height="195"
                        viewBox="0 0 202 195"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M186.34 149.5H14.8652L100.603 0.999023L186.34 149.5Z"
                          stroke="white"
                        />
                        <circle
                          cx="152"
                          cy="57"
                          r="49.5"
                          stroke="white"
                          stroke-dasharray="4 4"
                        />
                        <circle
                          cx="50"
                          cy="57"
                          r="49.5"
                          stroke="white"
                          stroke-dasharray="4 4"
                        />
                        <circle
                          cx="101"
                          cy="145"
                          r="49.5"
                          stroke="white"
                          stroke-dasharray="4 4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex">
                    {/* Right Services List */}
                    <div className="flex flex-col w-[478px] border-l  border-[#CCCCCC]">
                      {services.map((service, index) => {
                        const hovered = activeIndex === index;
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(-1)}
                            className="relative overflow-hidden border-r flex items-center justify-between px-4 border-t border-b border-[#CCCCCC] py-6 bg-[#F5F5F5] cursor-pointer group"
                          >
                            <motion.div
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: hovered ? 1 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className={`absolute inset-0 ${
                                hovered ? "origin-top" : "origin-bottom"
                              } bg-[#FF8200] z-0`}
                            />

                            <span className="text-[20px] text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                              {service.title}
                            </span>
                            <span className="text-lg text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                              ↗
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col w-[478px] ">
                      {services2.map((service, index) => {
                        const hovered = activeIndex1 === index;
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => setActiveIndex1(index)}
                            onMouseLeave={() => setActiveIndex1(-1)}
                            className="relative overflow-hidden flex border-r items-center justify-between px-4 border-t border-b border-[#CCCCCC] py-6 bg-[#F5F5F5] cursor-pointer group"
                          >
                            <motion.div
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: hovered ? 1 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className={`absolute inset-0 ${
                                hovered ? "origin-top" : "origin-bottom"
                              } bg-[#FF8200] z-0`}
                            />

                            <span className="text-[20px] text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                              {service.title}
                            </span>
                            <span className="text-lg text-[#4A4A4A] group-hover:text-white z-10 transition-colors duration-300">
                              ↗
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a className=" p-2" href="#">
            Solutions
          </a>
          <a className=" p-2" href="#">
            Industries
          </a>
          <a className=" p-2" href="#">
            Insights
          </a>

          <div
            // onMouseEnter={() => setShowDropdown("about")}
            // onMouseLeave={() => setShowDropdown(null)}
            className="relative cursor-pointer flex items-center gap-2"
          >
            About Us{" "}
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.01531 0.765311L5.26531 4.51531C5.23048 4.55018 5.18912 4.57784 5.1436 4.59671C5.09807 4.61558 5.04928 4.62529 4.99999 4.62529C4.95071 4.62529 4.90192 4.61558 4.85639 4.59671C4.81087 4.57784 4.76951 4.55018 4.73468 4.51531L0.984682 0.765311C0.914317 0.694946 0.874786 0.59951 0.874786 0.499999C0.874786 0.400487 0.914317 0.305051 0.984682 0.234686C1.05505 0.164321 1.15048 0.12479 1.24999 0.12479C1.34951 0.12479 1.44494 0.164321 1.51531 0.234686L4.99999 3.71984L8.48468 0.234686C8.51952 0.199845 8.56089 0.172207 8.60641 0.153351C8.65193 0.134495 8.70072 0.12479 8.75 0.12479C8.79927 0.12479 8.84806 0.134495 8.89358 0.153351C8.9391 0.172207 8.98047 0.199845 9.01531 0.234686C9.05015 0.269527 9.07779 0.31089 9.09664 0.356413C9.1155 0.401935 9.1252 0.450726 9.1252 0.499999C9.1252 0.549272 9.1155 0.598062 9.09664 0.643585C9.07779 0.689107 9.05015 0.73047 9.01531 0.765311Z"
                fill="#4A4A4A"
              />
            </svg>
            {/* Similar dropdown can go here */}
          </div>

          <a className=" p-2" href="#">
            Contact
          </a>
        </div>

        {/* Search & Button */}
        <div className="flex items-center gap-4">
          <AnimatePresence>
            {searchOpen && (
              <motion.input
                key="search"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                type="text"
                placeholder="Search..."
                className="px-2 py-1 border border-gray-300 rounded-md outline-none"
              />
            )}
          </AnimatePresence>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-xl text-gray-700"
          >
            {searchOpen ? <IoMdClose /> : <FiSearch />}
          </button>
          {/* ??  lets talk underline animation  */}
          <button className="relative group text-[16px] text-[#4A4A4A] cursor-pointer px-6 py-2 mb15 font-normal transition duration-300 hover:text-[#FF8200] after:content-[''] after:absolute after:bottom-2 after:left-6 after:h-[1px] after:w-[80%] after:bg-[#4A4A4A] hover:after:bg-[#FF8200] after:transition-all after:duration-300 hover:after:w-[80%]">
            Let’s Talk
            <span className="absolute overflow-hidden w-4 h-4 top-[14px] ml-2 -mr-[86px]">
              <span className="absolute text-amber-50 left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </span>

              <span className="absolute text-amber-50 left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                    fill="#FF8200"
                  />
                </svg>
              </span>
            </span>
          </button>
          {/* <button className="bg-gray900 group underline text-[#4A4A4A] hover:text-[#FF8200] cursor-pointer px-4 py-2 rounded  transition flex items-center justify-center">
            Let’s Talk
            <span className="absolute overflow-hidden w-4 h-3 ml-1 -mr-[86px]">
              <span className="absolute text-amber-50 left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">

                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </span>

              <span className="absolute text-amber-50 left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                    fill="#FF8200"
                  />
                </svg>
              </span>
            </span>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

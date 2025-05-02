"use client";
import Header from "@/comp/common/Header";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

import img from "./assets/Group 36.png";
import logo from "./assets/Frame 473.svg";

const Page = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!logoRef.current) return;

      // Get the position of the logo
      const logoRect = logoRef.current.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;

      // Calculate mouse position relative to logo center
      const mouseX = e.clientX - logoCenterX;
      const mouseY = e.clientY - logoCenterY;

      // Calculate rotation values (limited to certain degrees)
      const rotateY = (mouseX / logoRect.width) * 10; // 20 degrees max rotation
      const rotateX = -(mouseY / logoRect.height) * 10;

      // Apply the transformation
      logoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="font-mark tracking-tight">
        <Header />
        <div className="pt-24">
          <svg
            width="1440"
            height="1"
            viewBox="0 0 1440 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="1440"
              y2="0.500126"
              stroke="#E1E1E1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        <section className="text-center py-4 px-0">
          <h1 className="text-[100px] font-bold leading-snug">
            <span className="text-[#FF8200]">Leaders</span> in IT &<br />
            <span className=" flex items-center">
              <span className="text-black ml-[131px] -mt-[130px]">
                Software
              </span>
              <span className="-z-1 absolute">
                <svg
                  width="1440"
                  height="1"
                  viewBox="0 0 1440 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4.37114e-08"
                    y1="0.5"
                    x2="1440"
                    y2="0.500126"
                    stroke="#E1E1E1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </span>

              <span
                ref={logoRef}
                className="inline-flex items-center justify-center bg-[#fff] border border-[#ccc] h-[220px] w-[234px] transition-transform duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={logo}
                  width={140}
                  height={140}
                  alt="logo"
                  className="inline-block mx-4"
                  style={{
                    transform: "translateZ(50px)", // Gives a slight 3D pop effect
                  }}
                />
              </span>
              <span className="wfull flex items-end justify-end">
                <Image
                  src={img}
                  height={168}
                  alt="logo"
                  className="inlineblock bg-[#fff] ml-10"
                />
              </span>
            </span>
            <span className="flex justify-center gap-10">
              <span className="text-black absolute left-[332px] top-[434px]">
                Asset
              </span>{" "}
              <span className="inline-flex items-center">
                <span className="text-black absolute left-[690px] top-[494px]">
                  Management
                </span>
              </span>
            </span>
          </h1>

          <div className="flex justify-center justify- gap-4 mt-10"></div>
          <div className="flex justify-center justify- gap-4 mt-10"></div>

          <div className="mt-10 flex justify-center gap">
            {/* <button className="bg-black text-white px-5 py-3 rounded-sm inline-flex items-center hover:bg-gray-800">
              <span className="mr-2">➔</span> Lets talk
            </button> */}
            <button className="flex items-center bg-[#161616] font-mark tracking-tight text-white px-3 py-2 text-[20px]  gap-1">
              {/* <span className="bg-orange-600 text-white p-1 rounded-sm mr-2">
                ➔
              </span> */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_91_604)">
                  <rect width="16" height="16" fill="#FF8200" />
                  <path
                    d="M12.041 6.9901L12.0369 8.96779L9.14076 8.96227L9.39902 11.4965L7.92266 12.9729L6.52364 11.5739L9.13524 8.96227L3.98593 8.95329L3.99007 6.9756L9.23813 6.98527L6.60098 4.34812L8 2.9491L12.041 6.9901Z"
                    fill="#161616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_604">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Lets talk
            </button>
          </div>

          <div className="pt-10">
            <svg
              width="1440"
              height="1"
              viewBox="0 0 1440 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="0.5"
                x2="1440"
                y2="0.500126"
                stroke="#E1E1E1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
          <div className="pt-10">
            <p className="text-[#A1A1A1] text-[24px]">
              Helping organizations streamline IT operations, reduce costs,
              <br /> and unlock long-term value through expert consulting.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

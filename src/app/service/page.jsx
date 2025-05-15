"use client";
import img2 from "./assets/Rectangle 43.png";
import img from "./assets/Rectangle 42.png";
import img3 from "./assets/Group 40.svg";
import img4 from "./assets/Group 41.svg";
import img8 from "./assets/Group 42.svg";
import img5 from "./assets/Component 3.svg";
import img6 from "./assets/Group 2.svg";
import img7 from "./assets/Group 3.svg";
import img9 from "./assets/Component 7.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ServiceHead from "@/comp/serviceCom/ServiceHead";
import SciFiCircles from "./SciFiCircles";

export default function Home() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        repeat: -1,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, []);
  return (
    <div className="  text-white font-mark tracking-tight overflow-hidden h-[900px]">
      {/* Navbar */}
      <ServiceHead />

      {/* Hero Section */}
      <div className="pt-32 relative bg-[#F58220]  h-[390px] px-6  gap-6">
        {/* Left Text */}
        <div className="absolute left-0  z-[2]  top-0">
          <Image src={img3} alt="ljk" />
        </div>
        <div className="absolute right-0  z-[2]  top-0">
          <Image src={img9} alt="ljk" />
        </div>

        <div className="flex z-[999] gap-10 h-[390px]">
          <h1 className="text-[60px] z-[99] w-[134%] font-mark font-extrabold leading-tight  mb-6">
            Leaders in IT & Software Asset Management
          </h1>
          <div>
            <p className="text-[22px] font-bold text-left font-mark  leading-relaxed relative w[50%]  z-[999999] mb-4 text-white">
              Independent, vendor-neutral advisors delivering sustainable
              results in IT Asset Management, Software Asset Management, and
              strategic technology consulting.
            </p>
            <a
              href="#"
              className="inlineblock flex items-center justify-center gap-2 relative  z-[999999] mt-4 text-white text-[24px] font-semibold border-b-2 border-white w-[140px] transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7362 20.2426C13.7525 20.259 14.2522 20.3842 14.8466 20.5208C15.441 20.6575 15.9338 20.7484 15.9417 20.723C15.9496 20.6975 16.0111 20.285 16.0783 19.8061C16.2135 18.8445 16.5406 17.7217 16.8901 17.0195C17.9796 14.8311 19.9344 13.3821 22.3052 13.0055L22.909 12.9096V11.9429V10.9761L22.3618 10.8842C18.7767 10.2828 16.4394 7.6022 16.0022 3.5907C15.9737 3.32875 15.9395 3.1145 15.9264 3.1145C15.8055 3.1145 13.802 3.59733 13.7642 3.63558C13.7368 3.66323 13.7571 3.9088 13.8095 4.18119C14.3893 7.1974 16.0492 9.65177 18.2033 10.678L18.72 10.9242L8.09443 10.9434L1.37549 10.9557V12.9122L8.11172 12.9244L18.7123 12.9438L18.0599 13.2743C16.3676 14.1317 15.0277 15.8136 14.2387 18.071C14.0138 18.7142 13.6746 20.1804 13.7362 20.2426Z"
                  fill="white"
                />
              </svg>
              Lets talk
            </a>
            <div className="absolute left-[270px] z-[2] -bottom-0">
              <Image src={img4} alt="ljk" />
            </div>
            <div className="absolute right-0  z-[2]  bottom-0">
              <Image src={img5} alt="ljk" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        <div className="absolute w[1042px] h[400px] -right-[10%] -top-[60%] z-[999999]  flex items-end justify-end">
          {/* <Image src={img8} alt="Blurred fasdaf" className="objectcover " /> */}
          <SciFiCircles />
        </div>

        <div className="absolute top-[229px] left-[0px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20  "></div>
        <div className="absolute -top-[29px] left-[360px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20  "></div>
        <div className="absolute top-[319px] left-[90px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20  "></div>
        <div className="absolute top-[330px] left[1160px] right-44 w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20  "></div>
        <div className="absolute top-[420px] left[90px] right-0 w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20  "></div>
        <div className="absolute top-[50px] left-[180px] w-[810px] h-[450px] overflowhidden z-20  ">
          <Image
            src={img}
            alt="Blurred people"
            className="objectcover w-full h-full"
          />
        </div>
        <div className="absolute top-[00px] right-[00px] w-[360px] h-[330px] z-30">
          <Image
            src={img2}
            alt="Smiling woman"
            className="objectcover w-full h-full "
          />
        </div>
        <div className="absolute left-0  z-[2]  -bottom-[27%]">
          <Image src={img6} alt="ljk" />
        </div>
        <div className="absolute right-0  z-[2]  -bottom-[28%]">
          <Image src={img7} alt="ljk" />
        </div>
      </div>
      {/* Grid overlay (background boxes) */}
    </div>
  );
}

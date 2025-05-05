"use client";
import img2 from "./assets/Rectangle 43.png";
import img from "./assets/Rectangle 42.png";
import img3 from "./assets/Group 40.png";
import img4 from "./assets/Group 41.png";
import img8 from "./assets/Group 42.svg";
import img5 from "./assets/Component 3.png";
import img6 from "./assets/Group 2.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ServiceHead from "@/comp/serviceCom/ServiceHead";

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
    <div className="  text-white font-mark tracking-tight overflowhidden">
      {/* Navbar */}
      <ServiceHead />

      {/* Hero Section */}
      <div className="pt-32 relative bg-[#F58220]  h-[390px] px-6  gap-6">
        {/* Left Text */}
        <div className="absolute left-0  z-[2]  top-0">
          <Image src={img3} alt="ljk" />
        </div>
        <div className="absolute left-[270px] z-[2] -bottom-0">
          <Image src={img4} alt="ljk" />
        </div>

        <div className="flex z-[999] gap-10">
          <h1 className="text-[60px] z-[99] w-[109%] font-mark font-extrabold leading-tight mb-6">
            Leaders in IT & Software Asset Management
          </h1>
          <div>
            <p className="text-lg leading-relaxed  z-[999] mb-4 text-white/90">
              Independent, vendor-neutral advisors delivering sustainable
              results in IT Asset Management, Software Asset Management, and
              strategic technology consulting.
            </p>
            <a
              href="#"
              className="inline-block relative  z-[999999] mt-4 text-white font-semibold border-b-2 border-white hover:text-black hover:border-black transition"
            >
              → Lets talk
            </a>
            <div className="absolute right-0  z-[2]  bottom-0">
              <Image src={img5} alt="ljk" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        <div className="absolute w-[1042px] h-[400px] right-0 top-20 z-[999999]  flex items-end justify-end">
          <Image src={img8} alt="Blurred fasdaf" className="objectcover " />
        </div>
        {/* <div className="absolute top-[50px] left-[0px] w-[360px]  overflowhidden z-20 shadow-lg">
          <Image src={img6} alt="Blurred people" className="objectcover " />
        </div> */}
        <div className="absolute top-[229px] left-[0px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20 shadow-lg"></div>
        <div className="absolute top-[319px] left-[90px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20 shadow-lg"></div>
        <div className="absolute top-[330px] left-[1170px] w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20 shadow-lg"></div>
        <div className="absolute top-[420px] left[90px] right-0 w-[90px] bg-[#FF8200] h-[90px] overflowhidden z-20 shadow-lg"></div>
        <div className="absolute top-[50px] left-[180px] w-[810px] h-[450px] overflowhidden z-20 shadow-lg">
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
      </div>
      {/* Grid overlay (background boxes) */}
    </div>
  );
}

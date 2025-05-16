// // "use client";
// // import ConnectedSection from "@/comp/ConnectedSection";
// // import Footer from "@/comp/Footer";
// // import Hero from "@/comp/Hero";
// // import Navbar from "@/comp/Navbar";
// // import Section03 from "@/comp/Section03";
// // import Section06 from "@/comp/Section06";
// // import Section5 from "@/comp/Section5";
// // import Services from "@/comp/Services";
// // import TestimonialSwiper from "@/comp/TestimonialSwiper";
// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Lenis from "lenis";

// // export default function Home() {
// //   // const sectionRef = useRef(null);

// //   // // Get scroll progress of this section
// //   // const { scrollYProgress } = useScroll({
// //   //   target: sectionRef,
// //   //   offset: ["start end", "end start"], // when the section enters and leaves the viewport
// //   // });
// //   // const y = useTransform(scrollYProgress, [0, 1], ["00%", "-100%"]);
// //   useEffect(() => {
// //     const lenis = new Lenis({
// //       smooth: true,
// //       duration: 1.2,
// //     });

// //     function raf(time) {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     }

// //     requestAnimationFrame(raf);

// //     return () => lenis.destroy();
// //   }, []);
// //   // const sectionRef = useRef(null);

// //   const [scrollY, setScrollY] = useState(0);

// //   useEffect(() => {
// //     const scroll = () => setScrollY(window.scrollY);
// //     window.addEventListener("scroll", scroll);
// //     return () => window.removeEventListener("scroll", scroll);
// //   }, []);

// //   // Translate the section content upward as user scrolls through this section

// //   return (
// //     <>
// //       <Navbar />
// //       <Hero />
// //       <main className="h-[2500px]">
// //         <div
// //           className="h-[1100px]"
// //           style={{
// //             transform: `translateY(-${scrollY * 0.3}px)`,
// //           }}
// //         >
// //           <ConnectedSection />
// //         </div>
// //         <div
// //           className="h-[900px translate-y-[600px]"
// //           style={{
// //             transform: `translateY(-${scrollY * 0.7}px)`,
// //           }}
// //         >
// //           <Services />
// //         </div>
// //         <div
// //           className="h-[900px translate-y-[1180px]"
// //           style={{
// //             transform: `translateY(-${scrollY * 1.1}px)`,
// //           }}
// //         >
// //           <Section03 />
// //         </div>
// //         <div
// //           style={{
// //             transform: `translateY(-${scrollY * 1.3}px)`,
// //           }}
// //           className=" bg-[#F5F5F5] translate-y-[1550px]"
// //         >
// //           <TestimonialSwiper />
// //         </div>
// //         <div
// //           style={{
// //             transform: `translateY(-${scrollY * 1.6}px)`,
// //           }}
// //           className="bg-[#F5F5F5]  translate-y-[2350px]"
// //         >
// //           <Section5 />
// //         </div>
// //         <div
// //           style={{
// //             transform: `translateY(-${scrollY * 1.8}px)`,
// //           }}
// //           className="relative z-20 bg-[#F5F5F5] mb[800px]  translate-y-[2850px]"
// //         >
// //           <Section06 />
// //         </div>
// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/comp/Homecomp/Navbar";
import Hero from "@/comp/Homecomp/Hero";
import ConnectedSection from "@/comp/Homecomp/ConnectedSection";
import Services from "@/comp/Homecomp/Services";
import Section03 from "@/comp/Homecomp/Section03";
import TestimonialSwiper from "@/comp/Homecomp/TestimonialSwiper";
import Section5 from "@/comp/Homecomp/Section5";
import Section06 from "@/comp/Homecomp/Section06";
import Footer from "@/comp/Homecomp/Footer";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  const sectionsRef = useRef([]);
  const sectionsRef1 = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { yPercent: 0 },
        {
          yPercent: -50,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            scrub: 0.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setRef = (el, i) => {
    sectionsRef.current[i] = el;
  };

  useEffect(() => {
    const sections = sectionsRef1.current;

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { yPercent: 0 },
        {
          yPercent: -100,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            scrub: 0.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setRef1 = (el, i) => {
    sectionsRef1.current[i] = el;
  };

  return (
    <>
      <Navbar />
      <main className="h-[4520px] overflow-hidden">
        <div className="z-[88]">
          <Hero />
        </div>
        <section
          ref={(el) => setRef(el, 0)}
          className="min-hscreen bg-white relative z-[99]"
        >
          <ConnectedSection />
        </section>
        <section
          ref={(el) => setRef(el, 1)}
          className="min- -translate-y-[60%] bg-gray-100 relative z-[980]"
        >
          <Services />
        </section>
        <section
          ref={(el) => setRef(el, 2)}
          className="min- -translate-y-[170%] bg-white relative z-[990]"
        >
          <Section03 />
        </section>
        <section
          ref={(el) => setRef(el, 3)}
          className=" -translate-y-[500%] bg-gray-100 relative z-[991]"
        >
          <TestimonialSwiper />
        </section>
        <section
          ref={(el) => setRef1(el, 0)}
          className=" -translate-y-[140%] bg-white relative z-[992]"
        >
          <Section5 />
        </section>
        <section
          ref={(el) => setRef1(el, 1)}
          className="  -translate-y-[350%] bg-gray-100 relative z-[993]"
        >
          <Section06 />
        </section>
        <section
          ref={(el) => setRef1(el, 2)}
          className=" -translate-y-[300%] bg-gray-100 relative z-[994]"
        >
          <Footer />
        </section>
        v
      </main>
    </>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "@/comp/Navbar";
// import Hero from "@/comp/Hero";
// import ConnectedSection from "@/comp/ConnectedSection";
// import Services from "@/comp/Services";
// import Section03 from "@/comp/Section03";
// import TestimonialSwiper from "@/comp/TestimonialSwiper";
// import Section5 from "@/comp/Section5";
// import Section06 from "@/comp/Section06";
// import Footer from "@/comp/Footer";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       duration: 1.2,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   useEffect(() => {
//     const sections = sectionsRef.current;

//     // sections.forEach((section, i) => {
//     //   gsap.fromTo(
//     //     section,
//     //     { yPercent: 30 },
//     //     {
//     //       yPercent: 0,
//     //       ease: "none",
//     //       scrollTrigger: {
//     //         trigger: section,
//     //         start: "top bottom",
//     //         end: "top top", // You can use +=150% or +=100% for longer effect
//     //         scrub: 1.2,
//     //         // pin: true, // optional: add if you want sticky section behavior
//     //       },
//     //     }
//     //   );
//     // });
//     sections.forEach((section, i) => {
//       gsap.fromTo(
//         section,
//         { yPercent: i * 10 }, // stagger scroll speed by index
//         {
//           yPercent: -50,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "top center",
//             scrub: true,
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const setRef = (el, i) => {
//     sectionsRef.current[i] = el;
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <main className="overflow-hidden">
//         <section ref={(el) => setRef(el, 0)} className=" bg-white">
//           <ConnectedSection />
//         </section>
//         <section
//           ref={(el) => setRef(el, 1)}
//           className="min-h-[120vh] bg-gray-100"
//         >
//           <Services />
//         </section>
//         <section ref={(el) => setRef(el, 2)} className=" bg-white">
//           <Section03 />
//         </section>
//         <section
//           ref={(el) => setRef(el, 3)}
//           className="min-h-[120vh] bg-gray-100"
//         >
//           <TestimonialSwiper />
//         </section>
//         <section ref={(el) => setRef(el, 4)} className="min-h-[120vh] bg-white">
//           <Section5 />
//         </section>
//         <section
//           ref={(el) => setRef(el, 5)}
//           className="min-h-[120vh] bg-gray-100"
//         >
//           <Section06 />
//         </section>
//         <section
//           ref={(el) => setRef(el, 6)}
//           className="min-h-[120vh] bg-gray-100"
//         >
//           <Footer />
//         </section>
//       </main>
//     </>
//   );
// }

// // import Footer from "@/comp/Homecomp/Footer";
// import BusinessServicesSection from "@/comp/newpage/BusinessServicesSection";
// import CareersBanner from "@/comp/newpage/CareersBanner";
// import ContactCTA from "@/comp/newpage/ContactCTA";
// import Footer from "@/comp/newpage/Footer";
// import Hero from "@/comp/newpage/Hero";
// import NewHeader from "@/comp/newpage/NewHeader";
// import ResourcesSection from "@/comp/newpage/ResourcesSection";
// import WhatWeDoSection from "@/comp/newpage/WhatWeDoSection";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <NewHeader />
//       <Hero />
//       <WhatWeDoSection />
//       <BusinessServicesSection />
//       <ResourcesSection />
//       <CareersBanner />
//       <ContactCTA />
//       <Footer />
//     </>
//   );
// };

// export default page;

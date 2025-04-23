"use client";
import ConnectedSection from "@/comp/ConnectedSection";
import Footer from "@/comp/Footer";
import Hero from "@/comp/Hero";
import Navbar from "@/comp/Navbar";
import Section03 from "@/comp/Section03";
import Section06 from "@/comp/Section06";
import Section5 from "@/comp/Section5";
import Services from "@/comp/Services";
import TestimonialSwiper from "@/comp/TestimonialSwiper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  // const sectionRef = useRef(null);

  // // Get scroll progress of this section
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"], // when the section enters and leaves the viewport
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["00%", "-100%"]);
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

  return (
    <>
      <Navbar />
      <Hero />

      <div>
        <ConnectedSection />
      </div>
      <div>
        {/* <motion.div style={{ y }}> */}
        {/* <motion.div className="absolute inset-0 z-0"> */}
        <Services />
        {/* </motion.div> */}
      </div>
      <div>
        <Section03 />
      </div>
      <div className=" bg-[#F5F5F5]">
        <TestimonialSwiper />
      </div>
      <div className="bg-[#F5F5F5] ">
        <Section5 />
      </div>
      <div className="relative z-20 bg-[#F5F5F5] mb[500px]">
        <Section06 />
      </div>

      {/* <Footer /> */}
    </>
  );
}

// "use client";
// import ConnectedSection from "@/comp/ConnectedSection";
// import Footer from "@/comp/Footer";
// import Hero from "@/comp/Hero";
// import Navbar from "@/comp/Navbar";
// import ScrollSection from "@/comp/ScrollRevealWrapper";
// import Section03 from "@/comp/Section03";
// import Section06 from "@/comp/Section06";
// import Section5 from "@/comp/Section5";
// import Services from "@/comp/Services";
// import TestimonialSwiper from "@/comp/TestimonialSwiper";
// // import ScrollSection from "@/components/ScrollSection";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />

//       {/* <ScrollSection> */}
//       <ConnectedSection />
//       {/* </ScrollSection> */}

//       <ScrollSection>
//         <Services />
//       </ScrollSection>

//       <ScrollSection>
//         <Section03 />
//       </ScrollSection>

//       <ScrollSection>
//         <div className="bg-[#F5F5F5]">
//           <TestimonialSwiper />
//         </div>
//       </ScrollSection>

//       <ScrollSection>
//         <div className="bg-[#F5F5F5]">
//           <Section5 />
//         </div>
//       </ScrollSection>
//       <div className="relative z-20 bg-[#F5F5F5] mb-[500px]">
//         <ScrollSection>
//           <div className="bg-[#F5F5F5]">
//             <Section06 />
//           </div>
//         </ScrollSection>
//       </div>
//       <Footer />
//     </>
//   );
// }

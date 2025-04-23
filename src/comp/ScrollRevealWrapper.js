// // components/ScrollRevealWrapper.js
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Smooth fade-in + slight upward movement instead of full slide
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
//   //   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section ref={ref} className="overflowhidden  ">
//       <motion.div style={{ y }} className="transition-all duration-500">
//         {children}
//       </motion.div>
//     </section>
//   );
// }

// components/ScrollSection.js
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    gsap.fromTo(
      elem,
      { opacity: 1, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top bottom", // when top of element hits bottom of viewport
          end: "top center", // when top hits center
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      {children}
    </section>
  );
}

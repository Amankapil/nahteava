// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = {
//   it: "/images/t1.jpg",
//   software: "/images/t2.jpg",
//   strategy: "/images/t3.jpg",
// };

// export default function CustomCursor({ type, visible }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => setPos({ x: e.clientX, y: e.clientY });
//     if (visible) window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, [visible]);

//   if (!visible || !type) return null;

//   return (
//     <motion.img
//       src={images[type]}
//       className="pointer-events-none fixed z-50 w-[300px] h-[400px]"
//       animate={{ x: pos.x - 40, y: pos.y - 40 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     />
//   );
// }

"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const images = {
  it: "/images/t1.jpg",
  software: "/images/t2.jpg",
  strategy: "/images/t3.jpg",
};
export default function CustomCursor({ type, visible }) {
  const [isClient, setIsClient] = useState(false);

  // Motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // Hook-safe transform (always declared)
  const x = useTransform(smoothX, (val) => val - 80); // assuming image is 64x64
  const y = useTransform(smoothY, (val) => val - 80);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (visible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible, mouseX, mouseY]);

  // Don't render the image unless we need to
  if (!visible || !type || !isClient) return null;

  return (
    <motion.img
      src={images[type]}
      alt=""
      className="pointer-events-none absolute cursor-none  z-[9999]  w-[300px] h-[300px] mi-blend-difference select-none -translate-y-[50%] -translate-x-[50%]"
      style={{ x, y }}
      // animate={{ x: x - 40, y: y- 40 }}
      // transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />

    // <div style={{ x, y }}></div>
  );
}

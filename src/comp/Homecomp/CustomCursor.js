// // "use client";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const images = {
// //   it: "/images/t1.jpg",
// //   software: "/images/t2.jpg",
// //   strategy: "/images/t3.jpg",
// // };

// // export default function CustomCursor({ type, visible }) {
// //   const [pos, setPos] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const move = (e) => setPos({ x: e.clientX, y: e.clientY });
// //     if (visible) window.addEventListener("mousemove", move);
// //     return () => window.removeEventListener("mousemove", move);
// //   }, [visible]);

// //   if (!visible || !type) return null;

// //   return (
// //     <motion.img
// //       src={images[type]}
// //       className="pointer-events-none fixed z-50 w-[300px] h-[400px]"
// //       animate={{ x: pos.x - 40, y: pos.y - 40 }}
// //       transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //     />
// //   );
// // }

// "use client";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = {
//   it: "/images/t1.jpg",
//   software: "/images/t2.jpg",
//   strategy: "/images/t3.jpg",
// };
// export default function CustomCursor({ type, visible }) {
//   const [isClient, setIsClient] = useState(false);

//   // Motion values for cursor position
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
//   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

//   // Hook-safe transform (always declared)
//   const x = useTransform(smoothX, (val) => val - 80); // assuming image is 64x64
//   const y = useTransform(smoothY, (val) => val - 80);

//   useEffect(() => {
//     setIsClient(true);

//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     if (visible) {
//       window.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [visible, mouseX, mouseY]);

//   // Don't render the image unless we need to
//   if (!visible || !type || !isClient) return null;

//   return (
//     <motion.img
//       src={images[type]}
//       alt=""
//       className="pointer-events-none absolute cursor-none  z-[9999]  w-[300px] h-[300px] mi-blend-difference select-none -translate-y-[50%] -translate-x-[50%]"
//       style={{ x, y }}
//       // animate={{ x: x - 40, y: y- 40 }}
//       // transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     />

//     // <div style={{ x, y }}></div>
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
  const [isHovering, setIsHovering] = useState(false);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });
  const [timestamp, setTimestamp] = useState(0);

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs with more drag/resistance
  const cursorX = useSpring(mouseX, {
    damping: 25,
    stiffness: 100,
    mass: 0.8,
    restDelta: 0.001,
  });

  const cursorY = useSpring(mouseY, {
    damping: 25,
    stiffness: 100,
    mass: 0.8,
    restDelta: 0.001,
  });

  // Calculate stretch based on velocity
  const stretchX = useTransform(
    cursorX,
    [mouseX.get() - 50, mouseX.get(), mouseX.get() + 50],
    [1.1, 1, 0.9]
  );

  const stretchY = useTransform(
    cursorY,
    [mouseY.get() - 50, mouseY.get(), mouseY.get() + 0],
    [0.9, 1, 1.1]
  );

  // Position with offset
  const x = useTransform(cursorX, (val) => val - 150);
  const y = useTransform(cursorY, (val) => val - 150);

  useEffect(() => {
    let lastTime = performance.now();

    const handleMouseMove = (e) => {
      const now = performance.now();
      const deltaTime = now - lastTime;
      lastTime = now;

      // Calculate velocity
      const deltaX = e.clientX - prevPos.x;
      const deltaY = e.clientY - prevPos.y;

      if (deltaTime > 0) {
        setMouseVelocity({
          x: (deltaX / deltaTime) * 16, // Normalize
          y: (deltaY / deltaTime) * 16,
        });
      }

      setPrevPos({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (visible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible, mouseX, mouseY, prevPos]);

  useEffect(() => {
    setIsHovering(visible && type);
  }, [visible, type]);

  if (!visible || !type) return null;

  return (
    <motion.img
      src={images[type]}
      alt="Custom cursor"
      className="pointer-events-none fixed z-[9999] w-[300px] h-[300px] mix-blenddifference select-none origin-center"
      style={{
        x,
        y,
        // scaleX: stretchX,
        // scaleY: stretchY,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scaleX: { duration: 0 },
        scaleY: { duration: 0 },
      }}
    />
  );
}

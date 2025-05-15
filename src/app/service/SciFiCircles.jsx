"use client";

import { useEffect, useRef } from "react";

export default function SciFiCircles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circle1 = {
      x: window.innerWidth * 0.2,
      y: window.innerHeight * 0.2,
      radius: 4,
      fixed: true,
    };

    const circle2 = {
      x: circle1.x + 270,
      y: circle1.y + 380,
      radius: 4,
      targetX: circle1.x + 270,
      targetY: circle1.y + 380,
      vx: 0,
      vy: 0,
      fixed: false,
    };

    const circle3 = {
      x: circle2.x + 500,
      y: circle2.y - 95,
      radius: 4,
      targetX: circle2.x + 500,
      targetY: circle2.y - 95,
      vx: 0,
      vy: 0,
      fixed: false,
    };

    const extraLine1 = {
      x: circle2.x - 250,
      y: circle2.y + 250,
    };

    const extraLine2 = {
      x: circle3.x + 150,
      y: circle3.y + 150,
    };

    const moveSpeed = 0.1;
    const moveDistance = 20;
    const moveDelay = 1000;
    const easing = 0.09;

    function drawDashedLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.setLineDash([3, 3]);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
    }

    function drawCircle(x, y, radius) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    }

    function setNewTarget(circle) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * moveDistance;
      circle.targetX = circle.x + Math.cos(angle) * distance;
      circle.targetY = circle.y + Math.sin(angle) * distance;
    }

    function moveCircle2() {
      setNewTarget(circle2);
      setTimeout(moveCircle2, moveDelay + Math.random() * 100);
    }

    function moveCircle3() {
      setTimeout(() => {
        setNewTarget(circle3);
      }, 200);
      setTimeout(moveCircle3, moveDelay + Math.random() * 100);
    }

    moveCircle2();
    setTimeout(moveCircle3, 500);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!circle2.fixed) {
        circle2.vx = (circle2.targetX - circle2.x) * easing;
        circle2.vy = (circle2.targetY - circle2.y) * easing;
        circle2.x += circle2.vx;
        circle2.y += circle2.vy;
      }

      if (!circle3.fixed) {
        circle3.vx = (circle3.targetX - circle3.x) * easing;
        circle3.vy = (circle3.targetY - circle3.y) * easing;
        circle3.x += circle3.vx;
        circle3.y += circle3.vy;
      }

      drawDashedLine(circle1.x, circle1.y, circle2.x, circle2.y);
      drawDashedLine(circle2.x, circle2.y, circle3.x, circle3.y);

      drawDashedLine(circle2.x, circle2.y, extraLine1.x, extraLine1.y);
      drawDashedLine(circle3.x, circle3.y, extraLine2.x, extraLine2.y);

      drawCircle(circle1.x, circle1.y, circle1.radius);
      drawCircle(circle2.x, circle2.y, circle2.radius);
      drawCircle(circle3.x, circle3.y, circle3.radius);

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

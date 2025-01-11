"use client"

import React, { useEffect, useRef } from "react";

const LineDark: React.FC = () => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Check if the canvas is available
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Ensure the context is 2D
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, 120);
    ctx.bezierCurveTo(30, 140, 20, 80, 50, 110);
    ctx.moveTo(50, 110);
    ctx.bezierCurveTo(80, 130, 70, 70, 100, 100);
    ctx.moveTo(100, 100);
    ctx.bezierCurveTo(130, 120, 120, 60, 150, 90);
    ctx.moveTo(150, 90);
    ctx.quadraticCurveTo(172, 110, 180, 70);

    // Styling and stroke
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={250}
      height={150}
      className="absolute left-28 -top-6 z-10"
    />
  );
};

export default LineDark;

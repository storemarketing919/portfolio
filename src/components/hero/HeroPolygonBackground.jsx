import React, { useEffect, useRef } from "react";

const HeroPolygonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    const mouse = { x: null, y: null };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let lastWidth = 0;
    let lastHeight = 0;
    let nodes = [];
    let frameId = 0;
    let maxDist = 140;

    const createNodes = () => {
      const density = reducedMotion ? 28000 : 16500;
      const count = Math.max(
        22,
        Math.min(68, Math.floor((width * height) / density))
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height || window.innerHeight, 1);
      maxDist = Math.min(168, Math.max(108, width * 0.12));

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sizeChanged =
        Math.abs(width - lastWidth) > 48 || Math.abs(height - lastHeight) > 48;
      if (!nodes.length || sizeChanged) {
        lastWidth = width;
        lastHeight = height;
        createNodes();
      }
    };

    const drawFrame = (animate) => {
      ctx.clearRect(0, 0, width, height);

      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const abx = a.x - b.x;
          const aby = a.y - b.y;
          const abDistSq = abx * abx + aby * aby;
          if (abDistSq > maxDistSq) {
            continue;
          }

          const abDist = Math.sqrt(abDistSq);
          const lineAlpha = 1 - abDist / maxDist;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79, 216, 255, ${lineAlpha * 0.32})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          for (let k = j + 1; k < nodes.length; k += 1) {
            const c = nodes[k];
            const acx = a.x - c.x;
            const acy = a.y - c.y;
            const bcx = b.x - c.x;
            const bcy = b.y - c.y;
            const acDistSq = acx * acx + acy * acy;
            const bcDistSq = bcx * bcx + bcy * bcy;

            if (acDistSq > maxDistSq || bcDistSq > maxDistSq) {
              continue;
            }

            const fillAlpha =
              (1 - Math.max(abDist, Math.sqrt(acDistSq), Math.sqrt(bcDistSq)) / maxDist) *
              0.07;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.lineTo(c.x, c.y);
            ctx.closePath();
            ctx.fillStyle = `rgba(91, 124, 255, ${fillAlpha})`;
            ctx.fill();
          }
        }
      }

      nodes.forEach((node) => {
        if (animate && mouse.x !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150 && distance > 0.001) {
            node.vx += (dx / distance) * 0.018;
            node.vy += (dy / distance) * 0.018;
          }
        }

        if (animate) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x <= 0 || node.x >= width) {
            node.vx *= -1;
          }
          if (node.y <= 0 || node.y >= height) {
            node.vy *= -1;
          }

          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
          node.vx *= 0.996;
          node.vy *= 0.996;

          if (Math.hypot(node.vx, node.vy) < 0.1) {
            node.vx += (Math.random() - 0.5) * 0.07;
            node.vy += (Math.random() - 0.5) * 0.07;
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(94, 231, 255, 0.9)";
        ctx.shadowColor = "rgba(0, 217, 255, 0.55)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const loop = () => {
      drawFrame(true);
      frameId = window.requestAnimationFrame(loop);
    };

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resize();
    drawFrame(!reducedMotion);

    const resizeObserver = new window.ResizeObserver(resize);
    resizeObserver.observe(parent);
    window.addEventListener("resize", resize);
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);

    if (!reducedMotion) {
      frameId = window.requestAnimationFrame(loop);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-polygon-canvas"
      aria-hidden="true"
    />
  );
};

export default HeroPolygonBackground;

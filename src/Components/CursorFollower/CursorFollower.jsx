import React, { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      cursor.style.display = "none";
      return;
    }

    const onMove = (e) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;
      cursor.style.opacity = "1";
    };

    const onLeave = () => (cursor.style.opacity = "0");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const loop = () => {
      const p = posRef.current;
      p.x = lerp(p.x || p.tx, p.tx, 0.35); // faster follow
      p.y = lerp(p.y || p.ty, p.ty, 0.35);

      // offset Y by +12 so it sits just under the arrow
      cursor.style.transform = `translate3d(${p.x - 18}px, ${p.y - 18 + 12}px, 0)`;

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden>
        <div className="custom-cursor-dot" />
      </div>

      <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #F2A836;
          pointer-events: none;
          transform: translate3d(-9999px, -9999px, 0);
          transition: opacity 150ms ease;
          z-index: 9999999;
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .custom-cursor-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F2A836;
          pointer-events: none;
        }
        /* IMPORTANT: keep native arrow visible */
        body {
          cursor: auto;
        }
      `}</style>
    </>
  );
}

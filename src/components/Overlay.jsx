import { useRef, useEffect, useState } from "react";

export default function Overlay() {
  const overlayRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const handleMouseDown = (e) => {
    const rect = overlayRef.current.getBoundingClientRect();
    setDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={overlayRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "36px",
        cursor: "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
        backdropFilter: "blur(10px)",
      }}
    >
      🐈
    </div>
  );
}

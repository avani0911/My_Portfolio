import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Floating animation
const float = keyframes`
  0% { transform: translateY(0) translateX(0) scale(1); }
  50% { transform: translateY(-30px) translateX(20px) scale(1.05); }
  100% { transform: translateY(0) translateX(0) scale(1); }
`;

// Full-screen background wrapper
const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
  z-index: -1;
`;

// Styled floating bubbles
const Bubble = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  opacity: 0.5;
  animation: ${float} ${(props) => props.speed}s ease-in-out infinite;
  filter: blur(1px);
`;

const Background = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleCount = 50;
    const newBubbles = Array.from({ length: bubbleCount }).map(() => ({
      id: Math.random(),
      size: Math.random() * 60 + 20, // Size: 20px - 80px
      speed: Math.random() * 6 + 4, // Speed: 4s - 10s
      x: Math.random() * 100, // Random X position
      y: Math.random() * 100, // Random Y position
      color: `rgba(94, 204, 216, ${Math.random() * 0.5 + 0.4})`, // Brighter opacity
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <BackgroundWrapper>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          speed={bubble.speed}
          color={bubble.color}
          style={{ top: `${bubble.y}%`, left: `${bubble.x}%` }}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default Background;

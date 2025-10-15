// BrainVideo.tsx
"use client";
import React from "react";

interface BrainVideoProps {
  overlayOpacity?: number;
}

const BrainVideo: React.FC<BrainVideoProps> = ({ overlayOpacity = 0.6 }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background video */}
      <video
        className="w-full h-full object-cover"
        src="/videos/brain-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(7, 23, 36, ${overlayOpacity})`, // midnight blue tint
        }}
      />
    </div>
  );
};

export default BrainVideo;

"use client";
import React, { useState } from "react";

interface BrainVideoProps {
  overlayOpacity?: number;
}

const BrainVideo: React.FC<BrainVideoProps> = ({ overlayOpacity = 0.6 }) => {
  const videos = [
    "/videos/soft-exo-1280x720.mp4",
    "/videos/stroke-research.mp4",
    // Add more video paths here
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background video */}
      <video
        key={videos[currentVideoIndex]} // Force remount on change to prevent AbortErrors
        className="w-full h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(7, 23, 36, ${overlayOpacity})`,
        }}
      />
    </div>
  );
};

export default BrainVideo;
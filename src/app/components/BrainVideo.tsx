"use client";

import React, { useEffect, useRef, useState } from "react";

type Slide = { type: "image"; src: string } | { type: "video"; src: string };

const SLIDES: Slide[] = [
  { type: "image", src: "/images/hero/dancers-orange.webp" },
  { type: "image", src: "/images/hero/dancers-green.webp" },
  { type: "video", src: "/videos/soft-exo-1280x720.mp4" },
  { type: "image", src: "/images/hero/stage-group.webp" },
  { type: "image", src: "/images/hero/piano-eeg.webp" },
];

const IMAGE_DURATION = 6000; // ms each image is shown
const FADE_DURATION = 1500;  // ms crossfade
const VIDEO_SPEED = 1.5;     // playback rate for the video

interface BrainVideoProps {
  overlayOpacity?: number;
}

const BrainVideo: React.FC<BrainVideoProps> = ({ overlayOpacity = 0.75 }) => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [nextVisible, setNextVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number>(0);
  // Keep a ref so advance() always sees the latest current without going stale
  const currentRef = useRef(current);
  currentRef.current = current;

  const advanceRef = useRef<() => void>(() => {});
  advanceRef.current = () => {
    const nextIndex = (currentRef.current + 1) % SLIDES.length;
    // 1. Mount next slide at opacity 0
    setNext(nextIndex);
    // 2. Two rAFs: first lets React commit the opacity-0 element,
    //    second triggers the CSS transition to opacity 1
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setNextVisible(true);
        timerRef.current = setTimeout(() => {
          setCurrent(nextIndex);
          setNext(null);
          setNextVisible(false);
        }, FADE_DURATION);
      });
    });
  };

  // Schedule image auto-advance; video uses onEnded
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    cancelAnimationFrame(rafRef.current);

    if (SLIDES[current].type === "image") {
      timerRef.current = setTimeout(() => advanceRef.current(), IMAGE_DURATION);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [current]);

  // Start video from the beginning as soon as it enters the `next` slot (fading in),
  // so by the time it's fully visible it's already playing smoothly.
  useEffect(() => {
    if (next !== null && SLIDES[next].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = VIDEO_SPEED;
      videoRef.current.play().catch(() => {});
    }
  }, [next]);

  // Ensure playback rate is correct once video is current (no restart)
  useEffect(() => {
    if (SLIDES[current].type === "video" && videoRef.current) {
      videoRef.current.playbackRate = VIDEO_SPEED;
    }
  }, [current]);

  const renderSlide = (index: number, opacity: number) => {
    const slide = SLIDES[index];
    return (
      <div
        key={index}
        className="absolute inset-0 w-full h-full"
        style={{ opacity, transition: `opacity ${FADE_DURATION}ms ease-in-out` }}
      >
        {slide.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slide.src}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={slide.src}
            muted
            playsInline
            aria-hidden="true"
            onEnded={() => advanceRef.current()}
          />
        )}
      </div>
    );
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {renderSlide(current, 1)}
      {next !== null && renderSlide(next, nextVisible ? 1 : 0)}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(7, 23, 36, ${overlayOpacity})` }}
      />
    </div>
  );
};

export default BrainVideo;

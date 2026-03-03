/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "@vnedyalk0v/react19-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sites, Site } from "@/data/sites";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const usGeoUrl = "https://unpkg.com/us-atlas@3.0.0/states-10m.json";

type PopoverPosition = "above" | "below";

function SitesMap() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number; position: PopoverPosition; offsetX: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setMounted(true), []);

  const validSites = sites.filter(s => s.coordinates && s.coordinates.length === 2);
  const leadSite = validSites.find((s) => s.id === "uh");
  const hoveredSiteData = validSites.find((s) => s.id === hoveredSite);

  const handlePointerEnter = useCallback((site: Site) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredSite(site.id);
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerW = containerRect.width;
    const containerH = containerRect.height;

    // Find the actual <circle> element for this marker via data attribute
    const circle = container.querySelector(`[data-marker-id="${site.id}"]`);
    if (!circle) return;

    const circleRect = circle.getBoundingClientRect();
    const markerX = circleRect.left + circleRect.width / 2 - containerRect.left;
    const markerY = circleRect.top + circleRect.height / 2 - containerRect.top;

    const POPOVER_HEIGHT = 200;
    const POPOVER_WIDTH = 240;
    const MARGIN = 16;

    // Prefer above; fall back to below only if not enough room above
    const position: PopoverPosition =
      markerY < POPOVER_HEIGHT + MARGIN && containerH - markerY >= POPOVER_HEIGHT + MARGIN
        ? "below"
        : "above";

    // Horizontal offset to keep popover within container bounds
    const halfW = POPOVER_WIDTH / 2;
    let offsetX = 0;
    if (markerX - halfW < MARGIN) {
      offsetX = MARGIN - (markerX - halfW); // shift right
    } else if (markerX + halfW > containerW - MARGIN) {
      offsetX = (containerW - MARGIN) - (markerX + halfW); // shift left (negative)
    }

    setPopoverPos({ x: markerX, y: markerY, position, offsetX });
  }, []);

  const handlePointerLeave = useCallback(() => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredSite(null);
      setPopoverPos(null);
    }, 150);
  }, []);

  const handlePopoverEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  }, []);

  const handlePopoverLeave = useCallback(() => {
    setHoveredSite(null);
    setPopoverPos(null);
  }, []);

  return (
    <section className="bg-[var(--midnight-blue)] py-10 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--midnight-blue)] via-[#0B2336] to-[var(--midnight-blue)] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10 mb-8 sm:mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Global <span className="text-[var(--luminous-mint)]">Neuro-Network</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            <span className="hidden sm:inline">Hover over</span><span className="sm:hidden">Tap</span> our collaborating universities to explore the BRAIN Center&apos;s worldwide ecosystem.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto" style={{ aspectRatio: "2/1", minHeight: "280px", maxHeight: "700px" }}>
        {!mounted ? null : <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 450,
            center: [-50, 38] as any,
          }}
          className="w-full h-full"
        >
          {/* LAYER 1: World Countries */}
          <Geographies
            geography={geoUrl}
            onGeographyError={(err) => console.error("Map Load Error:", err)}
          >
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Geography
                  key={(geo as any).rsmKey ?? `world-geo-${index}`}
                  geography={geo}
                  fill="rgba(255,255,255,0.2)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={0.7}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "rgba(255,255,255,0.3)", outline: "none", transition: "all 0.3s" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* LAYER 2: US States Overlay */}
          <Geographies geography={usGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Geography
                  key={(geo as any).rsmKey ?? `us-geo-${index}`}
                  geography={geo}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", pointerEvents: "none" },
                    hover: { outline: "none", pointerEvents: "none" },
                    pressed: { outline: "none", pointerEvents: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* CONNECTION LINES */}
          {leadSite &&
            validSites.map((site) => {
              if (site.id === leadSite.id) return null;
              const isHoveredPath = hoveredSite === site.id || hoveredSite === leadSite.id;

              return (
                <Line
                  key={`line-${site.id}`}
                  from={leadSite.coordinates as any}
                  to={site.coordinates as any}
                  stroke={isHoveredPath ? "var(--luminous-mint)" : "var(--deep-teal)"}
                  strokeWidth={isHoveredPath ? 2.5 : 1}
                  strokeOpacity={isHoveredPath ? 0.9 : 0.3}
                  strokeLinecap="round"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              );
            })}

          {/* MARKERS */}
          {validSites.map((site) => {
            const isHovered = hoveredSite === site.id;
            const isLead = site.id === "uh";
            const baseColor = isLead ? "var(--luminous-mint)" : "#E2E8F0";

            return (
              <Marker
                key={site.id}
                coordinates={site.coordinates as any}
              >
                <g
                  className="cursor-pointer"
                  onPointerEnter={() => handlePointerEnter(site)}
                  onPointerLeave={handlePointerLeave}
                >
                  {/* Hit area */}
                  <circle r={14} fill="rgba(0,0,0,0.001)" style={{ pointerEvents: "all" }} />

                  {/* Anchor circle for position measurement — tiny, invisible, but has geometry Safari can measure */}
                  <circle
                    data-marker-id={site.id}
                    r={1}
                    fill="none"
                    stroke="none"
                  />

                  {/* Pulsing Effect */}
                  <motion.circle
                    r={isLead ? 10 : 6}
                    fill="none"
                    stroke={baseColor}
                    strokeWidth={1.5}
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{
                      scale: isHovered ? 1.4 : [1, 1.3, 1],
                      opacity: isHovered ? 0 : [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Center Dot */}
                  <motion.circle
                    r={isLead ? 5 : 3}
                    fill={baseColor}
                    animate={{
                      opacity: isHovered ? 0 : 1,
                      scale: isHovered ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      filter: isHovered ? "none" : `drop-shadow(0 0 8px ${baseColor})`,
                    }}
                  />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>}

        {/* Popover rendered as HTML overlay outside SVG */}
        <AnimatePresence>
          {hoveredSiteData && popoverPos && (
            <motion.div
              key={hoveredSiteData.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20"
            onMouseEnter={handlePopoverEnter}
            onMouseLeave={handlePopoverLeave}
              style={{
                left: popoverPos.x + popoverPos.offsetX,
                top: popoverPos.y,
                x: "-50%",
                y: popoverPos.position === "above" ? "calc(-100% - 12px)" : "12px",
              } as any}
            >
              <div className="w-[240px] p-4 rounded-xl bg-slate-900/95 border border-[var(--luminous-mint)] shadow-2xl relative">
                {/* Dynamic Arrow — offset so it always points at the marker */}
                <div
                  className={`absolute w-3 h-3 bg-slate-900 ${
                    popoverPos.position === "above"
                      ? "-bottom-1.5 border-r border-b border-[var(--luminous-mint)]"
                      : "-top-1.5 border-l border-t border-[var(--luminous-mint)]"
                  }`}
                  style={{
                    left: `calc(50% - ${popoverPos.offsetX}px)`,
                    transform: "translateX(-50%) rotate(45deg)",
                  }}
                />

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0 overflow-hidden shadow-inner">
                    <Image
                      src={hoveredSiteData.logos.small}
                      alt={hoveredSiteData.abbreviation}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] uppercase tracking-wider font-bold text-[var(--luminous-mint)] mb-0.5">
                      {hoveredSiteData.category}
                    </p>
                    <h3 className="text-white font-bold text-sm leading-tight">
                      {hoveredSiteData.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-[11px] mb-3 leading-relaxed border-t border-white/10 pt-2 line-clamp-3">
                  {hoveredSiteData.description}
                </p>

                <Link
                  href={hoveredSiteData.link}
                  target="_blank"
                  className="block w-full py-2 text-center rounded bg-[var(--deep-teal)] hover:bg-[var(--luminous-mint)] hover:text-black text-white text-[10px] font-bold uppercase tracking-wide transition-all"
                >
                  Visit Website
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SitesMap;

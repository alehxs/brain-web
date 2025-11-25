/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "@vnedyalk0v/react19-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { sites } from "@/data/sites";

// Using unpkg as a reliable fallback source for the map topology
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
// Added US Atlas for state borders
const usGeoUrl = "https://unpkg.com/us-atlas@3.0.0/states-10m.json";

const MapSection = () => {
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);
  
  // 1. SAFETY: Filter out sites that are missing coordinates to prevent crashes
  const validSites = sites.filter(s => s.coordinates && s.coordinates.length === 2);
  const leadSite = validSites.find((s) => s.id === "uh");

  return (
    <section className="bg-[var(--midnight-blue)] py-10 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--midnight-blue)] via-[#0B2336] to-[var(--midnight-blue)] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10 mb-8 sm:mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Our Global <span className="text-[var(--luminous-mint)]">Neuro-Network</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Hover over our collaborating universities to explore the BRAIN Center&apos;s worldwide ecosystem.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[500px] sm:h-[600px] max-w-7xl mx-auto">
        <ComposableMap
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
            // Log errors if the map fails to load
            onGeographyError={(err) => console.error("Map Load Error:", err)}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
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

          {/* LAYER 2: US States Overlay (ADDED) */}
          <Geographies geography={usGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
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
                onMouseEnter={() => setHoveredSite(site.id)}
                onMouseLeave={() => setHoveredSite(null)}
              >
                <g className="cursor-pointer">
                  {/* Hit area */}
                  <circle r={30} fill="transparent" />

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

                {/* Popover Card */}
                <AnimatePresence>
                  {isHovered && (
                    <g style={{ pointerEvents: "none" }}>
                      <foreignObject
                        x={-120}
                        y={-190}
                        width={240}
                        height={200}
                        style={{ overflow: "visible" }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="relative flex justify-center"
                          style={{ pointerEvents: "auto" }}
                        >
                          <div className="w-full p-4 rounded-xl backdrop-blur-xl bg-slate-900/95 border border-[var(--luminous-mint)] shadow-2xl relative">
                            {/* Arrow Pointer */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-[var(--luminous-mint)] rotate-45" />

                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shrink-0 text-[10px] font-bold text-slate-900 shadow-inner">
                                {site.abbreviation}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[9px] uppercase tracking-wider font-bold text-[var(--luminous-mint)] mb-0.5">
                                  {site.category}
                                </p>
                                <h3 className="text-white font-bold text-sm leading-tight">
                                  {site.name}
                                </h3>
                              </div>
                            </div>

                            <p className="text-slate-300 text-[11px] mb-3 leading-relaxed border-t border-white/10 pt-2 line-clamp-3">
                              {site.description}
                            </p>

                            <Link
                              href={site.link}
                              target="_blank"
                              className="block w-full py-2 text-center rounded bg-[var(--deep-teal)] hover:bg-[var(--luminous-mint)] hover:text-black text-white text-[10px] font-bold uppercase tracking-wide transition-all"
                            >
                              Visit Website
                            </Link>
                          </div>
                        </motion.div>
                      </foreignObject>
                    </g>
                  )}
                </AnimatePresence>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>
    </section>
  );
};

export default MapSection;
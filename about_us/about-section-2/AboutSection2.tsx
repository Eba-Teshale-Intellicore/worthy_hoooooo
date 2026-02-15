
"use client";

import React, { useRef } from "react";
import { DemoOne } from "./demo";
import { TimelineContent } from "../../components/timeline-animation";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const revealVariants2 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -40,
      opacity: 0,
    },
  };
  const revealVariants3 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    }),
    hidden: {
      opacity: 0,
    },
  };
  return (
    <section className="relative py-16 px-8 bg-green-50 dark:bg-slate-900/50 transition-colors duration-500 overflow-hidden" ref={heroRef}>
      {/* Animated background with green theme */}
      <TimelineContent
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(34,197,94,0.05) 0%, transparent 100%)`,
          backgroundSize: "100% 100%",
        }}
        animationNum={2}
        customVariants={revealVariants}
        timelineRef={heroRef}
      />

      <TimelineContent
        className="absolute inset-0 bg-[linear-gradient(to_right,#16653415_1px,transparent_1px),linear-gradient(to_bottom,#16653415_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_110%)] transition-colors duration-500"
        animationNum={3}
        customVariants={revealVariants2}
        timelineRef={heroRef}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <DemoOne />
      </div>
    </section>
  );
}

"use client";

// Fix: Corrected imports to ensure React.RefObject is resolved from the 'react' package instead of 'framer-motion'
import React, { forwardRef, useRef } from "react";
import { motion, HTMLMotionProps, useInView } from "framer-motion";

type TimelineContentProps = HTMLMotionProps<"div"> & {
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: any;
};

export const TimelineContent = forwardRef<
  HTMLElement,
  TimelineContentProps
>(function TimelineContent(
  {
    as: Component = motion.div,
    children,
    animationNum = 0,
    timelineRef,
    customVariants,
    ...props
  },
  ref
) {
  const localRef = useRef(null);

  const isInView = useInView(localRef, {
    once: true,
    margin: "-100px",
  });

  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const variants = customVariants || defaultVariants;

  return (
    <Component
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
});
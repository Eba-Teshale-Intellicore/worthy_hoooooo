"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, Transition } from "framer-motion";
import { cn } from "../lib/utils";

interface TextProps {
  children: React.ReactNode;
  reverse?: boolean;
  transition?: Transition;
  splitBy?: "words" | "characters" | "lines" | string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  containerClassName?: string;
  wordLevelClassName?: string;
  elementLevelClassName?: string;
  onClick?: () => void;
  onStart?: () => void;
  onComplete?: () => void;
  autoStart?: boolean;
}

export interface VerticalCutRevealRef {
  startAnimation: () => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const VerticalCutReveal = forwardRef<VerticalCutRevealRef, TextProps>(
  (
    {
      children,
      reverse = false,
      transition = {
        type: "spring",
        stiffness: 190,
        damping: 22,
      },
      splitBy = "words",
      staggerDuration = 0.2,
      staggerFrom = "first",
      containerClassName,
      wordLevelClassName,
      elementLevelClassName,
      onClick,
      onStart,
      onComplete,
      autoStart = true,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    const text =
      typeof children === "string"
        ? children
        : children?.toString() || "";

    const [isAnimating, setIsAnimating] = useState(false);

    // Unicode-safe character splitting
    const splitIntoCharacters = (text: string): string[] => {
      // Fix: Use type assertion for Intl.Segmenter to bypass TypeScript missing definition for newer Intl features
      if (typeof Intl !== "undefined" && "Segmenter" in (Intl as any)) {
        const segmenter = new (Intl as any).Segmenter("en", {
          granularity: "grapheme",
        });
        return Array.from(
          segmenter.segment(text),
          ({ segment }: any) => segment
        );
      }
      return Array.from(text);
    };

    // Split text
    const elements = useMemo(() => {
      const words = text.split(" ");

      if (splitBy === "characters") {
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }

      if (splitBy === "words") return text.split(" ");
      if (splitBy === "lines") return text.split("\n");

      return text.split(splitBy);
    }, [text, splitBy]);

    // Stagger logic
    const getStaggerDelay = useCallback(
      (index: number) => {
        const total =
          splitBy === "characters"
            ? (elements as WordObject[]).reduce(
                (acc, word) =>
                  acc +
                  word.characters.length +
                  (word.needsSpace ? 1 : 0),
                0
              )
            : elements.length;

        if (staggerFrom === "first")
          return index * staggerDuration;

        if (staggerFrom === "last")
          return (total - 1 - index) * staggerDuration;

        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }

        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }

        return Math.abs(
          (staggerFrom as number) - index
        ) * staggerDuration;
      },
      [elements, staggerFrom, staggerDuration, splitBy]
    );

    const startAnimation = useCallback(() => {
      setIsAnimating(true);
      onStart?.();
    }, [onStart]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      reset: () => setIsAnimating(false),
    }));

    useEffect(() => {
      if (autoStart) startAnimation();
    }, [autoStart, startAnimation]);

    const variants = {
      hidden: {
        y: reverse ? "-100%" : "100%",
      },
      visible: (i: number) => ({
        y: 0,
        transition: {
          ...transition,
          delay:
            ((transition?.delay as number) || 0) +
            getStaggerDelay(i),
        },
      }),
    };

    const wordsArray =
      splitBy === "characters"
        ? (elements as WordObject[])
        : (elements as string[]).map((el, i, arr) => ({
            characters: [el],
            needsSpace: i !== arr.length - 1,
          }));

    return (
      <span
        ref={containerRef}
        className={cn(
          containerClassName,
          "flex flex-wrap whitespace-pre-wrap",
          splitBy === "lines" && "flex-col"
        )}
        onClick={onClick}
        {...props}
      >
        {/* Screen reader text */}
        <span className="sr-only">{text}</span>

        {wordsArray.map((wordObj, wordIndex, array) => {
          const previousCharsCount = array
            .slice(0, wordIndex)
            .reduce(
              (sum, word) => sum + word.characters.length,
              0
            );

          return (
            <span
              key={wordIndex}
              aria-hidden="true"
              className={cn(
                "inline-flex overflow-hidden",
                wordLevelClassName
              )}
            >
              {wordObj.characters.map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={cn(
                    "whitespace-pre-wrap relative",
                    elementLevelClassName
                  )}
                >
                  <motion.span
                    custom={previousCharsCount + charIndex}
                    initial="hidden"
                    animate={
                      isAnimating ? "visible" : "hidden"
                    }
                    variants={variants}
                    onAnimationComplete={
                      wordIndex === array.length - 1 &&
                      charIndex ===
                        wordObj.characters.length - 1
                        ? onComplete
                        : undefined
                    }
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}

              {wordObj.needsSpace && <span> </span>}
            </span>
          );
        })}
      </span>
    );
  }
);

VerticalCutReveal.displayName = "VerticalCutReveal";

export { VerticalCutReveal };
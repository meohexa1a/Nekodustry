"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface FragmentNodeProps {
  text: string;
  delay: number;
  position: { row: number; col: number };
}

function FragmentNode({ text, delay, position }: FragmentNodeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  return (
    <div
      ref={nodeRef}
      className={cn("absolute transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
      style={{
        top: `${position.row * 25}%`,
        left: `${position.col * 25}%`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {/* Intersection Point */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={cn("h-2 w-2 rounded-full transition-all duration-500", isVisible ? "bg-zinc-400 dark:bg-zinc-500 scale-100" : "bg-transparent scale-0")} />
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-800 transition-all duration-700",
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        />
      </div>

      {/* Text Label */}
      <div
        className={cn(
          "absolute left-6 top-6 min-w-max font-mono text-xs tracking-wide transition-all duration-500",
          "text-zinc-500 dark:text-zinc-500",
          "hover:text-zinc-900 dark:hover:text-zinc-100",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="inline-block">{displayText}</span>
        <span className={cn("inline-block w-[2px] h-3 ml-0.5 bg-zinc-400 dark:bg-zinc-500", displayText.length === text.length ? "animate-pulse" : "opacity-100")} />
      </div>
    </div>
  );
}

export function PhilosophyFragments() {
  const fragments = [
    { text: "SERVICE OVER AUTHORITY", position: { row: 1, col: 1 }, delay: 200 },
    { text: "SYSTEMS SERVE // THEY DO NOT DECIDE", position: { row: 2, col: 3 }, delay: 800 },
    { text: "INFRASTRUCTURE EXISTS TO BE INVISIBLE", position: { row: 3, col: 2 }, delay: 1400 },
    { text: "THE COMMUNITY DEFINES MEANING", position: { row: 2, col: 1.5 }, delay: 2000 },
  ];

  return (
    <section className="relative min-h-[50vh] w-full overflow-hidden px-6 py-24 sm:px-12">
      {/* Grid Lines */}
      <div className="absolute inset-0">
        {/* Horizontal Lines */}
        {[1, 2, 3].map((i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
            style={{ top: `${i * 25}%` }}
          />
        ))}
        {/* Vertical Lines */}
        {[1, 2, 3].map((i) => (
          <div
            key={`v-${i}`}
            className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
            style={{ left: `${i * 25}%` }}
          />
        ))}
      </div>

      {/* Fragment Nodes */}
      <div className="relative h-full min-h-[400px]">
        {fragments.map((fragment, index) => (
          <FragmentNode key={index} text={fragment.text} position={fragment.position} delay={fragment.delay} />
        ))}
      </div>

      {/* System Status */}
      <div className="absolute bottom-8 right-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 dark:text-zinc-700">PHILOSOPHY_NODES: ACTIVE</div>
    </section>
  );
}

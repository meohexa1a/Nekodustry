"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Code, Database, Globe, Layers, Server, Cpu, Terminal, Zap } from "lucide-react";

export function TechStackSection() {
  const items = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, name: "React" },
    { icon: <Server className="w-8 h-8 text-green-500" />, name: "Node.js" },
    { icon: <Database className="w-8 h-8 text-yellow-500" />, name: "SQL" },
    { icon: <Globe className="w-8 h-8 text-purple-500" />, name: "Next.js" },
    { icon: <Layers className="w-8 h-8 text-pink-500" />, name: "Tailwind" },
    { icon: <Cpu className="w-8 h-8 text-orange-500" />, name: "System Design" },
    { icon: <Terminal className="w-8 h-8 text-gray-500" />, name: "DevOps" },
    { icon: <Zap className="w-8 h-8 text-yellow-300" />, name: "Performance" },
  ];

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-background overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Công nghệ sử dụng</h2>
      <InfiniteMovingCards items={items} direction="right" speed="slow" />
    </div>
  );
}

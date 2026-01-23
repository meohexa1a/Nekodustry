"use client";
import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function ConnectSection() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Kết nối</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "GitHub", icon: <Github />, link: "https://github.com" },
          { name: "LinkedIn", icon: <Linkedin />, link: "https://linkedin.com" },
          { name: "Twitter", icon: <Twitter />, link: "https://twitter.com" },
          { name: "Email", icon: <Mail />, link: "mailto:contact@example.com" },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:bg-accent transition-colors group"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

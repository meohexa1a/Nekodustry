"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="currentColor"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 pb-4">
          Sáng tạo. Đam mê. <br /> Developer.
        </h1>
        <div className="mt-4 font-normal text-base text-muted-foreground max-w-lg text-center mx-auto">
            <TextGenerateEffect words="Chào mừng bạn đến với không gian của mình. Nơi những dòng code trở nên sống động và ý tưởng biến thành hiện thực." />
        </div>
      </div>
    </div>
  );
}

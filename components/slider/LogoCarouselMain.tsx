"use client";

import React from "react";

import Link from "next/link";
import { GradientHeading } from "./GradientHeading";
import { LogoCarousel } from "./logo-carousel";
import { allLogos } from "@/constants";


export function LogoCarouselMain() {
  return (
    <div className="space-y-8 py-20">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
        <GradientHeading size={'xs'} variant="secondary">
  Passionate minds build the future
</GradientHeading>
<Link href="/project">
  <GradientHeading size="xl">Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
					My Work
				</span></GradientHeading>
</Link>

        </div>

        <LogoCarousel columnCount={3} logos={allLogos} /> 
      </div>
    </div>
  );
}

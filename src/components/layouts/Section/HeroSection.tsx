"use client";

import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,hsl(var(--primary)/0.1)_0%,hsl(var(--background))_100%)]" />

      {/* Text Landing Pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Master{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Tailwind CSS
              </span>{" "}
              for Landing Pages
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The comprehensive guide to building beautiful, responsive landing
              pages with Tailwind CSS and Next.js
            </p>
          </div>
          {/* End Text Landing Pages */}

          {/* Button Text */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="#basics">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#components">Explore Components</Link>
            </Button>
          </div>
          {/* End Button Text */}

          {/* Button Arrow Down */}
          <div className="pt-12 flex justify-center animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                document
                  .querySelector("#basics")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
          {/* End Button Arrow Down */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

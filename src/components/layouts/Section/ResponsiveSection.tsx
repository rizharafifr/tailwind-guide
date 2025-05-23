"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ResponsiveCard from "@/components/Cards/ResponsiveCard";
import GridCard from "@/components/Cards/GridCard";
import TypographyCard from "@/components/Cards/TypographyCard";

const ResponsiveSection = () => {
  return (
    <section id="responsive" className="py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Responsive Design"
          subtitle="Learn how to build fully responsive layouts with Tailwind's mobile-first approach"
        />
        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Font Example */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Breakpoint System</h3>
            <p className="text-muted-foreground mb-6">
              Tailwind uses a mobile-first approach with intuitive breakpoint
              prefixes.
            </p>
            <ResponsiveCard />
          </div>
          {/* End Font Example */}

          {/* Responsive Pattern */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Responsive Pattern</h3>
            <p className="text-muted-foreground mb-6">
              Common responsive patterns using Tailwind's utility classes.
            </p>
            <div className="space-y-6">
              <GridCard />
              <TypographyCard />
            </div>
          </div>
          {/* End Responsive Pattern */}
        </div>
        {/* End Content */}
      </div>
    </section>
  );
};

export default ResponsiveSection;

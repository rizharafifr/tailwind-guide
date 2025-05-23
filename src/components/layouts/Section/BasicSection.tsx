"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ConceptCard from "@/components/Cards/ConceptCard";
import TailwindTabs from "@/components/Tabs/TailwindTabs";
import InstallationCard from "@/components/Cards/InstallationCard";

const BasicSection = () => {
  return (
    <section id="basics" className="py-4 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tailwind CSS Basics"
          subtitle="Learn the fundamentals of Tailwind CSS to start building beautiful landing pages"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Getting Started */}
          <div className="">
            <h3 className="text-2xl font-semibold mb-4">Getting Started</h3>
            <p className="text-muted-foreground mb-6">
              Tailwind is a utility-first CSS framework that allows you to build
              designs directly in your markup. Here how to set it up with
              Next.js:
            </p>
            <InstallationCard />
          </div>
          {/* End Getting Started */}

          {/* Core Concept */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Core Concepts</h3>
            <p className="text-muted-foreground mb-6">
              Understanding these core concepts will help you use Tailwind CSS
              effectively.
            </p>
            <ConceptCard />
          </div>
          {/* End Core Concept */}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Common Utility Classes
          </h3>
          <TailwindTabs />
        </div>
      </div>
    </section>
  );
};

export default BasicSection;

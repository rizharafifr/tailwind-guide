"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ComponentTabs from "@/components/Tabs/ComponentTabs";

const ComponentsSection = () => {
  return (
    <section id="components" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Landing page components"
          subtitle="Common components for building beautiful landing pages with Tailwind CSS"
        />

        <ComponentTabs />
      </div>
    </section>
  );
};

export default ComponentsSection;

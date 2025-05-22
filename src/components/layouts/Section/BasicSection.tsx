"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import CodeBlocks from "@/components/CodeBlocks";
import ConceptCard from "@/components/Cards/ConceptCard";
import TailwindTabs from "@/components/Tabs/TailwindTabs";

const BasicSection = () => {
  return (
    <section id="basics" className="py-16 md:py-24">
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
              designs directly in your markup. Here's how to set it up with
              Next.js:
            </p>

            {/* Installation */}
            <CodeBlocks
              title="Installation"
              language="bash"
              code="npm install -D tailwindcss postcss autoprefixer
              npx tailwindcss init -p"
            />
            {/* End Installation */}
            {/* Tailwind Config */}
            <CodeBlocks
              title="tailwind.config.js"
              language="javascript"
              code={`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            />
            {/* End Tailwind Config */}
            {/* Global Styles */}
            <CodeBlocks
              title="globals.css"
              language="css"
              code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            />
            {/* End Global Styles */}
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

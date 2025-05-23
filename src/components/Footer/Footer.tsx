import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Media */}
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="text-2xl font-bold text-primary mb-4 inline-block"
            >
              Tailwind Guide
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              A comprehensive guide to building beautiful, responsive landing
              pages with Tailwind CSS and Next.js.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/rizharafifr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">Github</span>
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/rizharafifr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">Github</span>
                </Link>
              </Button>
            </div>
          </div>
          {/* End Social Media */}

          {/* Sections */}
          <div>
            <h3 className="font-medium text-lg mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#basics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Basics
                </Link>
              </li>
              <li>
                <Link
                  href="#components"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="#responsive"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Responsive Design
                </Link>
              </li>
            </ul>
          </div>
          {/* End Sections */}

          {/* Resources */}
          <div>
            <h3 className="font-medium text-lg mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  shadcn/ui
                </Link>
              </li>
              <li>
                <Link
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vercel
                </Link>
              </li>
            </ul>
          </div>
          {/* End Resources */}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {year} TailwindGuide. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import useNavbar from "./useNavbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NAV_ITEMS } from "./Navbar.constant";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const { isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection } =
    useNavbar();
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              TailwindGuide
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="w-full justify-start text-foreground/80 hover:text-foreground"
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}
      {/* End Mobile menu */}
    </nav>
  );
};

export default Navbar;

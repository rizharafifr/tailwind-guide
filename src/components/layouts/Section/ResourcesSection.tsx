import React from "react";
import SectionHeading from "./SectionHeading";
import { RESOURCE_ITEMS } from "@/components/ResourcesSection.constant";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resources"
          subtitle="Helpful resources to continue learning and building with Tailwind CSS"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCE_ITEMS.map((resource, index) => (
            <Card
              key={index}
              className="flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{resource.title}</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {resource.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Resource
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Build Your Landing Page?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Now that you&apos;ve learned the essentials of Tailwind CSS
                  for landing pages, it&apos;s time to build your own stunning
                  design!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    size="lg"
                    asChild
                  >
                    <Link href="#home">Start Building</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                    size="lg"
                    asChild
                  >
                    <Link
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Tailwind CSS
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

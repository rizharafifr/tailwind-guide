import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HtmlTag from "@/hooks/useHtmlTag";

const breakpoints = [
  { name: "sm", size: "640px", class: "text-sm", example: "sm:text-sm" },
  { name: "md", size: "768px", class: "text-base", example: "md:text-base" },
  { name: "lg", size: "1024px", class: "text-lg", example: "lg:text-lg" },
  { name: "xl", size: "1280px", class: "text-xl", example: "xl:text-xl" },
  { name: "2xl", size: "1536px", class: "text-2xl", example: "2xl:text-2xl" },
];

const ResponsiveCard = () => {
  return (
    <>
      {/* Font */}
      <Card>
        <CardHeader>
          <CardTitle>Default Breakpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {breakpoints.map((bp) => (
              <div key={bp.name}>
                <p className="text-sm text-muted-foreground mb-1">
                  {bp.class} = {bp.size}
                </p>
                <p className={`${bp.class} font-semibold`}>
                  Eyes on me - Faye Song - Final Fantasy VIII
                </p>
              </div>
            ))}
          </div>

          {/* Code block */}
          <pre className="bg-gray-700 mt-4 rounded-md p-4 text-sm font-mono text-white">
            <code>
              <HtmlTag tag="p" className="text-sm ...">
                Eyes on me - Faye Song ...
              </HtmlTag>
              {"\n"}
              <HtmlTag tag="p" className="text-base ...">
                Eyes on me - Faye Song ...
              </HtmlTag>
              {"\n"}
              <HtmlTag tag="p" className="text-lg ...">
                Eyes on me - Faye Song ...
              </HtmlTag>
              {"\n"}
              <HtmlTag tag="p" className="text-xl ...">
                Eyes on me - Faye Song ...
              </HtmlTag>
              {"\n"}
              <HtmlTag tag="p" className="text-2xl ...">
                Eyes on me - Faye Song ...
              </HtmlTag>
            </code>
          </pre>
          {/* End Code block */}
        </CardContent>
      </Card>
      {/* End Font */}
    </>
  );
};

export default ResponsiveCard;

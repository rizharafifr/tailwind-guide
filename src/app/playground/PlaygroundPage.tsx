"use client";

import BorderRadiusPlayground from "@/components/layouts/Playground/BorderRadiusPlayground";
import FlexboxPlayground from "@/components/layouts/Playground/FlexboxPlayground";
import PositionPlayground from "@/components/layouts/Playground/PositionPlayground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabs } from "@/hooks/useTabs";
import React from "react";

const PlaygroundPage = () => {
  const { activeTab, setActiveTab, isHydrated } = useTabs(
    "playground-tabs",
    "position"
  );

  if (!isHydrated) return null;

  return (
    <main className="min-h-screen pt-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Tailwind CSS Playground</h1>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList>
            <TabsTrigger value="position">Position</TabsTrigger>
            <TabsTrigger value="border-radius">Border Radius</TabsTrigger>
            <TabsTrigger value="flexbox">Flexbox</TabsTrigger>
          </TabsList>

          {/* Content Position */}
          <TabsContent value="position">
            <PositionPlayground />
          </TabsContent>
          {/* End Content Position */}

          {/* Content BorderRadius */}
          <TabsContent value="border-radius">
            <BorderRadiusPlayground />
          </TabsContent>
          {/* End Content BorderRadius */}

          {/* Content Flexbox */}
          <TabsContent value="flexbox">
            <FlexboxPlayground />
          </TabsContent>
          {/* End Content Flexbox */}
        </Tabs>
      </div>
    </main>
  );
};

export default PlaygroundPage;

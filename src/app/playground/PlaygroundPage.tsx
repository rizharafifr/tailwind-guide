"use client";

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
    <main className="min-h-screen bg-background">
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
          </TabsList>

          {/* Content Position */}
          <TabsContent value="position">
            <PositionPlayground />
          </TabsContent>
          {/* End Content Position */}
        </Tabs>
      </div>
    </main>
  );
};

export default PlaygroundPage;

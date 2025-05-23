import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import ComponentTabsContent from "./ComponentTabsContent";
import { useTabs } from "@/hooks/useTabs";

const ComponentTabs = () => {
  const { activeTab, setActiveTab, isHydrated } = useTabs(
    "component-tabs",
    "hero"
  );

  if (!isHydrated) return null;

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
        <TabsTrigger value="hero">Hero Section</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        <TabsTrigger value="cta">Call To Action</TabsTrigger>
      </TabsList>

      <ComponentTabsContent />
    </Tabs>
  );
};

export default ComponentTabs;

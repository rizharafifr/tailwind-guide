import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTabs } from "@/hooks/useTabs";
import { Card, CardContent } from "../ui/card";
import CodeBlocks from "../CodeBlocks";

interface BorderRadiusTabsProps {
  radiusValues: RadiusValues;
  tailwindClass: string;
}

const BorderRadiusTabs = ({
  radiusValues,
  tailwindClass,
}: BorderRadiusTabsProps) => {
  const { activeTab, setActiveTab } = useTabs("borderRadius-tabs", "tailwind");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
        <TabsTrigger value="css">CSS</TabsTrigger>
      </TabsList>

      <TabsContent value="tailwind">
        <Card>
          <CardContent className="pt-6">
            <CodeBlocks code={tailwindClass} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="css">
        <Card>
          <CardContent className="pt-6">
            <CodeBlocks
              language="css"
              code={`border-radius: ${radiusValues.topLeft}px ${radiusValues.topRight}px ${radiusValues.bottomRight}px ${radiusValues.bottomLeft}px;`}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BorderRadiusTabs;

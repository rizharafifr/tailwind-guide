import BorderRadiusTabs from "@/components/Tabs/BorderRadiusTabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import BORDER_RADIUS_ITEMS from "@/constant/BorderRadius.constant";
import { useBorderRadius } from "@/hooks/useBorderRadius";
import React from "react";

const BorderRadiusPlayground = () => {
  const { radiusValues, updateRadius, borderRadiusStyle, tailwindClass } =
    useBorderRadius();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Border Radius Properties</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {BORDER_RADIUS_ITEMS.map((border) => (
                <div key={border.key}>
                  <label className="text-sm font-medium mb-2 block">
                    {border.label}
                  </label>
                  <Slider
                    value={[radiusValues[border.key]]}
                    onValueChange={(value) => updateRadius(border.key, value)}
                    max={300}
                    step={1}
                  />
                  <span className="text-sm text-muted-foreground">
                    {radiusValues[border.key]}px
                  </span>
                </div>
              ))}
            </div>

            {/* Preview */}
            <div>
              <div
                className="aspect-square bg-white dark:bg-gray-800"
                style={borderRadiusStyle}
              />
            </div>
            {/* End Preview */}
          </div>
        </CardContent>
      </Card>

      <BorderRadiusTabs
        radiusValues={radiusValues}
        tailwindClass={tailwindClass}
      />
    </div>
  );
};

export default BorderRadiusPlayground;

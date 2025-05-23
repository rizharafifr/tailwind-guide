import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CodeBlocks from "../CodeBlocks";

const TypographyCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Responsive Typography</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Preview */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Responsive Heading
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              This paragraph will change size at different breakpoints.
            </p>
          </div>
          {/* End Preview */}

          {/* Code Block */}
          <CodeBlocks
            code={`<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

<p class="text-sm sm:text-base md:text-lg">
  This paragraph will change size at different breakpoints.
</p>`}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default TypographyCard;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HtmlTag from "@/hooks/useHtmlTag";

const GridCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Responsive Grid Layout</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-muted-foreground">Card 1</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-muted-foreground">Card 2</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-muted-foreground">Card 3</p>
            </div>
          </div>
          {/* End Preview */}

          {/* Code Blocks */}
          <pre className="bg-gray-700 mt-4 rounded-md p-4 text-sm font-mono text-white overflow-auto min-h-[120px] max-h-[400px]">
            <code>
              <HtmlTag
                tag="div"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {"\n  "}
                <HtmlTag tag="div">Card 1</HtmlTag>
                {"\n  "}
                <HtmlTag tag="div">Card 2</HtmlTag>
                {"\n  "}
                <HtmlTag tag="div">Card 3</HtmlTag>
                {"\n"}
              </HtmlTag>
            </code>
          </pre>
          {/* End Code Blocks */}
        </CardContent>
      </Card>
    </>
  );
};

export default GridCard;

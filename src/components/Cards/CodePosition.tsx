import React from "react";
import { Card, CardContent } from "../ui/card";

const CodePosition = () => {
  return (
    <Card>
      <CardContent className="pt-6 text-sm text-muted-foreground">
        This is full code
        <pre className="bg-muted rounded p-4 mt-4 text-xs overflow-auto">
          {`<div class="relative">
  <div class="absolute top-4 right-4">
    Absolute Box
  </div>
</div>`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default CodePosition;

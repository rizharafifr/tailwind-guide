import React from "react";
import { Card, CardContent } from "../ui/card";

const PositionExplanation = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold mb-1">Static (Default)</h3>
            <p>The default positioning - elements appear in normal flow.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Relative</h3>
            <p>
              Position relative to normal position, creates a positioning
              context for absolute children
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Absolute</h3>
            <p>Position relative to nearest positioned ancestor or viewport</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Fixed</h3>
            <p>
              Position relative to viewport, stays in place during scrolling
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Sticky</h3>
            <p>Acts like relative until scroll threshold, then fixed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionExplanation;

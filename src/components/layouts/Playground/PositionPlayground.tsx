"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx"; // atau pakai `classnames` jika kamu install itu
import PositionExplanation from "@/components/Cards/PositionExplanation";
import CodePosition from "@/components/Cards/CodePosition";
import { toast } from "sonner";

const PositionPlayground = () => {
  const [position, setPosition] = useState<
    "static" | "relative" | "absolute" | "fixed" | "sticky"
  >("relative");

  const [boxes, setBoxes] = useState([{ id: 1 }]);

  const addBox = () => {
    setBoxes((prev) => [...prev, { id: prev.length + 1 }]);
  };

  const deleteBox = () => {
    if (boxes.length === 1) {
      toast.error("Must have at least 1 div");
      return;
    }

    setBoxes((prev) => prev.slice(0, -1));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Position Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {["static", "relative", "absolute", "fixed", "sticky"].map(
              (pos) => (
                <Button
                  key={pos}
                  variant={position === pos ? "default" : "outline"}
                  onClick={() => setPosition(pos as typeof position)}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </Button>
              )
            )}
            <Button onClick={addBox} variant="secondary">
              Tambah 1 Div
            </Button>
            <Button onClick={deleteBox} variant="secondary">
              Hapus 1 Div
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            Container ini memiliki <code>position: relative</code>
          </p>

          <div className="relative h-[600px] border rounded-lg p-4 overflow-auto bg-white">
            <div className="mb-4">
              <p className="text-muted-foreground">
                Scroll container untuk melihat efek dari <code>fixed</code> atau{" "}
                <code>sticky</code>.
              </p>
            </div>

            <div className="space-y-4 relative">
              {boxes.map((box) => (
                <div
                  key={box.id}
                  className={clsx(
                    "w-24 h-24 text-white flex items-center justify-center font-semibold rounded shadow-md",
                    "bg-blue-500",
                    position === "static" && "static",
                    position === "relative" && "relative left-8 top-4",
                    position === "absolute" && "absolute right-4 top-4",
                    position === "fixed" && "fixed bottom-4 right-4 z-50",
                    position === "sticky" && "sticky top-4"
                  )}
                >
                  {position} #{box.id}
                </div>
              ))}

              <div className="h-[800px] bg-muted/30 rounded flex items-center justify-center mt-4 text-sm text-muted-foreground">
                Scroll Area Placeholder
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="explanation">
        <TabsList>
          <TabsTrigger value="explanation">Penjelasan</TabsTrigger>
          <TabsTrigger value="code">Kode</TabsTrigger>
        </TabsList>

        <TabsContent value="explanation">
          <PositionExplanation />
        </TabsContent>

        <TabsContent value="code">
          <CodePosition />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PositionPlayground;

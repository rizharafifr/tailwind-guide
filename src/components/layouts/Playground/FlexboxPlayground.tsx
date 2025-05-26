import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFlexbox from "@/hooks/useFlexbox";
import React from "react";

const FlexboxPlayground = () => {
  const {
    justifyContent,
    alignItems,
    setJustifyContent,
    setAlignItems,
    flexboxClass,
  } = useFlexbox();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flexbox Playground</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm">
                Justify Content
              </label>
              <Select value={justifyContent} onValueChange={setJustifyContent}>
                <SelectTrigger>
                  <SelectValue placeholder="Select justify" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="justify-start">Start</SelectItem>
                  <SelectItem value="justify-center">Center</SelectItem>
                  <SelectItem value="justify-end">End</SelectItem>
                  <SelectItem value="justify-between">Between</SelectItem>
                  <SelectItem value="justify-around">Around</SelectItem>
                  <SelectItem value="justify-evenly">Evenly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">
                Align Items
              </label>
              <Select value={alignItems} onValueChange={setAlignItems}>
                <SelectTrigger>
                  <SelectValue placeholder="Select items" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="items-start">Start</SelectItem>
                  <SelectItem value="items-center">Center</SelectItem>
                  <SelectItem value="items-end">End</SelectItem>
                  <SelectItem value="items-stretch">Stretch</SelectItem>
                  <SelectItem value="items-baseline">Baseline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-4">
            <div
              className={`flex ${flexboxClass} h-48 bg-gray-500 rounded-md border p-4`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-md flex items-center justify-center">
                <p className="text-white text-center">Box 1</p>
              </div>
              <div className="w-16 h-16 bg-red-500 rounded-md flex items-center justify-center">
                <p className="text-white text-center">Box 2</p>
              </div>
              <div className="w-16 h-16 bg-yellow-500 rounded-md flex items-center justify-center">
                <p className="text-white text-center">Box 3</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlexboxPlayground;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CodeBlocks from "../CodeBlocks";

const ConceptCard = () => {
  return (
    <div className="space-y-6">
      {/* Utility First */}
      <Card>
        <CardHeader>
          <CardTitle>Utility-First</CardTitle>
          <CardDescription>
            Build complex components by combining small utility classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlocks
            code={`<div class="p-4 max-w-sm mx-auto bg-white rounded-xl 
    shadow-md flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">Tailwind CSS</div>
    <p class="text-gray-500">Utility-first CSS framework</p>
  </div>
</div>`}
          />
        </CardContent>
      </Card>
      {/* End Utility First */}

      {/* Responsive Design */}
      <Card>
        <CardHeader>
          <CardTitle>Responsive Design</CardTitle>
          <CardDescription>
            Use breakpoint prefixes to create responsive layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlocks
            code={`<div class="text-center md:text-left">
  <h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive Text</h1>
</div>`}
          />
        </CardContent>
      </Card>
      {/* End Responsive Design */}

      {/* Hover, Focus, Etc */}
      <Card>
        <CardHeader>
          <CardTitle>Hover, Focus, and Other States</CardTitle>
          <CardDescription>
            Add interactivity with state variants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlocks
            code={`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Button
</button>`}
          />
        </CardContent>
      </Card>
      {/* End Hover, Focus, Etc */}
    </div>
  );
};

export default ConceptCard;

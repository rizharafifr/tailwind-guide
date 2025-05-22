import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CodeBlocks from "../CodeBlocks";

const TailwindTabs = () => {
  return (
    <Tabs>
      {/* Tab List */}
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-6">
        <TabsTrigger value="layout">Layout</TabsTrigger>
        <TabsTrigger value="typography">Typography</TabsTrigger>
        <TabsTrigger value="spacing">Spacing</TabsTrigger>
        <TabsTrigger value="colors">Colors</TabsTrigger>
        <TabsTrigger value="flexbox">Flexbox</TabsTrigger>
        <TabsTrigger value="grid">Grid</TabsTrigger>
      </TabsList>
      {/* End Tab List */}

      {/* Layout */}
      <TabsContent value="layout" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Container & Display</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Container</h4>
                <CodeBlocks code="<div class='container mx-auto'>Content</div>" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Display</h4>
                <CodeBlocks
                  code={`<div class='block'>Block</div>
<div class='hidden'>Hidden</div>
<div class='inline'>Inline</div>
<div class='inline-block'>Inline Block</div>
<div class='flex'>Flex</div>
<div class='grid'>Grid</div>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Layout */}

      {/* Typography */}
      <TabsContent value="typography" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Text Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Font Size</h4>
                <CodeBlocks
                  code={`<p class='text-xs'>Extra Small</p>
<p class='text-sm'>Small</p>
<p class='text-base'>Base</p>
<p class='text-lg'>Large</p>
<p class='text-xl'>Extra Large</p>
<p class='text-2xl'>2XL</p>`}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Font Weight</h4>
                <CodeBlocks
                  code={`<p class='font-thin'>Thin</p>
<p class='font-light'>Light</p>
<p class='font-normal'>Normal</p>
<p class='font-medium'>Medium</p>
<p class='font-semibold'>Semibold</p>
<p class='font-bold'>Bold</p>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Typography */}

      {/* Spacing */}
      <TabsContent value="spacing" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Margin & Padding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Margin</h4>
                <CodeBlocks
                  code={`<div class='m-4'>Margin all sides</div>
<div class='mx-4'>Margin x-axis</div>
<div class='my-4'>Margin y-axis</div>
<div class='mt-4'>Margin top</div>
<div class='mr-4'>Margin right</div>
<div class='mb-4'>Margin bottom</div>
<div class='ml-4'>Margin left</div>`}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Padding</h4>
                <CodeBlocks
                  code={`<div class='p-4'>Padding all sides</div>
<div class='px-4'>Padding x-axis</div>
<div class='py-4'>Padding y-axis</div>
<div class='pt-4'>Padding top</div>
<div class='pr-4'>Padding right</div>
<div class='pb-4'>Padding bottom</div>
<div class='pl-4'>Padding left</div>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Spacing */}

      {/* Colors */}
      <TabsContent value="colors" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Text Colors</h4>
                <CodeBlocks
                  code={`<p class='text-blue-500'>Blue text</p>
<p class='text-red-500'>Red text</p>
<p class='text-green-500'>Green text</p>
<p class='text-gray-500'>Gray text</p>`}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Background Colors</h4>
                <CodeBlocks
                  code={`<div class='bg-blue-500'>Blue background</div>
<div class='bg-red-500'>Red background</div>
<div class='bg-green-500'>Green background</div>
<div class='bg-gray-500'>Gray background</div>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Colors */}

      {/* Flexbox */}
      <TabsContent value="flexbox" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Flexbox</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Flex Direction</h4>
                <CodeBlocks
                  code={`<div class='flex flex-row'>Row</div>
<div class='flex flex-col'>Column</div>
<div class='flex flex-row-reverse'>Row Reverse</div>
<div class='flex flex-col-reverse'>Column Reverse</div>`}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Justify & Align</h4>
                <CodeBlocks
                  code={`<div class='flex justify-start'>Start</div>
<div class='flex justify-center'>Center</div>
<div class='flex justify-end'>End</div>
<div class='flex justify-between'>Between</div>
<div class='flex justify-around'>Around</div>
<div class='flex items-start'>Items Start</div>
<div class='flex items-center'>Items Center</div>
<div class='flex items-end'>Items End</div>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Flexbox */}

      {/* Grid */}
      <TabsContent value="grid" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Grid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Grid Columns</h4>
                <CodeBlocks
                  code={`<div class='grid grid-cols-1'>1 Column</div>
<div class='grid grid-cols-2'>2 Columns</div>
<div class='grid grid-cols-3'>3 Columns</div>
<div class='grid grid-cols-4'>4 Columns</div>
<div class='grid grid-cols-12'>12 Columns</div>`}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Grid Gap</h4>
                <CodeBlocks
                  code={`<div class='grid gap-1'>Gap 1</div>
<div class='grid gap-2'>Gap 2</div>
<div class='grid gap-4'>Gap 4</div>
<div class='grid gap-8'>Gap 8</div>
<div class='grid gap-x-4 gap-y-8'>Different X/Y</div>`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Grid */}
    </Tabs>
  );
};

export default TailwindTabs;

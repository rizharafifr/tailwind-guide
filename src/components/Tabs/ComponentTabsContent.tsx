import React from "react";
import { TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import CodeBlocks from "../CodeBlocks";

const ComponentTabsContent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <TabsContent value="hero" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hero Sections</h3>
            <p className="text-muted-foreground mb-6">
              Hero sections are the first thing visitors see. They should be
              eye-catching and clearly communicate your value proposition.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Include a compelling headline</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Add a brief supporting description</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Include one or two call-to-action buttons</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Consider adding an image or illustration</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white rounded-t-lg">
                <h2 className="text-2xl font-bold mb-2">
                  Your Product Tagline
                </h2>
                <p className="mb-4 opacity-90">
                  A brief description of your amazing product and what problem
                  it solves for users.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <CodeBlocks
                  code={`<div class="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white rounded-lg">
  <h2 class="text-2xl font-bold mb-2">Your Product Tagline</h2>
  <p class="mb-4 opacity-90">A brief description of your amazing product and what problem it solves for users.</p>
  <div class="flex flex-wrap gap-3">
    <button class="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded font-medium">Get Started</button>
    <button class="text-white border border-white hover:bg-white/10 px-4 py-2 rounded font-medium">Learn More</button>
  </div>
</div>`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      {/* End Hero Section */}

      {/* Features Section */}
      <TabsContent value="features" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Feature Sections</h3>
            <p className="text-muted-foreground mb-6">
              Feature sections highlight the key benefits and functionality of
              your product or service.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Organize features in a grid or list</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Use icons to enhance visual appeal</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Keep descriptions brief and benefit-focused</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Consider using alternating layouts for visual interest</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium mb-1">Fast Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Lightning fast load times for better user experience.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium mb-1">Secure Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade security for your information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <CodeBlocks
                  code={`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4 rounded-lg border bg-white">
    <div class="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
      <!-- Icon SVG here -->
    </div>
    <h3 class="font-medium mb-1">Fast Performance</h3>
    <p class="text-sm text-gray-500">Lightning fast load times for better user experience.</p>
  </div>
  <div class="p-4 rounded-lg border bg-white">
    <div class="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
      <!-- Icon SVG here -->
    </div>
    <h3 class="font-medium mb-1">Secure Data</h3>
    <p class="text-sm text-gray-500">Enterprise-grade security for your information.</p>
  </div>
</div>`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      {/* End Features Section */}

      {/* Testimonials Section */}
      <TabsContent value="testimonials" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Testimonial Sections
            </h3>
            <p className="text-muted-foreground mb-6">
              Testimonials build trust by showcasing positive experiences from
              real customers.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Include a photo of the person (if possible)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Show the person name and role/company</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Keep testimonials concise and specific</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Consider using a carousel for multiple testimonials</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        CEO at TechStart
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    This product has completely transformed our workflow. Weve
                    seen a 30% increase in productivity since implementing it.
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <CodeBlocks
                  code={`<div class="rounded-lg border bg-white p-6">
  <div class="flex items-center gap-4 mb-4">
    <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
      <!-- User avatar or icon -->
    </div>
    <div>
      <h4 class="font-medium">Sarah Johnson</h4>
      <p class="text-sm text-gray-500">CEO at TechStart</p>
    </div>
  </div>
  <p class="italic text-gray-600">"This product has completely transformed our workflow. We've seen a 30% increase in productivity since implementing it."</p>
  <div class="flex mt-4">
    <!-- 5 star rating icons -->
  </div>
</div>`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      {/* End Testimonials Section */}

      {/* Call To Action Section */}
      <TabsContent value="cta" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Call to Action Sections
            </h3>
            <p className="text-muted-foreground mb-6">
              CTA sections prompt visitors to take a specific action, like
              signing up or making a purchase.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Use a clear, action-oriented headline</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Include a brief, compelling reason to act</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Make the CTA button stand out visually</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p>Consider adding urgency or exclusivity</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to get started?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Join thousands of satisfied customers today.
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6">
                    Sign Up Now
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <CodeBlocks
                  code={`<div class="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white text-center">
  <h3 class="text-2xl font-bold mb-2">Ready to get started?</h3>
  <p class="mb-6 opacity-90">Join thousands of satisfied customers today.</p>
  <button class="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-2 rounded">Sign Up Now</button>
</div>`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      {/* End Call To Action Section */}
    </div>
  );
};

export default ComponentTabsContent;

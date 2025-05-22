import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import CodeBlocks from "../CodeBlocks";

const InstallationCard = () => {
  return (
    <div className="space-y-6">
      {/* Installation */}
      <Card>
        <CardContent>
          <CodeBlocks
            title="Installation"
            language="bash"
            code={`npm install -D tailwindcss postcss autoprefixer
              npx tailwindcss init -p`}
          />
        </CardContent>
      </Card>
      {/* End Installation */}

      {/* Tailwind Config */}
      <Card>
        <CardContent>
          <CodeBlocks
            title="tailwind.config.js"
            language="javascript"
            code={`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          />
        </CardContent>
      </Card>
      {/* End Tailwind Config */}

      {/* Global Styles */}
      <Card>
        <CardContent>
          <CodeBlocks
            title="globals.css"
            language="css"
            code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          />
        </CardContent>
      </Card>
      {/* End Global Styles */}
    </div>
  );
};

export default InstallationCard;

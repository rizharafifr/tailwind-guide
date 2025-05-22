import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

interface CodeBlocksProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlocks = ({ code, className, title, language }: CodeBlocksProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy code to clipboard");
    }
  };
  return (
    <div className={cn("relative rounded-lg overflow-hidden my-4", className)}>
      {title && (
        <div className="bg-muted px-4 py-2 text-sm font-medium border-b">
          {title}
        </div>
      )}
      <div className="relative bg-muted/50 group">
        <pre className="overflow-x-auto p-4 text-sm text-foreground">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default CodeBlocks;

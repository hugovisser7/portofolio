"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function InteractiveButtonDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Interactive Hover Button Demo</h1>
        <InteractiveHoverButton />
        <InteractiveHoverButton text="Contact" className="w-40" />
        <InteractiveHoverButton text="Bekijk meer" className="w-48" />
      </div>
    </div>
  );
}

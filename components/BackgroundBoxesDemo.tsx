"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-libre-baskerville text-center px-4")}>
            Inovație în Sănătate și Nutriție
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-2xl px-4">
            Combinăm expertiza medicală cu tehnologia modernă pentru a-ți oferi cea mai bună experiență în drumul tău spre o viață sănătoasă
          </p>
        </div>
      </div>
    </section>
  );
} 
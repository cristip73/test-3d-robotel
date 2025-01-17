'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-libre-baskerville">
                Transformare Digitală
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                Folosim tehnologie de ultimă generație pentru a-ți monitoriza progresul și a-ți oferi cea mai bună experiență în drumul tău spre o viață mai sănătoasă.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 
"use client";

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const conditions = [
  {
    id: "diabetes",
    title: "Diabet și management",
    content: {
      title: "Gestionarea mai bună a diabetului",
      description: "Obține ajutor în gestionarea diabetului și îmbunătățirea sănătății generale în programul nostru cu:",
      features: [
        "Îndrumare personalizată de la un specialist în diabet",
        "Dispozitive inteligente care se sincronizează cu aplicația",
        "Monitorizare continuă a glicemiei (CGM)*",
        "Furnizare continuă de teste și consumabile"
      ],
      image: "/images/conditions/diabetes.jpg",
      cta: {
        text: "Program pentru Diabet",
        href: "/servicii/diabet"
      }
    }
  },
  {
    id: "blood-pressure",
    title: "Tensiune arterială",
    content: {
      title: "Scăderea tensiunii arteriale",
      description: "Primește ajutor dedicat pentru controlul tensiunii arteriale dincolo de medicamente în programul nostru cu:",
      features: [
        "Îndrumare personalizată de la un specialist cardiovascular",
        "Sfaturi pentru nutriție, stres și somn",
        "Monitor de tensiune și cântar inteligent",
        "Plan personalizat de management"
      ],
      image: "/images/conditions/blood-pressure.jpg",
      cta: {
        text: "Program pentru Tensiune",
        href: "/servicii/tensiune"
      }
    }
  },
  {
    id: "weight",
    title: "Slăbire și riscuri",
    content: {
      title: "Slăbește și reduce riscurile",
      description: "Te ajutăm să slăbești sănătos și să reduci riscurile asociate cu:",
      features: [
        "Plan personalizat de nutriție",
        "Monitorizare constantă a progresului",
        "Exerciții adaptate condiției tale",
        "Suport psihologic continuu"
      ],
      image: "/images/conditions/weight-loss.jpg",
      cta: {
        text: "Program de Slăbire",
        href: "/servicii/slabire"
      }
    }
  },
  {
    id: "pain",
    title: "Dureri articulare",
    content: {
      title: "Ameliorarea durerii pentru oricine",
      description: "Programul nostru de management al durerii include:",
      features: [
        "Evaluare completă a durerii",
        "Plan personalizat de exerciții",
        "Terapie fizică specializată",
        "Monitorizare continuă a progresului"
      ],
      image: "/images/conditions/joint-pain.jpg",
      cta: {
        text: "Program pentru Dureri",
        href: "/servicii/dureri"
      }
    }
  }
];

export default function ConditionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
            Află despre Condițiile Tratate
          </h2>
          
          <Tabs defaultValue="diabetes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {conditions.map((condition) => (
                <TabsTrigger 
                  key={condition.id} 
                  value={condition.id}
                  className="text-center py-2 px-2 min-h-[50px] text-sm font-medium 
                    bg-gray-50 hover:bg-gray-200 
                    data-[state=active]:bg-primary
                    border rounded-lg shadow-sm
                    transition-all duration-200"
                >
                  {condition.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {conditions.map((condition) => (
              <TabsContent key={condition.id} value={condition.id} className="mt-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{condition.content.title}</h3>
                      <p className="text-gray-700 mb-6">{condition.content.description}</p>
                      <ul className="space-y-3 mb-8">
                        {condition.content.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button size="lg">
                        {condition.content.cta.text}
                      </Button>
                    </div>
                    <div className="relative min-h-[300px] lg:min-h-full">
                      <Image
                        src={condition.content.image}
                        alt={condition.content.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
} 
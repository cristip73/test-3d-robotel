"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function HealthPrograms() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
            Programe Specializate pentru Sănătatea Ta
          </h2>
          
          <Tabs defaultValue="diabetes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="diabetes"
                className="text-center py-2 px-2 min-h-[30px] text-sm font-medium border rounded-lg shadow-sm
                  data-[state=active]:bg-[var(--secondary)] data-[state=active]:text-white
                  data-[state=active]:border-[var(--secondary)]
                  bg-gray-50 hover:bg-gray-200 transition-all duration-200"
              >
                Diabet
              </TabsTrigger>
              <TabsTrigger 
                value="hypertension"
                className="text-center py-2 px-2 min-h-[30px] text-sm font-medium border rounded-lg shadow-sm
                  data-[state=active]:bg-[var(--secondary)] data-[state=active]:text-white
                  data-[state=active]:border-[var(--secondary)]
                  bg-gray-50 hover:bg-gray-200 transition-all duration-200"
              >
                Hipertensiune
              </TabsTrigger>
              <TabsTrigger 
                value="prevention"
                className="text-center py-2 px-2 min-h-[30px] text-sm font-medium border rounded-lg shadow-sm
                  data-[state=active]:bg-[var(--secondary)] data-[state=active]:text-white
                  data-[state=active]:border-[var(--secondary)]
                  bg-gray-50 hover:bg-gray-200 transition-all duration-200"
              >
                Prevenție
              </TabsTrigger>
              <TabsTrigger 
                value="msk"
                className="text-center py-2 px-2 min-h-[30px] text-sm font-medium border rounded-lg shadow-sm
                  data-[state=active]:bg-[var(--secondary)] data-[state=active]:text-white
                  data-[state=active]:border-[var(--secondary)]
                  bg-gray-50 hover:bg-gray-200 transition-all duration-200"
              >
                Dureri Articulare
              </TabsTrigger>
            </TabsList>

            <TabsContent value="diabetes">
              <Card>
                <CardHeader>
                  <CardTitle>Management mai bun al diabetului</CardTitle>
                  <CardDescription>
                    Primește ajutor în gestionarea diabetului și îmbunătățirea sănătății generale în programul nostru specializat cu:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Îndrumare personalizată de la un specialist în diabet</li>
                    <li>Dispozitive inteligente sincronizate cu aplicația noastră</li>
                    <li>Două senzori pentru monitorizarea continuă a glicemiei (CGM)*</li>
                    <li>Furnizare continuă de teste și consumabile</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Program pentru Diabet</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="hypertension">
              <Card>
                <CardHeader>
                  <CardTitle>Scade tensiunea arterială</CardTitle>
                  <CardDescription>
                    Obține ajutor specializat în controlul tensiunii arteriale, dincolo de medicamente, în programul nostru cu:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Îndrumare personalizată de la un specialist cardiovascular</li>
                    <li>Sfaturi pentru nutriție, gestionarea stresului și somn</li>
                    <li>Monitor de tensiune și cântar inteligent</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Program pentru Hipertensiune</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="prevention">
              <Card>
                <CardHeader>
                  <CardTitle>Slăbește și reduce riscurile de sănătate</CardTitle>
                  <CardDescription>
                    Fie că vrei să slăbești, să-ți crești nivelul de energie sau să-ți îmbunătățești sănătatea generală, programul nostru de prevenție te ajută cu:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Coaching personal pentru sănătate</li>
                    <li>Cântar inteligent pentru monitorizarea progresului</li>
                    <li>Lecții, sfaturi și rețete săptămânale</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Program de Prevenție</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="msk">
              <Card>
                <CardHeader>
                  <CardTitle>Ameliorarea durerii pentru oricine</CardTitle>
                  <CardDescription>
                    Terapia fizică nu este doar pentru atleți sau accidentări majore; este pentru oricine are dureri, inclusiv dureri persistente de spate sau gât. Cu programul nostru digital, primești:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Kit de exerciții, fără costuri suplimentare</li>
                    <li>Consultații video nelimitate cu un fizioterapeut licențiat</li>
                    <li>Plan de tratament personalizat</li>
                    <li>Exerciții video și instrumente de monitorizare a progresului</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Program pentru Dureri Articulare</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 
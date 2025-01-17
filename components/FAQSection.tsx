import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cât timp durează până voi vedea rezultate?",
    answer: "Depinde de metabolism și de programul personalizat. De obicei, pacienții noștri încep să vadă schimbări încă din primele săptămâni."
  },
  {
    question: "Este dificil să țin pasul cu dieta și consultațiile?",
    answer: "Nu. Programul Kilostop este flexibil și pus la punct special ca să se potrivească stilului tău de viață. Te programăm în funcție de disponibilitatea ta."
  },
  {
    question: "Ce se întâmplă dacă nu mă înțeleg cu medicul nutriționist?",
    answer: "Poți solicita oricând un alt medic. E important să existe chimie și încredere."
  },
  {
    question: "Ce se întâmplă dacă nu sunt mulțumit după prima lună?",
    answer: "Ai garanția banilor înapoi. Nu-ți facem nicio problemă dacă decizi că nu ți se potrivește."
  },
  {
    question: "E obligatoriu să vin la clinică sau pot lucra online?",
    answer: "Lucrăm și online cu pacienți din toată țara și chiar din străinătate. Mai ușor de atât nu se poate!"
  }
]

export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
          Întrebări frecvente
        </h2>
        <div className="w-full max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-4 rounded-lg border-none">
                <AccordionTrigger className="text-[#071913] font-bold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#071913]">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


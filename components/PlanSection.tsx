import { Button } from '@/components/ui/button'

export default function PlanSection() {
  const steps = [
    {
      title: "Consultația Inițială - Analize și Diagnostic",
      description: "Te programezi, vii la un consult (față-în-față sau online), facem investigațiile necesare și stabilim planul de tratament."
    },
    {
      title: "Abordarea Holistică 4M (Mâncare, Mișcare, Motivație, Metabolism)",
      description: "Te ajutăm să înțelegi exact ce să mănânci, ce mișcare să faci, cum să-ți menții motivația și cum să-ți reglezi metabolismul."
    },
    {
      title: "Programul de Slăbit Personalizat",
      description: "Urmezi dieta personalizată și vii la consultări săptămânale sau bilunare pentru monitorizare."
    },
    {
      title: "Sfaturi Practice & Sprijin Continuu",
      description: "Primești recomandări concrete pentru a depăși tentațiile și a nu renunța."
    },
    {
      title: "Celebrează Rezultatele",
      description: "Fiecare kilogram pierdut e sărbătorit. Răsplata? O versiune mai sănătoasă și mai fericită a ta!"
    },
    {
      title: "Menținerea pe Termen Lung",
      description: "Rămâi în program, cu o consultație gratuită pe an, ca să te asiguri că rezultatele sunt pe viață."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
          Cum Funcționează Programul Kilostop
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff5a81] text-white flex items-center justify-center text-xl font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#071913] mb-2">{step.title}</h3>
                <p className="text-[#071913]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="mx-auto">
            Programează-te ACUM la Consultația Inițială
          </Button>
        </div>
      </div>
    </section>
  )
}


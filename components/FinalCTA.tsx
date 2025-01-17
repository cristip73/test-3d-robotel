import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-16 bg-cover bg-center" style={{backgroundImage: "url('/images/final-cta-bg.jpg')"}}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-libre-baskerville">
          Ești la un click distanță de noua ta viață
        </h2>
        <p className="text-xl text-white mb-8">
          Nu mai amâna fericirea și sănătatea pe mâine!
        </p>
        <p className="text-lg text-white mb-8">
          Totul începe cu o consultație inițială de 295 lei – investiția în tine, cu rezultate care îți pot schimba viața.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg">
            Programează-te ACUM la Consultația Inițială
          </Button>
          <p className="text-sm text-white">
            Nu ești sigur? <a href="/quiz" className="underline">Completează quiz-ul nostru și află cât ai putea slăbi!</a>
          </p>
        </div>
      </div>
    </section>
  )
}


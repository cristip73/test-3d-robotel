import { Button } from '@/components/ui/button'

export default function QuizCTA() {
  return (
    <section className="bg-[var(--secondary)] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-libre-baskerville">
          Nu ești sigur(ă) de următorul pas? Răspunde la Quiz-ul nostru!
        </h2>
        <p className="text-xl text-white mb-8">
          Află în 60 de secunde ce tip de dietă ți s-ar potrivi și în cât timp poți slăbi sănătos. Completează quiz-ul gratuit!
        </p>
        <div className="text-center">
          <Button size="lg">
            Începe QUIZ-ul acum
          </Button>
        </div>
      </div>
    </section>
  )
}


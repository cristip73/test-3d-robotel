import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center flex items-center" style={{backgroundImage: "url('/images/hero-transformation.jpg')"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--font-color)] mb-4 font-libre-baskerville">
            Transformă-ți Viața: Slăbește Sănătos și Definitiv cu Programul Kilostop
          </h1>
          <p className="text-lg md:text-xl text-[var(--font-color)] mb-8">
            Peste 23.000 de pacienți ne-au ales și au reușit să-și recapete încrederea în ei, sănătatea și bucuria de a trăi.
          </p>
        </div>
        <div className="text-center md:text-right">
          <Button size="lg" className="mb-2">
            Programează-te la Consultația Inițială
          </Button>
          <p className="text-sm text-[var(--font-color)]">Cost consultație: 295 Lei</p>
        </div>
      </div>
    </section>
  )
}


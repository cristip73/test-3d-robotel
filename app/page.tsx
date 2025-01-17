import HeroSection from '@/components/HeroSection'
import ProblemPromiseSection from '@/components/ProblemPromiseSection'
import GuideSection from '@/components/GuideSection'
import PlanSection from '@/components/PlanSection'
import QuizCTA from '@/components/QuizCTA'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import { Header } from '@/components/Header'
import ConditionsSection from '@/components/ConditionsSection'
import HealthPrograms from '@/components/HealthPrograms'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <ProblemPromiseSection />
        <GuideSection />
        <PlanSection />
        <QuizCTA />
        <TestimonialsSection />
        <FAQSection />
        <HealthPrograms />
        <ConditionsSection />
        <FinalCTA />
      </main>
    </>
  )
}


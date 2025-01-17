import Image from 'next/image'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: "Ana M.",
    image: "/images/testimonial1.jpg",
    text: "Am slăbit 25 kg într-un an cu ajutorul medicilor Kilostop. Sunt alt om acum!"
  },
  {
    name: "Mihai P.",
    image: "/images/testimonial2.jpg",
    text: "Nu credeam că voi reuși să scap de 15 kg. Acum mă simt plin de energie și am încredere în mine."
  },
  {
    name: "Elena D.",
    image: "/images/testimonial3.jpg",
    text: "Echipa Kilostop m-a învățat să mănânc echilibrat și să-mi iubesc corpul. Mai slabă cu 20 kg, dar mult mai fericită!"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
          Poveștile lor pot deveni și povestea ta!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={100} height={100} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#071913] mb-2">{testimonial.name}</h3>
              <p className="text-[#071913]">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="mx-auto">
            Vreau și eu această transformare!
          </Button>
        </div>
      </div>
    </section>
  )
}


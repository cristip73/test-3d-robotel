import Image from 'next/image'

export default function GuideSection() {
  return (
    <section className="bg-[var(--background)] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071913] mb-12 font-libre-baskerville">
          Te ghidăm pas cu pas către succes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#071913] mb-4">Experiență și Rezultate</h3>
            <p className="text-[#071913] mb-4">
              15 ani de experiență, 23.000+ pacienți mulțumiți, 240.000 kg date jos. Kilostop este garanția transformării reale.
            </p>
            <Image src="/images/award.jpg" alt="Award" width={200} height={200} className="mx-auto rounded-full" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#071913] mb-4">Medici Nutriționiști Dedicați</h3>
            <p className="text-[#071913] mb-4">
              22 de medici în 2 clinici moderne (Victoriei și Unirii) și consultații online pentru români din toată lumea. Suntem aproape de tine oriunde te-ai afla.
            </p>
            <Image src="/images/doctors.jpg" alt="Echipa de medici" width={200} height={200} className="mx-auto rounded-full" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#071913] mb-4">Abordare Personalizată</h3>
            <p className="text-[#071913] mb-4">
              Aici nu ești doar un alt pacient. Ești parte din familia Kilostop. Îți oferim diete adaptate, susținere psihologică și analize medicale la fiecare pas.
            </p>
            <Image src="/images/consultation.jpg" alt="Consultație personalizată" width={200} height={200} className="mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}


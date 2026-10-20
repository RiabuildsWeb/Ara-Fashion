import about480 from '../assets/optimized/about-hero/about-480.webp'
import about768 from '../assets/optimized/about-hero/about-768.webp'
import about1024 from '../assets/optimized/about-hero/about-1024.webp'
import about1536 from '../assets/optimized/about-hero/about-1536.webp'

const AboutHero = () => {
  return (
    <section className="relative min-h-screen md:min-h-[150vh] overflow-hidden">

      <img
        src={about1024}
        srcSet={`
          ${about480} 480w,
          ${about768} 768w,
          ${about1024} 1024w,
          ${about1536} 1536w
        `}
        sizes="100vw"
        alt="ARA About Hero"
        className="absolute inset-0 w-full h-full object-cover object-[68%_center] md:object-center lg:object-top"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10 md:from-black/20 md:via-transparent md:to-black/20" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="md:flex md:justify-start md:items-center md:gap-12 lg:gap-20">
            <div className="max-w-xl text-white">
              <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-5 text-white/90">
                About ARA
              </p>

              <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] mb-6">
                Rooted
                <br />
                in Culture
              </h1>

              <p className="text-base md:text-lg leading-8 text-white/90">
                ARA is a contemporary African fashion brand celebrating
                heritage, craftsmanship, and timeless design. Every piece is
                thoughtfully created to honour our culture while embracing
                modern luxury.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutHero

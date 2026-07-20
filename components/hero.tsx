import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Marigold garland + bells header */}
      <Image
        src="/images/marigold-header.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        priority
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_92%)]"
      />

      <div className="relative px-4 pb-16 pt-[38vw] sm:pt-[30vw] md:pt-[24rem]">
        {/* Cream invitation panel */}
        <div className="mx-auto max-w-xl rounded-[2rem] border-2 border-accent/50 bg-card px-6 py-12 text-center shadow-xl shadow-foreground/10 ring-1 ring-inset ring-border md:px-12 md:py-14">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-muted-foreground">
            You are cordially invited to the
          </p>

          <h1 className="mt-4 font-script text-6xl leading-none text-primary md:text-7xl">
            Gaye Holud
          </h1>

          <p className="mt-4 font-serif text-lg italic text-muted-foreground">
            of
          </p>

          <p className="mt-2 font-script text-5xl leading-tight text-primary md:text-6xl text-balance">
            Nazia &amp; Mufrat
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-accent">&#10047;</span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <p className="mt-6 font-serif text-xl tracking-wide text-foreground md:text-2xl">
            Friday, 23 October 2026
          </p>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.25em] text-secondary">
            6:00 PM &middot; Clayton Hall
          </p>

          {/* Couple illustration */}
          <div className="mt-8">
            <Image
              src="/images/holud-couple.png"
              alt="Illustration of Nazia and Mufrat celebrating their Gaye Holud"
              width={520}
              height={520}
              className="mx-auto w-56 select-none md:w-64 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_92%)]"
            />
          </div>

          <p className="mx-auto mt-6 max-w-lg font-sans text-lg leading-relaxed text-muted-foreground text-pretty">
            Rooted in our rich heritage, the Gaye Holud is a celebratory ritual
            of applying turmeric to usher in good fortune, bright beginnings, and
            endless blessings for the couple.
          </p>

          <a
            href="https://withjoy.com/mufrat-and-nazia/rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-sans text-base font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            RSVP
          </a>
        </div>
      </div>
    </section>
  )
}

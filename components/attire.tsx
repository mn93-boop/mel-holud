const ATTIRE = [
  {
    role: "Bride's Side",
    colorName: 'Light Pink',
    swatch: '#f7cfd9',
  },
  {
    role: "Groom's Side",
    colorName: 'Pistachio',
    swatch: '#c4d6a0',
  },
]

export function Attire() {
  return (
    <section id="attire" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/70">
            Dress Code
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            What to Wear
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-lg leading-relaxed text-muted-foreground text-pretty">
            Join us in the spirit of the celebration by dressing in the colours of
            the day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ATTIRE.map((item) => (
            <div
              key={item.role}
              className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-10 text-center"
            >
              <span
                className="size-20 rounded-full border-4 border-background shadow-sm ring-1 ring-border"
                style={{ backgroundColor: item.swatch }}
                aria-hidden="true"
              />
              <h3 className="mt-6 font-serif text-3xl text-foreground">
                {item.role}
              </h3>
              <span className="mt-2 font-sans text-base uppercase tracking-[0.2em] text-primary">
                {item.colorName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

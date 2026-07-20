import { MapPin, Clock, Car } from 'lucide-react'

export function Venue() {
  const mapsQuery = encodeURIComponent('Clayton Hall')

  return (
    <section id="venue" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/70">
            Getting There
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            The Venue
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8">
            <h3 className="font-serif text-3xl text-foreground">Clayton Hall</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-sans text-sm leading-relaxed text-muted-foreground">
                  Clayton Hall — please arrive a few minutes early to be seated.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-sans text-sm leading-relaxed text-muted-foreground">
                  Friday, 23 October 2026 &middot; Doors open at 6:00 PM.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Car className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-sans text-sm leading-relaxed text-muted-foreground">
                  A dedicated driveway is available for dropping off guests, with
                  limited parking on site. For additional parking, please use the
                  street parking along Mary St or the Catholic Parish car park next
                  to the Hall (enter via Mary St).
                </span>
              </li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map to Clayton Hall"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[300px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

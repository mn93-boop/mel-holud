import { Hero } from '@/components/hero'
import { Countdown } from '@/components/countdown'
import { Schedule } from '@/components/schedule'
import { Attire } from '@/components/attire'
import { Venue } from '@/components/venue'
import { Divider } from '@/components/divider'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Divider />
      <Schedule />
      <Divider />
      <Attire />
      <Divider />
      <Venue />
      <Divider />
      <section className="px-6 py-20 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/70">
          Kindly Respond
        </p>
        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">RSVP</h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-lg leading-relaxed text-muted-foreground text-pretty">
          Please let us know by 30 August 2026 so we can save you a seat.
        </p>
        <a
          href="https://withjoy.com/mufrat-and-nazia/rsvp"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-sans text-base font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          RSVP via WithJoy
        </a>
      </section>
      <Divider />
      <Countdown />
      <footer className="border-t border-border px-6 py-10 text-center">
        <p className="font-serif text-2xl text-primary">Nazia &amp; Mufrat</p>
        <p className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
          23 October 2026 &middot; Clayton Hall
        </p>
      </footer>
    </main>
  )
}

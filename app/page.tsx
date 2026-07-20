import { Hero } from '@/components/hero'
import { Countdown } from '@/components/countdown'
import { Schedule } from '@/components/schedule'
import { Attire } from '@/components/attire'
import { Venue } from '@/components/venue'
import { Rsvp } from '@/components/rsvp'
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
      <Rsvp />
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

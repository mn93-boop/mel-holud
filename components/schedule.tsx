import { Flower2, Music, UtensilsCrossed, Sparkles, HandHeart } from 'lucide-react'

const EVENTS = [
  {
    time: '6:00 PM',
    title: 'Guest Arrival',
    description: 'Welcome drinks and traditional sweets as guests are seated.',
    icon: Flower2,
  },
  {
    time: '6:15 PM',
    title: 'Entry of the Couple',
    description: 'Nazia & Mufrat are escorted in amidst song and celebration.',
    icon: Sparkles,
  },
  {
    time: '7:00 PM',
    title: 'Holud Ceremony',
    description: 'Family and friends apply turmeric and offer their blessings.',
    icon: HandHeart,
  },
  {
    time: '8:00 PM',
    title: 'Dinner',
    description: 'A feast of traditional delicacies served to all our guests.',
    icon: UtensilsCrossed,
  },
  {
    time: '9:00 PM',
    title: 'Music & Dance',
    description: 'An evening of performances, dhol, and joyful festivities.',
    icon: Music,
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/70">
            The Evening
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Order of Events
          </h2>
        </div>

        <ol className="mt-12 space-y-2">
          {EVENTS.map((event, i) => {
            const Icon = event.icon
            const last = i === EVENTS.length - 1
            return (
              <li key={event.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {!last && <span className="my-1 w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8 pt-1.5">
                  <span className="font-sans text-base uppercase tracking-[0.2em] text-primary">
                    {event.time}
                  </span>
                  <h3 className="mt-1 font-serif text-3xl text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-1 font-sans text-lg leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

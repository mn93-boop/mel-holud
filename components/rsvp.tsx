'use client'

import { useState } from 'react'
import { Check, Heart } from 'lucide-react'

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false)
  const [attending, setAttending] = useState<'yes' | 'no'>('yes')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/70">
            Kindly Respond
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Will you join us?
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            Please let us know by 30 August 2026 so we can save you a seat.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Heart className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-3xl text-foreground">
                Thank you!
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                {attending === 'yes'
                  ? 'We are so happy you will be celebrating with us.'
                  : 'We will miss you, but thank you for letting us know.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-sans text-sm font-medium text-foreground"
                >
                  Full Names of Those Attending
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe, John Doe"
                  className="w-full rounded-xl border border-input bg-muted px-4 py-2.5 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-sans text-sm font-medium text-foreground"
                >
                  Email/Phone
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  placeholder="you@example.com or your phone number"
                  className="w-full rounded-xl border border-input bg-muted px-4 py-2.5 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <div>
                <span className="mb-1.5 block font-sans text-sm font-medium text-foreground">
                  Will you attend?
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {(['yes', 'no'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAttending(option)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 font-sans text-sm transition ${
                        attending === option
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-input bg-muted text-foreground hover:border-primary/50'
                      }`}
                    >
                      {attending === option && <Check className="size-4" aria-hidden="true" />}
                      {option === 'yes' ? 'Joyfully accept' : 'Regretfully decline'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-1.5 block font-sans text-sm font-medium text-foreground"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  defaultValue="1"
                  className="w-full rounded-xl border border-input bg-muted px-4 py-2.5 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="dietary"
                  className="mb-1.5 block font-sans text-sm font-medium text-foreground"
                >
                  Dietary Requirements{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="dietary"
                  name="dietary"
                  rows={2}
                  placeholder="Allergies, vegetarian, halal, or other needs..."
                  className="w-full resize-none rounded-xl border border-input bg-muted px-4 py-2.5 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-sans text-sm font-medium text-foreground"
                >
                  A note for the couple{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Send your blessings and wishes..."
                  className="w-full resize-none rounded-xl border border-input bg-muted px-4 py-2.5 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-4 font-sans text-base font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Send RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

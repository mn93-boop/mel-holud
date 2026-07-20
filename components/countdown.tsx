'use client'

import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-10-23T18:00:00')

function getRemaining() {
  const diff = EVENT_DATE.getTime() - Date.now()
  const clamped = Math.max(diff, 0)
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getRemaining)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Counting down to the celebration
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-3 md:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card px-1 py-4 shadow-sm md:px-2 md:py-7"
            >
              <span className="font-serif text-3xl font-semibold text-primary tabular-nums md:text-6xl">
                {mounted ? String(unit.value).padStart(2, '0') : '--'}
              </span>
              <span className="mt-2 font-sans text-[0.55rem] uppercase tracking-[0.15em] text-muted-foreground md:text-xs md:tracking-[0.25em]">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

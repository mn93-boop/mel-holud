export function Divider() {
  return (
    <div
      className="flex items-center justify-center gap-3 px-6 py-2"
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-foreground/25 md:w-28" />
      <span className="text-lg text-primary">&#10047;</span>
      <span className="text-2xl text-accent-foreground">&#10048;</span>
      <span className="text-lg text-primary">&#10047;</span>
      <span className="h-px w-16 bg-foreground/25 md:w-28" />
    </div>
  )
}

function PluckStatement() {
  const items = Array(8).fill('A great cup starts with a careful pluck — the top two leaves and a bud.')

  return (
    <section className="py-14 text-center overflow-hidden">
      <h2 className="font-serif text-3xl sm:text-5xl max-w-3xl mx-auto px-6 leading-tight">
        A <em className="text-clay">great</em> cup starts with a careful pluck — the top{' '}
        <span className="underline decoration-moss decoration-4 underline-offset-4">two leaves</span> and a bud.
      </h2>

      <div className="mt-8 flex whitespace-nowrap gap-8 animate-drift opacity-60 text-[13px] tracking-wide">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t} <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default PluckStatement

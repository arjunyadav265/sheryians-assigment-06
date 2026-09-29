function FindYourCup() {
  const vibes = [
    'A Sweet Treat', 'Evening Unwind', 'Focused & Clear', 'Caffeine!', 'Caffeine-Free',
    'Ceremony-Worthy', 'Whole Leaf', 'Over Ice', 'Lattes', 'Black Tea', 'Green Tea',
    'Herbal Tea', 'Organic', 'Barista Favorite', 'Calm & Cozy', 'Fruit Forward',
  ]

  return (
    <section className="py-14 px-4">
      <h2 className="font-serif text-[30px] text-center">Let's find a cup that fits the moment</h2>
      <div className="max-w-[300px] mx-auto mt-6">
        <input defaultValue="h" placeholder="Search teas..." className="w-full border border-ink rounded-lg px-4 py-3 text-[15px] bg-cream" />
      </div>
      <div className="max-w-[700px] mx-auto mt-16">
        <p className="font-mono text-[10px]">OR EXPLORE BY VIBE...</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {vibes.map((v) => (
            <button key={v} className="bg-sky border border-ink rounded-lg px-3 py-1.5 font-serif text-[16px] hover:bg-white">{v}</button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FindYourCup

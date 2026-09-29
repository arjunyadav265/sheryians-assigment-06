function Origins() {
  return (
    <section id="story" className="relative text-white overflow-hidden">
      <img
        src="https://www.twoleavestea.com/cdn/shop/files/adam-vradenburg-_gu7E90QChU-unsplash_1_1.webp?v=1771592855&width=1600"
        alt="forest"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-[900px] mx-auto text-center px-6 pt-10 pb-24 min-h-[620px] flex flex-col">
        <h2 className="font-condensed text-[64px] md:text-[110px] leading-none tracking-tight">BORN IN<br />COLORADO</h2>
        <p className="font-serif text-[22px] md:text-[30px] leading-[1.35] mt-auto">
          Our founder, Richard, started Two Leaves and a Bud in pursuit of a truly great cup.
          Two decades later, that same care and curiosity guide everything we make.
        </p>
      </div>
      <div className="relative flex justify-center gap-8 pb-8 -mt-14">
        {['Quality', 'People', 'Planet'].map((t) => (
          <div key={t} className="w-16 h-16 rounded-full border border-ink bg-limebadge flex items-center justify-center text-[10px] font-bold text-ink">{t}</div>
        ))}
      </div>
    </section>
  )
}

export default Origins

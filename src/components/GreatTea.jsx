function GreatTea() {
  return (
    <section className="tile-bg border-y border-ink relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-[280px_1fr] gap-6 p-6 items-stretch">
        <div className="bg-[#e85d19] border border-ink rounded-xl p-8 text-[#fff6d6]">
          <h2 className="font-serif text-[36px] leading-[1.15]">Great Tea.<br />In Good<br />Company.</h2>
        </div>
        <div className="relative hidden md:block">
          <img
            src="https://www.twoleavestea.com/cdn/shop/files/Naked_Tea.webp?v=1771401766&width=700"
            alt="tea packs"
            className="h-[280px] object-contain mx-auto"
          />
          <p className="absolute top-2 right-10 text-white font-serif italic">hand holding sachet →</p>
        </div>
      </div>
    </section>
  )
}

export default GreatTea

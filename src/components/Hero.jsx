function Hero() {
  return (
    <section className="relative bg-leaf overflow-hidden border-b border-ink">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 items-center px-6 py-10 md:py-0 md:h-[420px]">
        <div className="relative z-10 py-6">
          <span className="sticker bg-limebadge text-[26px]">NEW!</span>
          <h1 className="font-serif text-white text-[48px] md:text-[56px] leading-[1.02] mt-3">Yuzu Matcha</h1>
          <p className="text-white text-[13px] leading-relaxed mt-3 max-w-[380px]">
            A collaboration with our buds at YUZUCO, Two Leaves and a Bud's Yuzu Matcha
            brings together premium yuzu and pure matcha in one effortlessly refreshing blend.
          </p>
          <a href="#shop" className="inline-block mt-5 bg-navy text-white text-[13px] px-8 py-2.5 rounded-full">Shop Now</a>
        </div>
        <div className="relative h-[300px] md:h-[420px]">
          <img
            src="https://www.twoleavestea.com/cdn/shop/files/YuzuMatcha_family.png?v=1788461431&width=900"
            alt="Yuzu Matcha cats"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
      <button className="absolute right-4 top-4 w-8 h-8 bg-white border border-ink rounded-full">＞</button>
      <button className="absolute right-4 -bottom-0 translate-y-1/2 w-8 h-8 bg-navy text-white rounded-full border border-ink">↓</button>
    </section>
  )
}

export default Hero

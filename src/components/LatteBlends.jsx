function LatteBlends() {
  const slide = {
    badge: 'NICE',
    title: 'Chai Latte Mix',
    desc: 'Our Nice Chai is a not too sweet, not too spicy, powdered latte mix meant for making tea lattes simple.',
    img: 'https://www.twoleavestea.com/cdn/shop/files/Nice_Chai.webp?v=1773826534&width=600',
  }

  return (
    <section className="bg-bark py-8 px-3">
      <p className="text-center text-cream font-mono text-[11px] mb-4">(NO TRAINING REQUIRED)</p>
      <div className="relative bg-peach border border-ink rounded-xl max-w-[1240px] mx-auto grid md:grid-cols-2 items-center p-8 min-h-[380px]">
        <button className="absolute left-4 w-9 h-9 bg-white border border-ink rounded-full">〈</button>
        <div className="flex justify-center">
          <img src={slide.img} alt={slide.title} className="max-h-[320px] object-contain" />
        </div>
        <div>
          <span className="sticker bg-[#e8a06a] text-[26px]">{slide.badge}</span>
          <h3 className="font-serif text-[52px] leading-[1.02] mt-2">Chai<br />Latte Mix</h3>
          <p className="text-[12px] mt-3 max-w-[280px]">{slide.desc}</p>
          <button className="mt-4 bg-white border border-ink rounded-full px-8 py-2 text-[13px]">Shop Now</button>
        </div>
        <button className="absolute right-4 w-9 h-9 bg-white border border-ink rounded-full">〉</button>
      </div>
    </section>
  )
}

export default LatteBlends

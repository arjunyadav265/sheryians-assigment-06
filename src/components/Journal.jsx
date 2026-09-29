function Journal() {
  const posts = [
    { tag: 'MATCHA', title: 'MATCHA MARTINI', sub: 'MATCHA MARTINI RECIPE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Screenshot_2026-09-22_at_12.59.29_PM.png?v=1790107208&width=480' },
    { tag: 'MATCHA', title: 'RASPBERRY MATCHA YUZU-ADE', sub: 'RASPBERRY MATCHA YUZU-ADE RECIPE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Raspberry_Yuzu-Ade.png?v=1789666148&width=480' },
    { tag: 'MATCHA', title: 'ICED BLUEBERRY MATCHA', sub: 'ICED BLUEBERRY MATCHA RECIPE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Iced_Blueberry_Matcha_dba69b20-682e-427d-a409-e810f7d9feee.png?v=1788969946&width=480' },
    { tag: 'MATCHA', title: 'ICED MATCHA LIME SODA', sub: 'ICED MATCHA LIME SODA RECIPE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Iced_Matcha_Lime_Soda_4a55c439-547a-4846-976c-f069e31715ce.png?v=1790092611&width=480' },
    { tag: 'MATCHA', title: 'HONEY CITRUS SPARKLING MATCHA', sub: 'HONEY CITRUS SPARKLING MATCHA RECIPE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Honey_Citrus_Sparkling_Matcha_641f41ae-52b8-4bc6-a682-3a1522147dbf.png?v=1788966828&width=480' },
    { tag: 'CHAI', title: 'ICED DATE CARAMEL CHAI PROTEIN', sub: 'ICED DATE CARAMEL CHAI PROTEIN LATTE', img: 'https://www.twoleavestea.com/cdn/shop/articles/Iced_Date_Caramel_Chai_Protein_Latte.png?v=1788898963&width=480' },
  ]

  return (
    <section id="journal" className="py-14 px-4">
      <div className="max-w-[800px] mx-auto">
        <span className="sticker bg-sun text-[28px]">JOURNAL</span>
        <h2 className="font-serif text-[32px] md:text-[38px] leading-[1.2] mt-4">
          A community steeped in <em>curiosity.</em> Explore recipes, culture, and everyday tea wisdom.
        </h2>
      </div>

      <div className="mt-10 flex gap-3 overflow-x-auto no-scrollbar snap-x px-2">
        {posts.map((p) => (
          <div key={p.title} className="snap-start min-w-[200px] max-w-[200px] border border-ink rounded-xl overflow-hidden bg-white">
            <div className="relative h-[220px]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              <span className="absolute top-2 left-2 bg-white border border-ink rounded-md text-[10px] font-mono px-1.5 py-0.5">{p.tag}</span>
              <p className="absolute inset-0 flex items-center justify-center text-white font-condensed text-[20px] text-center leading-tight p-3 drop-shadow">{p.title}</p>
            </div>
            <p className="bg-sky font-mono text-[10px] p-2.5 border-t border-ink">{p.sub}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#journal" className="bg-navy text-white text-[13px] px-8 py-2.5 rounded-full inline-block">Explore The Tea Journal</a>
      </div>
    </section>
  )
}

export default Journal

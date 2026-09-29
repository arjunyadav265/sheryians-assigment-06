function BestSellers() {
  const products = [
    {
      id: 1,
      tag: 'TEA SACHETS',
      bg: '#b9ed9a',
      name: 'Organic Tropical Green Tea',
      price: 'From $11.95',
      rating: '4.72 (87)',
      desc: 'Our Organic Tropical Green is a fruity and fun take on a classic green tea.',
      img: 'https://www.twoleavestea.com/cdn/shop/files/organic_tropical_green_tea_sachet_featured.webp?v=1771579242&width=480',
    },
    {
      id: 2,
      tag: 'MATCHA',
      bg: '#b9ed9a',
      name: 'Organic Ceremonial Matcha - 1 oz Tin',
      price: 'From $23.95',
      rating: '4.5 (2)',
      desc: 'Our Ceremonial Matcha is organic and ceremonial-grade Japanese matcha.',
      img: 'https://www.twoleavestea.com/cdn/shop/files/1ozTin_front.png?v=1789151141&width=480',
    },
    {
      id: 3,
      tag: 'NAKED SACHETS',
      bg: '#9be0b0',
      name: 'Organic Peppermint - 50 Naked Tea Sachets',
      price: '$21.95',
      rating: '5 (14)',
      desc: 'Our organic Peppermint tea is made from peppermint grown in Washington State.',
      img: 'https://www.twoleavestea.com/cdn/shop/files/peppermint_naked_featured.webp?v=1771580547&width=480',
    },
    {
      id: 4,
      tag: 'NAKED SACHETS',
      bg: '#c9ddff',
      name: 'Organic Earl Grey - 50 Naked Tea Sachets',
      price: '$21.95',
      rating: '4.58 (43)',
      desc: "Earl Grey's distinctive aroma comes from bergamot - a citrus fruit about the size of an orange.",
      img: 'https://www.twoleavestea.com/cdn/shop/files/Naked_Tea.webp?v=1771401766&width=480',
    },
    {
      id: 5,
      tag: 'GIFTS & SAMPLERS',
      bg: '#ffce6b',
      name: 'Herbal Tea Trio',
      price: '$33.30',
      rating: '5 (2)',
      desc: 'A trio of soothing herbal teas.',
      img: 'https://www.twoleavestea.com/cdn/shop/files/bundle-herbal-tea-trio-featured-image.webp?v=1772174356&width=480',
    },
    {
      id: 6,
      tag: 'GIFTS & SAMPLERS',
      bg: '#c9ddff',
      name: 'Classic Bamboo Tea Chest',
      price: '$42.95',
      rating: '4.85 (41)',
      desc: 'This 6-slot bamboo box offers a sampling of eight sachets each of six of our best selling teas.',
      img: 'https://www.twoleavestea.com/cdn/shop/files/Bamboo_Tea_Chest.webp?v=1772543139&width=480',
    },
  ]

  return (
    <section id="shop" className="pt-16 pb-8 px-4">
      <p className="text-center font-serif text-[42px] md:text-[54px] leading-[1.1] max-w-[800px] mx-auto">
        A <em>great</em> cup starts with a careful pluck - the top two leaves and a bud.
      </p>

      <div className="text-center mt-14">
        <span className="sticker bg-lav text-[30px]">BEST SELLERS</span>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar snap-x px-2 pb-2">
        {products.map((p) => (
          <div key={p.id} className="snap-start min-w-[220px] max-w-[220px]">
            <div style={{ background: p.bg }} className="border border-ink rounded-xl p-3 relative h-[240px] flex flex-col">
              <div className="flex justify-between items-start">
                <span className="bg-white border border-ink rounded-md text-[10px] font-mono px-1.5 py-0.5">{p.tag}</span>
                <span className="text-[11px]">★ {p.rating}</span>
              </div>
              <img src={p.img} alt={p.name} className="w-[85%] mx-auto mt-2 object-contain flex-1" loading="lazy" />
              <button className="absolute bottom-3 right-3 bg-white border border-ink rounded-lg text-[11px] px-2 py-1 leading-tight text-center">+<br />Add</button>
            </div>
            <h3 className="font-serif text-[15px] mt-3 leading-snug">{p.name}</h3>
            <p className="text-[12px] mt-1">{p.price}</p>
            <p className="text-[11px] text-ink/70 mt-1 leading-snug">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#shop" className="bg-navy text-white text-[13px] px-8 py-2.5 rounded-full inline-block">Explore All Teas</a>
      </div>
    </section>
  )
}

export default BestSellers

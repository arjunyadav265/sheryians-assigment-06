function Reviews() {
  const reviews = [
    { quote: '“The right amount of spice.”', name: 'Angelina R.', item: 'ORGANIC MOUNTAIN HIGH CHAI', bg: '#f7b198' },
    { quote: '“This drink is incredibly refreshing, especially when served over ice. It’s light, crisp, and instantly cooling, making it perfect for a quick refresh any time of day.”', name: 'Jacob K.', item: 'ORGANIC MATCHA MINT', bg: '#8edd65' },
    { quote: '“One sip and you can feel the difference—clean energy, rich flavor, and all the good stuff your body loves. Literally liquid GOLD.”', name: 'Harrison G.', item: 'TWO ROOTS GOLDEN LATTE MIX', bg: '#ffce6b' },
    { quote: '“Soo tasty and energizing.”', name: 'Gracie M.', item: 'ORGANIC TROPICAL GREEN TEA', bg: '#8edd65' },
    { quote: '“The perfect start to my day.”', name: 'Jorge F.', item: 'JASMINE PETAL', bg: '#d5b8ff' },
  ]

  return (
    <section id="reviews" className="border-t border-ink mt-10 pt-14 pb-10 px-4">
      <div className="max-w-[700px] mx-auto">
        <span className="sticker bg-mintdeep text-[28px]">REVIEWS</span>
        <h2 className="font-serif text-[34px] md:text-[40px] leading-[1.15] mt-3">
          Loved by tea people <em>everywhere.</em><br />Here’s what they’re saying.
        </h2>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar snap-x px-2">
        {reviews.map((r, i) => (
          <div key={i} style={{ background: r.bg }} className="snap-start min-w-[210px] max-w-[210px] border border-ink rounded-xl p-5 flex flex-col min-h-[340px]">
            <p className="font-serif text-[17px] leading-snug text-center flex-1 flex items-center justify-center">{r.quote}</p>
            <p className="text-center text-[10px] mt-4">{r.name}</p>
            <div className="mt-4 -mx-5 -mb-5 border-t border-ink bg-[#ffffff33] rounded-b-xl p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-white border border-ink rounded overflow-hidden shrink-0" />
              <p className="text-[9px] font-mono leading-tight flex-1">{r.item}</p>
              <button className="bg-white border border-ink rounded-full text-[11px] px-3 py-1">Shop</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews

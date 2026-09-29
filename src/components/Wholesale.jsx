function Wholesale() {
  return (
    <section id="wholesale" className="grid md:grid-cols-2 border-y border-ink">
      <img
        src="https://www.twoleavestea.com/cdn/shop/files/Cafes_and_Partners_Hero_-rescaled.webp?v=1773752916&width=1000"
        alt="matcha in hands"
        className="w-full h-[320px] md:h-[420px] object-cover"
      />
      <div className="bg-navy text-white p-10 md:p-16 flex flex-col justify-center">
        <h2 className="font-serif text-[38px] md:text-[48px] leading-[1.1]">Our Cafe &<br />Wholesale Partners</h2>
        <p className="text-[13px] mt-4 max-w-[320px]">From local cafés to national chains, our teas power thousands of baristas every day.</p>
        <a href="#wholesale" className="mt-6 bg-white text-ink text-[13px] px-8 py-2.5 rounded-full w-fit">Learn More</a>
      </div>
    </section>
  )
}

export default Wholesale

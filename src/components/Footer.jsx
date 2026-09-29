function Footer() {
  return (
    <footer className="bg-sky pt-10">
      <div className="max-w-[800px] mx-auto px-6">
        <h3 className="font-condensed text-[26px]">STEEP WITH US</h3>
        <p className="font-serif text-[18px] mt-2">Get news stories, brewing tips, and special offers<br />straight to your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 mt-5 max-w-[420px]">
          <input placeholder="name@email.com" className="flex-1 border border-ink rounded-full px-4 py-2.5 text-[13px] bg-white" />
          <button className="bg-navy text-white rounded-full px-8 text-[13px]">Submit</button>
        </form>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 mt-10">
        <div className="bg-navy text-white/80 rounded-xl p-8 grid grid-cols-2 md:grid-cols-7 gap-6 text-[12px]">
          <div><p className="font-serif text-white text-[14px] mb-2">Tea Varieties</p>Whole Leaf Tea Sachets<br />Pure Matcha<br />Tea Lattes<br />Iced Tea<br />New!</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Collections</p>Matcha<br />Chai<br />Organic Tea<br />Naked Tea Sachets<br />Black Tea<br />Green Tea<br />Herbal Tea<br />Caffeine-Free<br />Gift & Samplers</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Lattes</p>Nice Matcha<br />Barista Matcha<br />Nice Chai<br />Barista Chai<br />Two Roots Golden Latte</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Learn</p>Our Story<br />Our Spirit<br />FAQ<br />Reviews</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Tea Journal</p>All Articles<br />Tea 101<br />Recipes<br />Sustainability</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Support</p>Contact<br />My Account<br />Loyal-Tea<br />Shipping & Returns<br />Privacy Policy<br />Terms & Conditions</div>
          <div><p className="font-serif text-white text-[14px] mb-2">Cafe & Wholesale Partners</p>Cafe & Wholesale Partners<br />Wholesale Login<br />Product and Media Files<br />Displays & Starter Kits<br />Brew Guide<br />Wholesale Catalog</div>
        </div>
        <p className="text-center font-serif italic text-[48px] mt-10 leading-none text-ink">two leaves<br />and a bud</p>
        <p className="text-center font-mono text-[10px] pb-8 mt-2">© Two Leaves and a Bud 2026 </p>
      </div>

      <button className="fixed bottom-4 left-14 bg-navy text-white text-[12px] px-5 py-2.5 rounded-t-xl rounded-br-xl">Get 10% Off</button>
    </footer>
  )
}

export default Footer

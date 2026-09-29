function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-ink">
      <div className="flex items-center justify-between px-4 py-2 text-[14px]">
        <div className="flex items-center gap-4">
          <a href="#shop" className="flex items-center gap-1">Shop <span className="text-[11px] border border-sky-700 text-sky-700 rounded-full w-4 h-4 flex items-center justify-center">◌</span></a>
          <a href="#story" className="flex items-center gap-1">Learn <span className="text-[11px] border border-sky-700 text-sky-700 rounded-full w-4 h-4 flex items-center justify-center">◌</span></a>
          <a href="#reviews">Reviews</a>
        </div>

        <a href="#top" className="absolute left-1/2 -translate-x-1/2 text-center leading-none">
          <div className="font-serif italic text-[18px] leading-[1]">two leaves<br /><span className="not-italic text-[13px]">and a bud</span></div>
        </a>

        <div className="flex items-center gap-4 text-[10px] tracking-wider font-medium">
          <a href="#account" className="hidden md:block">MY ACCOUNT</a>
          <a href="#wholesale" className="hidden md:block">CAFE & WHOLESALE PARTNERS</a>
          <a href="#journal" className="hidden md:block">TEA JOURNAL</a>
          <button className="text-lg">⌕</button>
          <button className="relative text-lg">👜</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

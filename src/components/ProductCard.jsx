function ProductCard({ p, onAdd }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col hover:shadow-lg transition group">
      <div className="bg-sand rounded-xl overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-widest text-forest/60">{p.tag}</p>
      <h3 className="font-serif text-[17px] leading-snug mt-1">{p.name}</h3>
      <p className="text-[12px] text-ink/60 mt-1">★ {p.rating}</p>
      <p className="text-[13px] text-ink/70 mt-1 line-clamp-2">{p.desc}</p>
      <div className="mt-auto pt-3 flex items-center justify-between">
        <span className="text-sm font-semibold">{p.price}</span>
        <button
          onClick={() => onAdd(p)}
          className="text-[13px] bg-forest text-cream px-4 py-2 rounded-full hover:bg-clay"
        >
          Add +
        </button>
      </div>
    </div>
  )
}

export default ProductCard

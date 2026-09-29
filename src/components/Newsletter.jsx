import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
            Great Tea.<br />In Good Company.
          </h2>
          <p className="mt-3 text-cream/60 text-[15px]">
            Discover the people, places, and purpose behind every blend.
          </p>
          <a href="#story" className="inline-block mt-6 bg-cream text-forest px-6 py-3 rounded-full text-sm font-medium">
            About us
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-2xl">Steep with us</h3>
          <p className="text-cream/60 text-sm mt-2">
            News, brewing tips, and special offers straight to your inbox.
          </p>

          {done ? (
            <p className="mt-5 bg-cream/10 rounded-2xl p-4 text-sm">
              Thanks — check your inbox to confirm. Welcome to the steep 🌱
            </p>
          ) : (
            <form onSubmit={submit} className="mt-5 flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 rounded-full px-5 py-3 text-sm text-ink outline-none"
              />
              <button className="bg-clay px-6 py-3 rounded-full text-sm font-medium hover:opacity-90">
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter

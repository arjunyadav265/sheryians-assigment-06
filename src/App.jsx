import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import Reviews from './components/Reviews'
import Origins from './components/Origins'
import FindYourCup from './components/FindYourCup'
import Wholesale from './components/Wholesale'
import LatteBlends from './components/LatteBlends'
import Journal from './components/Journal'
import GreatTea from './components/GreatTea'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <Reviews />
        <Origins />
        <FindYourCup />
        <Wholesale />
        <LatteBlends />
        <Journal />
        <GreatTea />
      </main>
      <Footer />
    </div>
  )
}

export default App

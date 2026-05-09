import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Training from '@/pages/Training'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

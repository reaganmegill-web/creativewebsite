import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Menu      from './components/Menu'
import Features  from './components/Features'
import CTABanner from './components/CTABanner'

export default function App() {
  return (
    <div style={{ backgroundColor: '#1c1008', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Menu />
      <Features />
      <CTABanner />
    </div>
  )
}

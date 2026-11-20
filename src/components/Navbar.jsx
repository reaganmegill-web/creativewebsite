
import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobile] = useState(false)

  const handleNavigation = (label) => {
    setActive(label)
    setMobile(false)
  }

  const linkStyle = (label) => ({
    padding: '9px 18px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: active === label ? 700 : 500,
    color: active === label ? '#fff8ed' : '#d4c1a8',
    background:
      active === label
        ? 'rgba(255,255,255,0.13)'
        : 'transparent',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  })

  return (
    <Motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 5%',
        background: 'rgba(28,16,8,0.94)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(232,213,183,0.12)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Brand */}
      <a
        href="#home"
        onClick={() => handleNavigation('Home')}
        style={{
          textDecoration: 'none',
          color: '#f1e3ce',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.2,
          flexShrink: 0,
        }}
      >
        <span style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '17px',
          fontWeight: 900,
          letterSpacing: '0.08em',
        }}>
          THE CORNER MARKET
        </span>
        <span style={{
          fontSize: '9px',
          letterSpacing: '0.27em',
          textTransform: 'uppercase',
          color: '#bda88d',
          marginTop: '4px',
        }}>
          FAIRFIELD, CONNECTICUT
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav
        className="corner-desktop-nav"
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '5px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => handleNavigation(label)}
            style={linkStyle(label)}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop Action */}
      <a
        className="corner-desktop-order"
        href="https://www.thecornermarketct.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '11px 20px',
          borderRadius: '999px',
          background: '#e8d5b7',
          color: '#27180d',
          fontSize: '13px',
          fontWeight: 700,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Visit Official Site
        <ExternalLink size={14} />
      </a>

      {/* Mobile Toggle */}
      <button
        className="corner-mobile-toggle"
        type="button"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobile(!mobileOpen)}
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          color: '#f1e3ce',
          cursor: 'pointer',
          padding: '8px',
        }}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <Motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '16px',
              right: '16px',
              padding: '16px',
              borderRadius: '16px',
              background: '#24160e',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
            }}
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => handleNavigation(label)}
                style={{
                  display: 'block',
                  padding: '13px 16px',
                  borderRadius: '8px',
                  color: '#f1e3ce',
                  textDecoration: 'none',
                  fontSize: '15px',
                  background:
                    active === label
                      ? 'rgba(255,255,255,0.08)'
                      : 'transparent',
                }}
              >
                {label}
              </a>
            ))}

            <a
              href="https://www.thecornermarketct.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobile(false)}
              style={{
                display: 'block',
                marginTop: '12px',
                padding: '13px',
                textAlign: 'center',
                borderRadius: '999px',
                background: '#e8d5b7',
                color: '#27180d',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Visit Official Site ↗
            </a>
          </Motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section[id] {
          scroll-margin-top: 100px;
        }

        @media (max-width: 1050px) {
          .corner-desktop-nav,
          .corner-desktop-order {
            display: none !important;
          }

          .corner-mobile-toggle {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .corner-mobile-toggle {
            margin-left: 12px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </Motion.header>
  )
}

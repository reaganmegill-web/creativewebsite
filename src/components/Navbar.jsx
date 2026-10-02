import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { User, ShoppingCart, Menu, X } from 'lucide-react'

const links = ['Home', 'Menu', 'About Us', 'Reviews', 'Promotions']

export default function Navbar() {
  const [active, setActive]     = useState('Home')
  const [mobileOpen, setMobile] = useState(false)

  return (
    <Motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         50,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '20px 48px',
        fontFamily:     'Inter, sans-serif',
      }}
    >
      {/* ── Logo ── */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
        <span style={{
          fontFamily:    'Manrope, sans-serif',
          fontWeight:    900,
          fontSize:      '1.5rem',
          color:         '#e8d5b7',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          lineHeight:    1,
        }}>
          BRWW
        </span>
      </a>

      {/* ── Centre pill nav ── */}
      <nav style={{
        display:              'none',
        alignItems:           'center',
        gap:                  '4px',
        padding:              '6px 8px',
        borderRadius:         '999px',
        background:           'rgba(26, 14, 6, 0.70)',
        backdropFilter:       'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border:               '1px solid rgba(232, 213, 183, 0.13)',
        boxShadow:            '0 2px 20px rgba(0,0,0,0.4)',
      }}
      className="nav-pill"
      >
        {links.map((label) => (
          <a
            key={label}
            href="#"
            onClick={(e) => { e.preventDefault(); setActive(label) }}
            style={{
              padding:       '7px 20px',
              borderRadius:  '999px',
              fontSize:      '14px',
              fontWeight:    active === label ? 600 : 400,
              color:         active === label ? '#f0e2c8' : '#a08868',
              background:    active === label ? 'rgba(232, 213, 183, 0.12)' : 'transparent',
              textDecoration:'none',
              transition:    'color 0.18s, background 0.18s',
              whiteSpace:    'nowrap',
            }}
            onMouseEnter={e => { if (label !== active) e.currentTarget.style.color = '#d4bb96' }}
            onMouseLeave={e => { if (label !== active) e.currentTarget.style.color = '#a08868' }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Right actions ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }} className="nav-actions">
        <button style={{
          background: 'rgba(26,14,6,0.70)', border: '1px solid rgba(232,213,183,0.20)',
          borderRadius: '50%', cursor: 'pointer',
          width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#e8d5b7', transition: 'background 0.18s, border-color 0.18s',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,213,183,0.15)'; e.currentTarget.style.borderColor = 'rgba(232,213,183,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(26,14,6,0.70)';     e.currentTarget.style.borderColor = 'rgba(232,213,183,0.20)' }}
        >
          <User size={17} strokeWidth={1.8} />
        </button>
        <button style={{
          background: 'rgba(26,14,6,0.70)', border: '1px solid rgba(232,213,183,0.20)',
          borderRadius: '50%', cursor: 'pointer',
          width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#e8d5b7', transition: 'background 0.18s, border-color 0.18s',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,213,183,0.15)'; e.currentTarget.style.borderColor = 'rgba(232,213,183,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(26,14,6,0.70)';     e.currentTarget.style.borderColor = 'rgba(232,213,183,0.20)' }}
        >
          <ShoppingCart size={17} strokeWidth={1.8} />
        </button>
        <a href="#" style={{
          marginLeft:           '4px',
          padding:              '9px 22px',
          borderRadius:         '999px',
          fontSize:             '14px',
          fontWeight:           600,
          color:                '#1c0e04',
          background:           '#e8d5b7',
          textDecoration:       'none',
          transition:           'background 0.18s, transform 0.15s',
          whiteSpace:           'nowrap',
          boxShadow:            '0 2px 12px rgba(0,0,0,0.5)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#f5e8cc'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#e8d5b7'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Order Now
        </a>
      </div>

      {/* ── Mobile toggle ── */}
      <button
        onClick={() => setMobile(!mobileOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e8d5b7', padding: '4px' }}
        className="mobile-toggle"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position:             'absolute',
              top:                  '100%',
              left:                 '16px',
              right:                '16px',
              marginTop:            '8px',
              padding:              '12px',
              borderRadius:         '16px',
              background:           'rgba(16, 8, 2, 0.97)',
              backdropFilter:       'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border:               '1px solid rgba(232, 213, 183, 0.10)',
              boxShadow:            '0 8px 32px rgba(0,0,0,0.6)',
            }}
          >
            {links.map((label) => (
              <a key={label} href="#"
                onClick={(e) => { e.preventDefault(); setActive(label); setMobile(false) }}
                style={{
                  display: 'block', padding: '10px 16px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                  color: active === label ? '#e8d5b7' : '#a08868',
                  background: active === label ? 'rgba(232,213,183,0.08)' : 'transparent',
                }}
              >
                {label}
              </a>
            ))}
            <a href="#" style={{
              display: 'block', marginTop: '8px', padding: '11px',
              textAlign: 'center', borderRadius: '999px',
              background: '#5b7566', color: '#f0e8d8',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
            }}>
              Order Now
            </a>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive show/hide via style tag ── */}
      <style>{`
        @media (min-width: 768px) {
          .nav-pill    { display: flex !important; }
          .nav-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-pill    { display: none !important; }
          .nav-actions { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </Motion.header>
  )
}

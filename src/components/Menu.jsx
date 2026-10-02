import { motion as Motion } from 'framer-motion'

const items = [
  {
    id:          'cappuccino',
    name:        'Cappuccino',
    rating:      4.9,
    price:       '$4.50',
    description: 'A timeless classic: 20% espresso, 40% velvety steamed milk, and 40% airy milk foam. Balanced and smooth.',
    image:       import.meta.env.BASE_URL + 'cup-1.png',
  },
  {
    id:          'latte',
    name:        'Latte',
    rating:      5.0,
    price:       '$5.00',
    description: 'Smooth and creamy: 30% espresso and 70% fresh, hot milk. Perfect for a creamy coffee treat.',
    image:       import.meta.env.BASE_URL + 'cup-2.png',
  },
  {
    id:          'mocha',
    name:        'Mocha',
    rating:      4.7,
    price:       '$5.00',
    description: 'For the chocolate lover: 20% espresso, 50% hot milk, and 30% premium chocolate. Decadently sweet.',
    image:       import.meta.env.BASE_URL + 'cup-3.png',
  },
]

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c" style={{ flexShrink: 0 }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function CoffeeCard({ item, index }) {
  return (
    /* Outer wrapper — creates the space above the card for the floating cup */
    <Motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.10, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:   'relative',
        flex:       '1 1 0',
        minWidth:   '0',
        maxWidth:   '315px',
        paddingTop: '120px',   /* space above card for the cup to float into */
      }}
    >
      {/* ── Floating cup image ── */}
      <img
        src={item.image}
        alt={item.name}
        draggable={false}
        style={{
          position:  'absolute',
          top:       0,
          left:      '50%',
          transform: 'translateX(-50%)',
          width:     '210px',
          height:    'auto',
          zIndex:    3,
          filter:    'drop-shadow(0 12px 24px rgba(0,0,0,0.55))',
          userSelect:'none',
        }}
      />

      {/* ── Glass card ── */}
      <div style={{
        position:             'relative',
        borderRadius:         '20px',
        background:           'rgba(232, 213, 183, 0.12)',
        backdropFilter:       'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border:               '1px solid rgba(232, 213, 183, 0.20)',
        boxShadow:            '0 8px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(232,213,183,0.10)',
        paddingTop:           '78px',  /* room for cup bottom that dips into card */
        paddingLeft:          '16px',
        paddingRight:         '16px',
        paddingBottom:        '18px',
        display:              'flex',
        flexDirection:        'column',
        gap:                  '8px',
      }}>

        {/* Rating badge — top-right of card */}
        <div style={{
          position:     'absolute',
          top:          '12px',
          right:        '12px',
          display:      'flex',
          alignItems:   'center',
          gap:          '4px',
          padding:      '3px 8px',
          borderRadius: '999px',
          background:   'rgba(30, 15, 5, 0.75)',
          backdropFilter: 'blur(6px)',
          border:       '1px solid rgba(201,168,76,0.30)',
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize:   '11.5px',
            color:      '#f0e2c8',
          }}>
            {item.rating.toFixed(1)}
          </span>
          <StarIcon />
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily:   '"Playfair Display", serif',
          fontWeight:   700,
          fontSize:     '1.45rem',
          color:        '#f0e2c8',
          margin:       0,
          marginTop:    '18px',
          lineHeight:   1.2,
          textAlign:    'center',
        }}>
          {item.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize:   '12px',
          lineHeight: 1.65,
          color:      'rgba(220, 190, 148, 0.60)',
          margin:     0,
          textAlign:  'center',
        }}>
          {item.description}
        </p>

        {/* Price + add button */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '16px',
          marginTop:      '10px',
        }}>
          <span style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize:   '1.3rem',
            color:      '#f0e2c8',
          }}>
            {item.price}
          </span>

          <button
            style={{
              width:          '34px',
              height:         '34px',
              borderRadius:   '50%',
              border:         'none',
              background:     '#4a9e8e',
              color:          '#fff',
              fontSize:       '22px',
              cursor:         'pointer',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              lineHeight:     1,
              paddingBottom:  '1px',
              transition:     'background 0.17s, transform 0.14s',
              boxShadow:      '0 4px 12px rgba(74,158,142,0.40)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#3d8f80'
              e.currentTarget.style.transform  = 'scale(1.10)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#4a9e8e'
              e.currentTarget.style.transform  = 'scale(1)'
            }}
            aria-label={`Add ${item.name} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </Motion.div>
  )
}

export default function Menu() {
  return (
    <section style={{
      position:        'relative',
      backgroundColor: '#1c0e04',
      overflow:        'hidden',
      paddingBottom:   'clamp(48px, 8vh, 88px)',
    }}>

      {/* ── Marquee title — continuous left-to-right scroll ── */}
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }
        .menu-marquee { animation: marquee-ltr 18s linear infinite; }
      `}</style>

      <div aria-hidden style={{
        overflow:     'hidden',
        marginBottom: '8px',
        lineHeight:   1,
      }}>
        <div
          className="menu-marquee"
          style={{
            display:    'flex',
            width:      'max-content',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {[0, 1].map(i => (
            <span key={i} style={{
              whiteSpace:    'nowrap',
              fontFamily:    '"Playfair Display", serif',
              fontWeight:    700,
              fontSize:      'clamp(56px, 9.5vw, 136px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color:         'rgba(140, 90, 30, 0.55)',
              paddingRight:  '0.4em',
              lineHeight:    1,
            }}>
              Curated Coffee Selection
            </span>
          ))}
        </div>
      </div>

      {/* ── Noise grain ── */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:  '300px 300px',
        opacity:         0.07,
        pointerEvents:   'none',
      }} />

      {/* ── Content ── */}
      <div style={{
        position:       'relative',
        zIndex:         10,
        maxWidth:       '1100px',
        margin:         '0 auto',
        padding:        '16px clamp(24px, 6vw, 80px) 0',
      }}>

        {/* Cards */}
        <div style={{
          display:        'flex',
          gap:            'clamp(14px, 2vw, 24px)',
          justifyContent: 'center',
          alignItems:     'flex-start',
          flexWrap:       'nowrap',
          marginBottom:   '36px',
        }}>
          {items.map((item, i) => (
            <CoffeeCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="#"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              padding:        '11px 28px',
              borderRadius:   '999px',
              border:         '1px solid rgba(232,213,183,0.28)',
              background:     'transparent',
              color:          '#c8b08a',
              fontFamily:     'Inter, sans-serif',
              fontSize:       '13.5px',
              fontWeight:     400,
              textDecoration: 'none',
              letterSpacing:  '0.01em',
              transition:     'background 0.18s, border-color 0.18s, color 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = 'rgba(232,213,183,0.09)'
              e.currentTarget.style.borderColor = 'rgba(232,213,183,0.50)'
              e.currentTarget.style.color       = '#e8d5b7'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(232,213,183,0.28)'
              e.currentTarget.style.color       = '#c8b08a'
            }}
          >
            Explore our full menu
          </a>
        </Motion.div>
      </div>

      {/* Bottom-right 4-point star */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
        style={{
          position:      'absolute',
          bottom:        '24px',
          right:         '28px',
          pointerEvents: 'none',
          zIndex:        5,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 46 46" fill="none">
          <path d="M23 0 L23 23 L0 23 L23 23 L23 46 L23 23 L46 23 L23 23 Z"
            stroke="rgba(232,213,183,0.38)" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 4 L23 23 L4 23 L23 23 L23 42 L23 23 L42 23 L23 23 Z"
            fill="rgba(232,213,183,0.20)" />
        </svg>
      </Motion.div>

    </section>
  )
}

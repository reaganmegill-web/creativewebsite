import { motion as Motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'


const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -34 },
  animate:    { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

/* 4-point star — same as the one in the reference bottom-right corner */
function Star4({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" fill="none">
      <path
        d="M23 0 L23 23 L0 23 L23 23 L23 46 L23 23 L46 23 L23 23 Z"
        stroke="rgba(232,213,183,0.40)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 4 L23 23 L4 23 L23 23 L23 42 L23 23 L42 23 L23 23 Z"
        fill="rgba(232,213,183,0.22)"
      />
    </svg>
  )
}

function HeroCoffeeImage() {
  const ref = useRef(null)
  const x = useMotionValue(0)

  /* Only horizontal tilt — gentle ±6° */
  const rotateY = useSpring(useTransform(x, [-1, 1], [-6, 6]), { stiffness: 160, damping: 22 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    x.set((e.clientX - cx) / (rect.width / 2))
  }

  function handleMouseLeave() {
    x.set(0)
  }

  return (
    <Motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:       'relative',
        perspective:    '900px',
        transformStyle: 'preserve-3d',
        cursor:         'default',
        flexShrink:     0,
      }}
    >
      <Motion.img
        src={import.meta.env.BASE_URL + "hero-coffee.png"}
        alt="BRWW artisan coffee cups"
        style={{
          width:          'clamp(480px, 56vw, 800px)',
          height:         'auto',
          display:        'block',
          objectFit:      'contain',
          rotateY,
          transformStyle: 'preserve-3d',
          filter:         'drop-shadow(0 28px 48px rgba(0,0,0,0.70)) drop-shadow(0 8px 18px rgba(0,0,0,0.55))',
        }}
        draggable={false}
      />
    </Motion.div>
  )
}

export default function Hero() {
  return (
    <section style={{
      position:        'relative',
      minHeight:       '100vh',
      display:         'flex',
      alignItems:      'center',
      overflowX:       'clip',   /* horizontal clip only — allows top bleed into navbar */
      /* Warm dark-brown base — the colour you see in the reference */
      backgroundColor: '#231208',
    }}>

      {/* ── Leather grain: SVG noise at low opacity ── */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:  '300px 300px',
        opacity:         0.09,
        pointerEvents:   'none',
      }} />

      {/* ── Warm-brown radial sheen — right side slightly lighter ── */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: [
          /* right-side lighter patch — gives the leather depth */
          'radial-gradient(ellipse 55% 70% at 82% 42%, rgba(58, 28, 10, 1) 0%, transparent 70%)',
          /* top-right corner lift */
          'radial-gradient(ellipse 40% 40% at 95% 5%, rgba(48, 22, 6, 0.7) 0%, transparent 60%)',
          /* centre-bottom dark pool */
          'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(10, 5, 1, 0.8) 0%, transparent 70%)',
        ].join(', '),
        pointerEvents: 'none',
      }} />

      {/* ── Left-side overlay so headline text pops ── */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'linear-gradient(100deg, rgba(14,6,1,0.75) 0%, rgba(14,6,1,0.45) 40%, rgba(14,6,1,0.0) 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div style={{
        position:   'relative',
        zIndex:     10,
        width:      '100%',
        maxWidth:   '1280px',
        margin:     '0 auto',
        padding:    'clamp(110px,15vh,150px) clamp(24px,6vw,80px) clamp(60px,8vh,100px)',
        display:    'flex',
        alignItems: 'center',
        gap:        'clamp(32px, 5vw, 80px)',
      }}>
        <div style={{ maxWidth: '520px', flex: '1 1 auto' }}>

          {/* Tagline chip */}
          <Motion.div {...fadeLeft(0.10)} style={{ marginBottom: '28px' }}>
            <span style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          '8px',
              padding:      '6px 16px',
              borderRadius: '999px',
              border:       '1px solid rgba(91,117,102,0.40)',
              background:   'rgba(91,117,102,0.10)',
              color:        '#8aab99',
              fontSize:     '13px',
              fontWeight:   500,
              fontFamily:   'Inter, sans-serif',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#5b7566', flexShrink: 0,
              }} />
              Artisan Coffee Brewery · Est. 2010
            </span>
          </Motion.div>

          {/* Headline */}
          <Motion.h1
            {...fadeLeft(0.24)}
            style={{
              fontFamily:    'Manrope, sans-serif',
              fontWeight:    900,
              fontSize:      'clamp(2.5rem, 5.2vw, 4.1rem)',
              lineHeight:    1.05,
              color:         '#f0e2c8',
              letterSpacing: '-0.015em',
              margin:        0,
              marginBottom:  '20px',
            }}
          >
            Discover the{' '}
            <span style={{ color: '#c9a84c' }}>Superior</span>{' '}
            Taste in Every Sip!
          </Motion.h1>

          {/* Sub-paragraph */}
          <Motion.p
            {...fadeLeft(0.40)}
            style={{
              fontFamily:   'Inter, sans-serif',
              fontSize:     'clamp(14px, 1.65vw, 16px)',
              lineHeight:   1.74,
              color:        '#9a7d60',
              marginBottom: '38px',
              maxWidth:     '440px',
            }}
          >
            For us, coffee is not just a drink — it's an art. We invite you on
            a unique culinary journey where every sip is a meeting with the
            perfect taste.
          </Motion.p>

          {/* CTA */}
          <Motion.div {...fadeUp(0.54)}>
            <a
              href="#"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                padding:        '14px 32px',
                borderRadius:   '999px',
                background:     '#5b7566',
                color:          '#f0e8d8',
                fontFamily:     'Inter, sans-serif',
                fontSize:       '15px',
                fontWeight:     600,
                textDecoration: 'none',
                letterSpacing:  '0.01em',
                boxShadow:      '0 4px 20px rgba(0,0,0,0.5)',
                transition:     'background 0.2s, transform 0.18s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4d6457'
                e.currentTarget.style.transform  = 'translateY(-2px)'
                e.currentTarget.style.boxShadow  = '0 8px 28px rgba(0,0,0,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#5b7566'
                e.currentTarget.style.transform  = 'translateY(0)'
                e.currentTarget.style.boxShadow  = '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Explore Coffee
            </a>
          </Motion.div>

        </div>

      </div>

      {/* ── Hero image — absolute, bleeds upward into navbar ── */}
      <div style={{
        position: 'absolute',
        top:      '-80px',
        right:    'clamp(0px, 3vw, 48px)',
        zIndex:   20,           /* above hero content, below navbar (z-50) */
      }}>
        <HeroCoffeeImage />
      </div>

      {/* Bottom-right decorative 4-point star */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
        animate={{ opacity: 1, scale: 1,   rotate: 0 }}
        transition={{ duration: 0.85, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:      'absolute',
          bottom:        '32px',
          right:         '32px',
          zIndex:        10,
          pointerEvents: 'none',
        }}
      >
        <Star4 size={46} />
      </Motion.div>
    </section>
  )
}

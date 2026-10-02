import { motion as Motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function SeamlessVideo({ src }) {
  const refA    = useRef(null)
  const refB    = useRef(null)
  const active  = useRef('A')   // which video is the primary right now
  const rafId   = useRef(null)

  useEffect(() => {
    const a = refA.current
    const b = refB.current

    a.play().catch(() => {})

    function tick() {
      const primary   = active.current === 'A' ? a : b
      const secondary = active.current === 'A' ? b : a

      if (primary.readyState >= 2 && primary.duration) {
        const remaining = primary.duration - primary.currentTime

        // 0.5 s before primary ends → cue secondary from frame 0
        if (remaining <= 0.5 && secondary.paused) {
          secondary.currentTime = 0
          secondary.play().catch(() => {})
        }

        // Swap when primary is done
        if (primary.ended || remaining <= 0.05) {
          primary.style.opacity   = '0'
          secondary.style.opacity = '1'
          active.current = active.current === 'A' ? 'B' : 'A'
          primary.pause()
        }
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId.current)
      a.pause()
      b.pause()
    }
  }, [src])

  const base = {
    width:        '100%',
    display:      'block',
    mixBlendMode: 'screen',
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Primary video */}
      <video ref={refA} src={src} muted playsInline preload="auto"
        style={{ ...base }} />
      {/* Secondary video — sits on top, invisible until swapped in */}
      <video ref={refB} src={src} muted playsInline preload="auto"
        style={{ ...base, position: 'absolute', top: 0, left: 0, opacity: 0, transition: 'opacity 0.15s' }} />
    </div>
  )
}

/* ── Background colour used throughout this section ──────────────────────────
   Tell your video editor to use this exact colour as the background:
   #1c0e04
   ─────────────────────────────────────────────────────────────────────────── */
const BG = '#1c0e04'

const leftFeatures = [
  {
    number:      '1',
    title:       'Premium Bean Quality',
    description: 'Our passion for coffee begins with selecting the finest beans. We pay attention to every detail so that each cup delivers exceptional quality and pleasure. We don\'t just pour coffee — we immerse you in a world of unforgettable flavours.',
  },
  {
    number:      '2',
    title:       'Atmosphere of Inspiration',
    description: 'Our cozy space is filled with warmth and comfort. Here, surrounded by attentive service, you can relax, enjoy a cup of coffee, and be inspired by pleasant conversation.',
  },
]

const rightFeatures = [
  {
    number:      '3',
    title:       'Personalised Approach to Every Guest',
    description: 'We craft coffee that reflects your preferences, creating unique drinks especially for you. With us it\'s not just coffee — it\'s a personalised experience, so every visit becomes a memorable occasion.',
  },
  {
    number:      '4',
    title:       'Professional Barista Team',
    description: 'Our baristas have extensive experience in brewing coffee and are ready to demonstrate all their exceptional talents in the art of coffee-making.',
  },
]

function fadeIn(delay = 0, x = 0) {
  return {
    initial:    { opacity: 0, x, y: x === 0 ? 20 : 0 },
    whileInView:{ opacity: 1, x: 0, y: 0 },
    viewport:   { once: true, margin: '-40px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

function FeatureItem({ number, title, description, side, delay }) {
  const isLeft = side === 'left'
  return (
    <Motion.div {...fadeIn(delay, isLeft ? -28 : 28)} style={{ position: 'relative' }}>

      {/* Large ghost number */}
      <div aria-hidden style={{
        position:      'absolute',
        top:           '-0.15em',
        left:          isLeft ? '-0.05em' : undefined,
        right:         isLeft ? undefined : '-0.05em',
        fontFamily:    '"Playfair Display", serif',
        fontWeight:    900,
        fontSize:      'clamp(72px, 8vw, 110px)',
        lineHeight:    1,
        color:         'rgba(140, 80, 20, 0.22)',
        userSelect:    'none',
        pointerEvents: 'none',
        letterSpacing: '-0.02em',
      }}>
        {number}
      </div>

      {/* Text */}
      <div style={{
        paddingLeft:  isLeft ? 'clamp(28px, 3.5vw, 52px)' : 0,
        paddingRight: isLeft ? 0 : 'clamp(28px, 3.5vw, 52px)',
        textAlign:    isLeft ? 'left' : 'right',
      }}>
        <h3 style={{
          fontFamily:   'Manrope, sans-serif',
          fontWeight:   700,
          fontSize:     'clamp(1rem, 1.6vw, 1.25rem)',
          color:        '#f0e2c8',
          margin:       '0 0 10px 0',
          lineHeight:   1.25,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize:   'clamp(12px, 1.1vw, 13.5px)',
          lineHeight: 1.72,
          color:      'rgba(195, 158, 110, 0.60)',
          margin:     0,
        }}>
          {description}
        </p>
      </div>
    </Motion.div>
  )
}

export default function Features() {
  return (
    <section style={{
      position:        'relative',
      backgroundColor: BG,
      padding:         'clamp(56px, 9vh, 100px) clamp(24px, 6vw, 72px)',
      overflowX:       'clip',
    }}>

      {/* Noise grain — no zIndex, no filter, no opacity on a positioned element
           to avoid creating stacking contexts that would trap mix-blend-mode */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:  '300px 300px',
        opacity:         0.07,
        pointerEvents:   'none',
      }} />

      {/* Content — NO zIndex here: adding zIndex creates a stacking context
           that traps mix-blend-mode and prevents it reaching the section bg */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin:   '0 auto',
      }}>

        {/* ── Section title ── */}
        <Motion.div
          {...fadeIn(0)}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}
        >
          <span style={{
            fontFamily:    'Manrope, sans-serif',
            fontWeight:    900,
            fontSize:      'clamp(1.2rem, 2.2vw, 1.7rem)',
            color:         '#f0e2c8',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            BRWW
          </span>
          <span style={{
            fontFamily:    'Manrope, sans-serif',
            fontWeight:    300,
            fontSize:      'clamp(1.2rem, 2.2vw, 1.7rem)',
            color:         'rgba(232,213,183,0.55)',
            letterSpacing: '0.08em',
            marginLeft:    '10px',
            textTransform: 'uppercase',
          }}>
            IS
          </span>
        </Motion.div>

        {/* ── 3-column layout ── */}
        <div style={{
          display:     'flex',
          alignItems:  'center',
          gap:         'clamp(20px, 3.5vw, 56px)',
        }}>

          {/* Left features */}
          <div style={{
            flex:          '1 1 0',
            display:       'flex',
            flexDirection: 'column',
            gap:           'clamp(36px, 5vh, 64px)',
          }}>
            {leftFeatures.map((f, i) => (
              <FeatureItem key={f.number} {...f} side="left" delay={0.10 + i * 0.12} />
            ))}
          </div>

          {/* ── Centre — video slot ──
               Plain div (NOT motion.div) so no opacity animation creates an
               isolated compositing layer that would block mix-blend-mode: screen */}
          <div
            style={{
              flexShrink:    0,
              width:         'clamp(280px, 34vw, 480px)',
              display:       'flex',
              flexDirection: 'column',
              alignItems:    'center',
              gap:           '28px',
              marginTop:     '-48px',
            }}
          >
            <SeamlessVideo src={import.meta.env.BASE_URL + "cup-video.mp4"} />

            {/* CTA button */}
            <Motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.18 }}
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                justifyContent: 'center',
                padding:        '13px 36px',
                borderRadius:   '999px',
                background:     'rgba(232,213,183,0.10)',
                border:         '1px solid rgba(232,213,183,0.30)',
                color:          '#e8d5b7',
                fontFamily:     'Inter, sans-serif',
                fontSize:       '14px',
                fontWeight:     500,
                textDecoration: 'none',
                letterSpacing:  '0.02em',
                whiteSpace:     'nowrap',
                transition:     'background 0.18s, border-color 0.18s',
                boxShadow:      '0 4px 20px rgba(0,0,0,0.35)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = 'rgba(232,213,183,0.17)'
                e.currentTarget.style.borderColor = 'rgba(232,213,183,0.50)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = 'rgba(232,213,183,0.10)'
                e.currentTarget.style.borderColor = 'rgba(232,213,183,0.30)'
              }}
            >
              Order Now
            </Motion.a>
          </div>

          {/* Right features */}
          <div style={{
            flex:          '1 1 0',
            display:       'flex',
            flexDirection: 'column',
            gap:           'clamp(36px, 5vh, 64px)',
          }}>
            {rightFeatures.map((f, i) => (
              <FeatureItem key={f.number} {...f} side="right" delay={0.10 + i * 0.12} />
            ))}
          </div>

        </div>
      </div>

      {/* Bottom-right 4-point star */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
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
            stroke="rgba(232,213,183,0.35)" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 4 L23 23 L4 23 L23 23 L23 42 L23 23 L42 23 L23 23 Z"
            fill="rgba(232,213,183,0.18)" />
        </svg>
      </Motion.div>

    </section>
  )
}

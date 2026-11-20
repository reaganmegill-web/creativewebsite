
import {
  motion as Motion,
  useMotionValue,
  useTransform,
  useSpring
} from 'framer-motion'
import { useRef } from 'react'

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -34 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
})

function HeroImage() {
  const ref = useRef(null)
  const x = useMotionValue(0)

  const rotateY = useSpring(
    useTransform(x, [-1, 1], [-6, 6]),
    { stiffness: 160, damping: 22 }
  )

  function handleMouseMove(e) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const center = rect.left + rect.width / 2

    x.set((e.clientX - center) / (rect.width / 2))
  }

  return (
    <Motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => x.set(0)}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      style={{
        width: '100%',
        maxWidth: '570px',
        perspective: '900px',
      }}
    >
      <Motion.img
        src={import.meta.env.BASE_URL + 'hero-coffee.png'}
        alt="Coffee drinks featured in the website concept"
        draggable={false}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
          rotateY,
          filter:
            'drop-shadow(0 25px 35px rgba(0,0,0,0.35))',
        }}
      />
    </Motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="corner-hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background:
          'radial-gradient(ellipse at 80% 40%, #513321 0%, #28170e 65%, #1c1008 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        className="corner-hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '140px 6% 90px',
          display: 'grid',
          gridTemplateColumns:
            'minmax(0, 1fr) minmax(0, 1.1fr)',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <div>
          <Motion.div
            {...fadeLeft(0.1)}
            style={{ marginBottom: '26px' }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '9px 18px',
                borderRadius: '999px',
                background: 'rgba(232,213,183,0.1)',
                border:
                  '1px solid rgba(232,213,183,0.25)',
                color: '#d9c3a6',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Coffee, Good Food & Good Company
            </span>
          </Motion.div>

          <Motion.h1
            {...fadeLeft(0.25)}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#f4e7d4',
              margin: '0 0 25px',
            }}
          >
            Meet Me
            <br />
            at the{' '}
            <span style={{ color: '#d6a96e' }}>
              Corner.
            </span>
          </Motion.h1>

          <Motion.p
            {...fadeLeft(0.4)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              lineHeight: 1.8,
              color: '#cbb49b',
              maxWidth: '480px',
              marginBottom: '36px',
            }}
          >
            Your neighborhood spot for great coffee,
            fresh breakfast, delicious sandwiches,
            and everything in between. Whether you're
            grabbing something on the go or staying
            awhile, there's always a reason to meet
            at The Corner Market.
          </Motion.p>

          <Motion.div {...fadeLeft(0.55)}>
            <a
              href="#menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px 30px',
                borderRadius: '999px',
                background: '#d6a96e',
                color: '#24150b',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow:
                  '0 6px 24px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  '#e8c28f'
                e.currentTarget.style.transform =
                  'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  '#d6a96e'
                e.currentTarget.style.transform =
                  'translateY(0)'
              }}
            >
              Explore Our Menu ↗
            </a>
          </Motion.div>
        </div>

        <HeroImage />
      </div>

      <style>{`
        @media (max-width: 850px) {
          .corner-hero-content {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 140px 7% 65px !important;
            gap: 35px !important;
          }

          .corner-hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .corner-hero-content > div:last-child {
            margin: 0 auto;
            max-width: 480px !important;
          }
        }

        @media (max-width: 480px) {
          .corner-hero-content h1 {
            font-size: 3.1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

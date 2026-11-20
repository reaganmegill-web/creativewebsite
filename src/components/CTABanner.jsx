
import { motion as Motion } from 'framer-motion'
import {
  MapPin,
  Coffee,
  ArrowUpRight,
  Navigation
} from 'lucide-react'

export default function CTABanner() {
  return (
    <section
      id="visit"
      style={{
        position: 'relative',
        background: '#24150d',
        padding: '100px 6% 35px',
        overflow: 'hidden',
        scrollMarginTop: '90px',
      }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(214,169,110,0.12), transparent 70%)',
          top: '-180px',
          right: '-150px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Main CTA card */}
        <Motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              'linear-gradient(135deg, #493022, #342116)',
            border: '1px solid rgba(232,213,183,0.18)',
            borderRadius: '26px',
            padding: 'clamp(30px, 6vw, 70px)',
            textAlign: 'center',
            boxShadow: '0 15px 45px rgba(0,0,0,0.2)',
          }}
        >
          <Motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              background: 'rgba(214,169,110,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
            }}
          >
            <Coffee size={30} color="#d6a96e" />
          </Motion.div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#d6a96e',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Come Say Hello
          </p>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(36px, 5vw, 62px)',
              lineHeight: 1.15,
              color: '#f2e4cf',
              margin: '0 0 22px',
            }}
          >
            See You at the Corner.
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#cbb49b',
              fontSize: '16px',
              lineHeight: 1.8,
              maxWidth: '540px',
              margin: '0 auto 32px',
            }}
          >
            Whether you're grabbing your morning coffee,
            meeting friends for lunch, or taking a break
            from studying, we'd love to see you.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Corner+Market+Fairfield+CT"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '15px 25px',
                borderRadius: '999px',
                background: '#d6a96e',
                color: '#24150d',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              <Navigation size={17} />
              Get Directions
            </a>

            <a
              href="https://www.thecornermarketct.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '15px 25px',
                borderRadius: '999px',
                border: '1px solid rgba(232,213,183,0.4)',
                color: '#f2e4cf',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              Official Website
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
              color: '#cbb49b',
              fontSize: '14px',
            }}
          >
            <MapPin size={17} color="#d6a96e" />
            Fairfield, Connecticut
          </div>
        </Motion.div>

        {/* Footer */}
        <footer
          style={{
            marginTop: '65px',
            paddingTop: '25px',
            borderTop: '1px solid rgba(232,213,183,0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 800,
                color: '#f2e4cf',
                fontSize: '15px',
                margin: '0 0 6px',
              }}
            >
              THE CORNER MARKET
            </p>
            <p
              style={{
                color: '#9e876f',
                fontSize: '12px',
                margin: 0,
              }}
            >
              Fairfield, Connecticut
            </p>
          </div>

          <p
            style={{
              color: '#9e876f',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              margin: 0,
            }}
          >
            Unofficial student website concept.
            Not affiliated with The Corner Market.
          </p>
        </footer>
      </div>
    </section>
  )
}

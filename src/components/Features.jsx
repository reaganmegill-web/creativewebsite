
import { motion as Motion } from 'framer-motion'
import {
  Coffee,
  Sandwich,
  Users,
  Heart,
  ArrowUpRight
} from 'lucide-react'

const features = [
  {
    number: '01',
    title: 'Your Coffee Stop',
    description:
      'Whether it is your morning coffee or an afternoon pick-me-up, there is always a reason to stop by.',
    Icon: Coffee,
  },
  {
    number: '02',
    title: 'Breakfast & Lunch',
    description:
      'From breakfast sandwiches to lunch favorites, find something delicious for every part of your day.',
    Icon: Sandwich,
  },
  {
    number: '03',
    title: 'A Place to Gather',
    description:
      'Meet up with friends, take a study break, or enjoy a little time out of your day.',
    Icon: Users,
  },
  {
    number: '04',
    title: 'Neighborhood Feel',
    description:
      'A local Fairfield spot where good food, coffee, and community come together.',
    Icon: Heart,
  },
]

function FeatureCard({ feature, index }) {
  const Icon = feature.Icon

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      style={{
        position: 'relative',
        padding: '32px',
        borderRadius: '22px',
        background: '#382419',
        border: '1px solid rgba(232,213,183,0.15)',
        overflow: 'hidden',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '12px',
          right: '20px',
          fontFamily: '"Playfair Display", serif',
          fontSize: '64px',
          fontWeight: 700,
          color: 'rgba(214,169,110,0.12)',
        }}
      >
        {feature.number}
      </span>

      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '15px',
          background: 'rgba(214,169,110,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Icon size={25} color="#d6a96e" />
      </div>

      <h3
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '20px',
          color: '#f0e2c8',
          margin: '0 0 12px',
        }}
      >
        {feature.title}
      </h3>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          lineHeight: 1.8,
          color: '#c6ac91',
          margin: 0,
        }}
      >
        {feature.description}
      </p>
    </Motion.div>
  )
}

export default function Features() {
  return (
    <section
      id="about"
      style={{
        background: '#1c0e04',
        padding: '110px 6%',
        scrollMarginTop: '90px',
      }}
    >
      <div
        style={{
          maxWidth: '1150px',
          margin: '0 auto',
        }}
      >
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '55px',
          }}
        >
          <p
            style={{
              color: '#d6a96e',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            A Little About Us
          </p>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.15,
              color: '#f0e2c8',
              margin: '0 0 20px',
            }}
          >
            More Than Just Coffee.
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#c6ac91',
              fontSize: '16px',
              lineHeight: 1.8,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Coffee runs, breakfast dates, lunch breaks,
            and afternoons spent catching up.
            The Corner Market is a neighborhood spot
            for all the little moments in between.
          </p>
        </Motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '20px',
            marginBottom: '50px',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Motion.a
            href="https://www.thecornermarketct.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '999px',
              background: '#d6a96e',
              color: '#24150d',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Visit The Corner Market
            <ArrowUpRight size={18} />
          </Motion.a>
        </div>
      </div>
    </section>
  )
}


import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Coffee, Sandwich, EggFried, ArrowUpRight } from 'lucide-react'

const categories = [
  { id: 'drinks', label: 'Coffee & Drinks', icon: Coffee },
  { id: 'breakfast', label: 'Breakfast', icon: EggFried },
  { id: 'lunch', label: 'Lunch', icon: Sandwich },
]

const items = [
  {
    id: 'cold-brew',
    name: 'House-Made Cold Brew',
    category: 'drinks',
    description: 'A refreshing coffee shop favorite.',
    emoji: '☕',
  },
  {
    id: 'matcha',
    name: 'Iced Strawberry Matcha',
    category: 'drinks',
    description: 'A colorful, refreshing matcha drink.',
    emoji: '🍵',
  },
  {
    id: 'corner-deli',
    name: 'The Corner Deli',
    category: 'breakfast',
    description: 'A breakfast sandwich to start your day.',
    emoji: '🥯',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    category: 'breakfast',
    description: 'A fresh breakfast option.',
    emoji: '🥑',
  },
  {
    id: 'bronson-blt',
    name: 'Bronson BLT',
    category: 'lunch',
    description: 'A Corner Market sandwich selection.',
    emoji: '🥪',
  },
  {
    id: 'timmy-cutlets',
    name: 'Timmy Cutlets',
    category: 'lunch',
    description: 'One of the market’s named sandwiches.',
    emoji: '🥖',
  },
]

function MenuCard({ item, index }) {
  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      whileHover={{ y: -7 }}
      style={{
        background: '#382419',
        border: '1px solid rgba(232,213,183,0.15)',
        borderRadius: '22px',
        padding: '28px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '260px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: '105px',
          height: '105px',
          borderRadius: '50%',
          background: '#4b3224',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '54px',
          marginBottom: '22px',
        }}
      >
        {item.emoji}
      </div>

      <h3
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '24px',
          color: '#f2e4cf',
          margin: '0 0 12px',
        }}
      >
        {item.name}
      </h3>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          color: '#c6ac91',
          fontSize: '14px',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {item.description}
      </p>
    </Motion.article>
  )
}

export default function Menu() {
  const [selected, setSelected] = useState('drinks')

  const filteredItems = items.filter(
    (item) => item.category === selected
  )

  return (
    <section
      id="menu"
      style={{
        background: '#24150d',
        padding: '110px 6% 120px',
        scrollMarginTop: '90px',
      }}
    >
      <div
        style={{
          maxWidth: '1150px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            color: '#d6a96e',
            fontSize: '12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '15px',
          }}
        >
          The Corner Market Menu
        </Motion.p>

        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#f2e4cf',
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1.15,
            marginBottom: '18px',
          }}
        >
          A Little Something
          <br />
          for Everyone.
        </h2>

        <p
          style={{
            color: '#c6ac91',
            fontSize: '15px',
            lineHeight: 1.8,
            maxWidth: '560px',
            margin: '0 auto 45px',
          }}
        >
          From your morning coffee to your favorite
          lunch order, explore a few of the things
          you'll find at The Corner Market.
        </p>

        {/* Interactive Category Buttons */}
        <div
          role="group"
          aria-label="Menu categories"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '55px',
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selected === category.id

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelected(category.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '13px 22px',
                  borderRadius: '999px',
                  border: isActive
                    ? '1px solid #d6a96e'
                    : '1px solid rgba(232,213,183,0.2)',
                  background: isActive
                    ? '#d6a96e'
                    : 'transparent',
                  color: isActive
                    ? '#24150d'
                    : '#e8d5b7',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={17} />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Animated Product Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '22px',
            maxWidth: '750px',
            margin: '0 auto 50px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        <a
          href="https://www.thecornermarketct.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '15px 28px',
            borderRadius: '999px',
            border: '1px solid #d6a96e',
            color: '#e8d5b7',
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          Visit the Official Website
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  )
}

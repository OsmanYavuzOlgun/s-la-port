import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.displayName} home`}>
        <span className="brand__text">{profile.displayName}</span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      <nav className={isOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar

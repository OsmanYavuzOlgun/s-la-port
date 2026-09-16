import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.displayName} ${t('nav.home')}`}>
        <span className="brand__text">{profile.displayName}</span>
      </a>

      <div className="site-header__actions">
        <nav className={isOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label={t('nav.primary')}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="language-switcher" aria-label={t('language.selector')}>
          <button
            className={language === 'en' ? 'language-switcher__button language-switcher__button--active' : 'language-switcher__button'}
            type="button"
            aria-label={t('language.switchToEnglish')}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            className={language === 'tr' ? 'language-switcher__button language-switcher__button--active' : 'language-switcher__button'}
            type="button"
            aria-label={t('language.switchToTurkish')}
            aria-pressed={language === 'tr'}
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? t('nav.close') : t('nav.open')}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar

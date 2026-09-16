import { Download, ExternalLink } from 'lucide-react'
import { portfolioUrl, profile } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">{profile.displayName}</h1>
        <p className="hero__title">{t('hero.title')}</p>
        <p className="hero__meta">{profile.location}</p>
        <p className="hero__intro">{t('hero.intro')}</p>
        <div className="hero__actions" aria-label={t('hero.actionsLabel')}>
          <a className="button button--primary" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            {t('actions.viewPortfolio')}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href={portfolioUrl} download>
            <Download size={16} aria-hidden="true" />
            {t('actions.downloadPortfolio')}
          </a>
          <a
            className="text-link"
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('actions.behance')}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

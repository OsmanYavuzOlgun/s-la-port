import { Download, ExternalLink } from 'lucide-react'
import { portfolioUrl, profile } from '../data/portfolio.js'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">{profile.displayName}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__meta">{profile.location}</p>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions" aria-label="Portfolio actions">
          <a className="button button--primary" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            View Portfolio
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href={portfolioUrl} download>
            <Download size={16} aria-hidden="true" />
            Download Portfolio
          </a>
          <a
            className="text-link"
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

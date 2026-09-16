import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { getPortfolioPageUrl, portfolioUrl, projects } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Work() {
  const trackRef = useRef(null)
  const { t } = useLanguage()

  const scrollTrack = (direction) => {
    const track = trackRef.current
    if (!track) return
    const distance = track.clientWidth * 0.85
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        title={t('sections.work.title')}
        label={t('sections.work.label')}
        actions={
          <a className="text-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            {t('actions.viewPortfolio')}
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        }
      >
        {t('sections.work.description')}
      </SectionHeading>

      <div className="work__controls" aria-label={t('sections.work.controls')}>
        <button className="icon-button" type="button" aria-label={t('sections.work.previous')} onClick={() => scrollTrack(-1)}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="icon-button" type="button" aria-label={t('sections.work.next')} onClick={() => scrollTrack(1)}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="project-track" ref={trackRef} tabIndex="0" aria-label={t('sections.work.categories')}>
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div
              className={`project-card__art project-card__art--${project.tone}`}
              role="img"
              aria-label={`${t(project.titleKey)} ${t('accessibility.projectArtwork')}`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{t(project.titleKey)}</strong>
            </div>
            <div className="project-card__body">
              <p>{t(project.categoryKey)}</p>
              <h3>
                <a
                  className="project-card__title-link"
                  href={getPortfolioPageUrl(project.portfolioPage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(project.titleKey)}
                </a>
              </h3>
              <span>{t(project.descriptionKey)}</span>
              <a
                className="project-card__view-link"
                href={getPortfolioPageUrl(project.portfolioPage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('actions.view')}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work

import { Award, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { certificates, education } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function About() {
  const { t } = useLanguage()

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" title={t('sections.about.title')} label={t('sections.about.label')}>
        {t('about.text')}
      </SectionHeading>

      <div className="about__grid">
        <article className="info-panel info-panel--large">
          <h3>{t('about.approachTitle')}</h3>
          <div className="approach-list">
            {t('about.approach').map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="info-panel">
          <div className="panel-title">
            <GraduationCap size={20} aria-hidden="true" />
            <h3>{t('about.educationTitle')}</h3>
          </div>
          <div className="timeline-list">
            {education.map((item) => (
              <div className={item.featured ? 'timeline-item timeline-item--featured' : 'timeline-item'} key={item.school}>
                <span>{item.dates}</span>
                <h4>{item.school}</h4>
                <p>{t(item.programKey)}</p>
                {item.noteKey ? <strong>{t(item.noteKey)}</strong> : null}
              </div>
            ))}
          </div>
        </article>

        <article className="info-panel">
          <div className="panel-title">
            <Award size={20} aria-hidden="true" />
            <h3>{t('about.certificatesTitle')}</h3>
          </div>
          <div className="certificate-list">
            {certificates.map((item) => (
              <div className="certificate" key={item.titleKey}>
                <h4>{t(item.titleKey)}</h4>
                <p>{item.issuer}</p>
                <span>{item.dates}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About

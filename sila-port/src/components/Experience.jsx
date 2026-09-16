import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Experience() {
  const [selected, setSelected] = useState(0)
  const activeExperience = experience[selected]
  const { t } = useLanguage()

  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        title={t('sections.experience.title')}
        label={t('sections.experience.label')}
      >
        {t('sections.experience.description')}
      </SectionHeading>

      <div className="experience__layout">
        <div className="experience__tabs" role="tablist" aria-label={t('sections.experience.listLabel')}>
          {experience.map((item, index) => (
            <button
              className={selected === index ? 'experience-tab experience-tab--active' : 'experience-tab'}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="experience-panel"
              id={`experience-tab-${index}`}
              key={item.company}
              onClick={() => setSelected(index)}
            >
              <span>{item.company}</span>
              <small>{item.dates}</small>
            </button>
          ))}
        </div>

        <article
          className="experience-card"
          id="experience-panel"
          role="tabpanel"
          aria-labelledby={`experience-tab-${selected}`}
        >
          <div>
            <p>{activeExperience.dates}</p>
            <h3>{t(activeExperience.roleKey)}</h3>
            <span>{activeExperience.company}</span>
          </div>
          <p className="experience-card__summary">{t(activeExperience.summaryKey)}</p>
          <ul>
            {activeExperience.pointKeys.map((pointKey) => (
              <li key={pointKey}>
                <ArrowUpRight size={16} aria-hidden="true" />
                {t(pointKey)}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience

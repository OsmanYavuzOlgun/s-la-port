import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/portfolio.js'

function Experience() {
  const [selected, setSelected] = useState(0)
  const activeExperience = experience[selected]

  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        kicker="Experience"
        title="Experience"
        label="Selected Roles"
      >
        Recent roles combining graphic design, social content, campaign visuals and production-ready materials.
      </SectionHeading>

      <div className="experience__layout">
        <div className="experience__tabs" role="tablist" aria-label="Experience list">
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
            <h3>{activeExperience.role}</h3>
            <span>{activeExperience.company}</span>
          </div>
          <p className="experience-card__summary">{activeExperience.summary}</p>
          <ul>
            {activeExperience.points.map((point) => (
              <li key={point}>
                <ArrowUpRight size={16} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience

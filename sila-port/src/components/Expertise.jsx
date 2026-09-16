import { Palette } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { expertise, tools } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Expertise() {
  const { t } = useLanguage()

  return (
    <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
      <SectionHeading
        id="expertise-title"
        title={t('sections.expertise.title')}
        label={t('sections.expertise.label')}
      >
        {t('sections.expertise.description')}
      </SectionHeading>

      <div className="expertise__grid">
        {expertise.map((item) => (
          <article className="expertise-card" key={item.id}>
            <Palette size={22} aria-hidden="true" />
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.descriptionKey)}</p>
          </article>
        ))}
      </div>

      <div className="tool-panel" aria-label={t('tools.label')}>
        <h3>{t('tools.title')}</h3>
        <div className="tool-grid">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

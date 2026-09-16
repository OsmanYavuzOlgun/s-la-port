import { Palette } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { expertise, tools } from '../data/portfolio.js'

function Expertise() {
  return (
    <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
      <SectionHeading
        id="expertise-title"
        kicker="Expertise"
        title="Expertise"
        label="Disciplines"
      >
        A compact view of Emine&apos;s core design areas and software knowledge.
      </SectionHeading>

      <div className="expertise__grid">
        {expertise.map((item) => (
          <article className="expertise-card" key={item.title}>
            <Palette size={22} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="tool-panel" aria-label="Design software">
        <h3>Software</h3>
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

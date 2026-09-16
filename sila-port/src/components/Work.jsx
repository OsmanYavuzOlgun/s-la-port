import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { portfolioUrl, projects } from '../data/portfolio.js'

function Work() {
  const trackRef = useRef(null)

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
        kicker="Selected Work"
        title="Selected Work"
        label="Portfolio"
        actions={
          <a className="text-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            View Portfolio
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        }
      >
        A focused overview of Emine&apos;s portfolio categories, from social media visuals to identity, editorial and product work.
      </SectionHeading>

      <div className="work__controls" aria-label="Selected work carousel controls">
        <button className="icon-button" type="button" aria-label="Previous work cards" onClick={() => scrollTrack(-1)}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="icon-button" type="button" aria-label="Next work cards" onClick={() => scrollTrack(1)}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="project-track" ref={trackRef} tabIndex="0" aria-label="Selected work categories">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div
              className={`project-card__art project-card__art--${project.tone}`}
              role="img"
              aria-label={`${project.title} visual artwork preview`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.title}</strong>
            </div>
            <div className="project-card__body">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work

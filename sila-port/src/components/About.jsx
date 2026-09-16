import { Award, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { certificates, education, profile } from '../data/portfolio.js'

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" title="About" label="Profile">
        {profile.about}
      </SectionHeading>

      <div className="about__grid">
        <article className="info-panel info-panel--large">
          <h3>Approach</h3>
          <div className="approach-list">
            <span>Creative & Strategic Design Approach</span>
            <span>Branding</span>
            <span>Visual Identity</span>
            <span>Digital Experience</span>
            <span>Adapting to design trends and technologies</span>
          </div>
        </article>

        <article className="info-panel">
          <div className="panel-title">
            <GraduationCap size={20} aria-hidden="true" />
            <h3>Education</h3>
          </div>
          <div className="timeline-list">
            {education.map((item) => (
              <div className={item.featured ? 'timeline-item timeline-item--featured' : 'timeline-item'} key={item.school}>
                <span>{item.dates}</span>
                <h4>{item.school}</h4>
                <p>{item.program}</p>
                {item.note ? <strong>{item.note}</strong> : null}
              </div>
            ))}
          </div>
        </article>

        <article className="info-panel">
          <div className="panel-title">
            <Award size={20} aria-hidden="true" />
            <h3>Certificates</h3>
          </div>
          <div className="certificate-list">
            {certificates.map((item) => (
              <div className="certificate" key={item.title}>
                <h4>{item.title}</h4>
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

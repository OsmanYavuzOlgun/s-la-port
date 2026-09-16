import { ExternalLink, Mail, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { profile } from '../data/portfolio.js'

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        kicker="Contact"
        title="Contact"
        label="Get in Touch"
      >
        Feel free to get in touch.
      </SectionHeading>

      <div className="contact__actions">
        <a className="contact-link contact-link--primary" href={`mailto:${profile.email}`}>
          <Mail size={20} aria-hidden="true" />
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a className="contact-link" href={profile.behance} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} aria-hidden="true" />
          <span>Behance</span>
          <strong>behance.net/slatopal2</strong>
        </a>
        <a className="contact-link" href={profile.phoneHref}>
          <Phone size={20} aria-hidden="true" />
          <span>Phone</span>
          <strong>{profile.phone}</strong>
        </a>
      </div>
    </section>
  )
}

export default Contact

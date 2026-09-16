import { ExternalLink, Mail, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { profile } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Contact() {
  const { t } = useLanguage()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        title={t('sections.contact.title')}
        label={t('sections.contact.label')}
      >
        {t('sections.contact.description')}
      </SectionHeading>

      <div className="contact__actions">
        <a className="contact-link contact-link--primary" href={`mailto:${profile.email}`}>
          <Mail size={20} aria-hidden="true" />
          <span>{t('contact.email')}</span>
          <strong>{profile.email}</strong>
        </a>
        <a className="contact-link" href={profile.behance} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} aria-hidden="true" />
          <span>{t('contact.behance')}</span>
          <strong>behance.net/slatopal2</strong>
        </a>
        <a className="contact-link" href={profile.phoneHref}>
          <Phone size={20} aria-hidden="true" />
          <span>{t('contact.phone')}</span>
          <strong>{profile.phone}</strong>
        </a>
      </div>
    </section>
  )
}

export default Contact

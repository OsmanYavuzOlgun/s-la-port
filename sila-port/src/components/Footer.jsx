import { profile } from '../data/portfolio.js'
import { useLanguage } from '../i18n/useLanguage.js'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.nativeName}. {t('footer.rights')}
      </p>
    </footer>
  )
}

export default Footer

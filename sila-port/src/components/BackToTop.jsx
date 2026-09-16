import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 380)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={isVisible ? 'back-to-top back-to-top--visible' : 'back-to-top'}
      type="button"
      aria-label={t('accessibility.backToTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  )
}

export default BackToTop

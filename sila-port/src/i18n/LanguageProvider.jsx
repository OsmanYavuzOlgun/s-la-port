import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './language-context.js'
import { defaultLanguage, supportedLanguages, translations } from './translations.js'

const storageKey = 'portfolio-language'

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage

  const savedLanguage = window.localStorage.getItem(storageKey)
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage
}

const getValueByPath = (source, path) =>
  path.split('.').reduce((value, segment) => {
    if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
      return value[segment]
    }

    return undefined
  }, source)

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = useCallback((nextLanguage) => {
    if (!supportedLanguages.includes(nextLanguage)) return

    setLanguageState(nextLanguage)
    window.localStorage.setItem(storageKey, nextLanguage)
  }, [])

  const t = useCallback(
    (key) => {
      const value = getValueByPath(translations[language], key)
      const fallback = getValueByPath(translations[defaultLanguage], key)

      return value ?? fallback ?? key
    },
    [language],
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t('meta.title')

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', t('meta.description'))
    }

    const metadata = [
      ['meta[property="og:title"]', t('meta.title')],
      ['meta[property="og:description"]', t('meta.description')],
      ['meta[name="twitter:title"]', t('meta.title')],
      ['meta[name="twitter:description"]', t('meta.description')],
    ]

    metadata.forEach(([selector, content]) => {
      const element = document.querySelector(selector)
      if (element) {
        element.setAttribute('content', content)
      }
    })
  }, [language, t])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider

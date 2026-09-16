import { createContext } from 'react'
import { defaultLanguage } from './translations.js'

export const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
})

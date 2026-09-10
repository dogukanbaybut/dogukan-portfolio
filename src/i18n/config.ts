import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translation.json'
import tr from '../locales/tr/translation.json'

export type Lang = 'en' | 'tr'

const STORAGE_KEY = 'lang'

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'tr'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'tr') return stored

  return 'tr'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: detectInitialLang(),
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  window.localStorage.setItem(STORAGE_KEY, lng)
})

document.documentElement.lang = i18n.language

export default i18n

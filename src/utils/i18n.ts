import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';
import translationPT from '../locales/pt/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  pt: { translation: translationPT },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    supportedLngs: ['en', 'es', 'pt'],
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18n;

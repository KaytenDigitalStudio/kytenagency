import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

//Localization
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'cz'],
    debug: true,
    fallbackLng: 'en',
    detection: {
      //   order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   loadPath: 'public/assets/locales/{{lng}}/translation.json',
    // },
  });

export default i18n;

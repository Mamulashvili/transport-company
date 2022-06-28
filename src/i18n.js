import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationKa from './assets/locale/ka.json';
import translationEn from './assets/locale/en.json';
import translationDe from './assets/locale/de.json';
import translationRu from './assets/locale/ru.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      de: {
        translation: translationDe
      },
      ka: {
        translation: translationKa
      },
      ru: {
        translation: translationRu
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
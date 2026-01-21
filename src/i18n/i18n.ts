import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enAbout from "./en/about.json";
import swAbout from "./sw/about.json";
// You'll add more page translations as you create them
import enCommon from "./en/common.json";
import swCommon from "./sw/common.json";
import enVocations from "./en/vocations.json";
import swVocations from "./sw/vocations.json";
// import other page translations similarly

// Define translations for each language
const resources = {
  en: {
    translation: {
      about: enAbout,
      common: enCommon,
      Vocations: enVocations,
      // Add other pages here as you create them
      // home: enHome,
      // vocations: enVocations,
      // ministries: enMinistries,
    }
  },
  sw: {
    translation: {
      about: swAbout,
      common: swCommon,
      vocations: swVocations,
      // home: swHome,
      // vocations: swVocations,
      // ministries: swMinistries,
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      lookupLocalStorage: "cicm_language", // Custom key for your app
    },
  });

export default i18n;
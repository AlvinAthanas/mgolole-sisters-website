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
import enMinistries from "./en/ministries.json";
import swMinistries from "./sw/ministries.json";
import enProjects from "./en/projects.json";
import swProjects from "./sw/projects.json";
import enContact from "./en/contact.json";
import swContact from "./sw/contact.json";
import enSupport from "./en/support.json";
import swSupport from "./sw/support.json";
import enMedia from "./en/media.json";
import swMedia from "./sw/media.json";
import enEvents from "./en/events.json";
import swEvents from "./sw/events.json";

// Define translations for each language
const resources = {
  en: {
    translation: {
      about: enAbout,
      common: enCommon,
      vocations: enVocations,
      ministries: enMinistries,
      projects: enProjects,
      contact: enContact,
      support: enSupport,
      media: enMedia,
      events: enEvents,

    }
  },
  sw: {
    translation: {
      about: swAbout,
      common: swCommon,
      vocations: swVocations,
      ministries: swMinistries,
      projects: swProjects,
      contact: swContact,
      support: swSupport,
      media: swMedia,
      events: swEvents,

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
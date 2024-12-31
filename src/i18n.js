import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend) // Allows loading translations from an external source (optional)
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Connects i18n to React
  .init({
    fallbackLng: "en", // Default language
    supportedLngs: ["en", "ru"], // Supported languages
    debug: false, // Enable debugging for development

    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
  loadPath: "/locales/{{lng}}/translation.json", // Path to JSON files
}, 
  });

export default i18n;


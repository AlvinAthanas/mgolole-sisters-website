import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import i18n from "../i18n/i18n";

export type Language = "en" | "sw";

// Language configuration
const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    direction: "ltr" as const,
  },
  sw: {
    code: "sw",
    name: "Swahili",
    direction: "ltr" as const,
  },
} as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languageLoaded: boolean;
  currentLanguage: typeof LANGUAGES[Language];
  availableLanguages: typeof LANGUAGES;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANGUAGE_STORAGE_KEY = "cicm_language";

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage = "en",
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    
    // Validate stored language
    if (storedLang && (storedLang === "en" || storedLang === "sw")) {
      setLanguageState(storedLang as Language);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "sw") {
        setLanguageState("sw");
      }
    }
    
    setLanguageLoaded(true);
    setMounted(true);
  }, []);

  // Apply language to i18n + localStorage
  useEffect(() => {
    if (mounted) {
      i18n.changeLanguage(language);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      
      // Update HTML lang attribute for accessibility
      document.documentElement.lang = language;
      
      // Update HTML direction if needed (RTL support)
      document.documentElement.dir = LANGUAGES[language].direction;
    }
  }, [language, mounted]);

  // Change language
  const setLanguage = (lang: Language) => {
    if (lang !== language) {
      setLanguageState(lang);
    }
  };

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    languageLoaded,
    currentLanguage: LANGUAGES[language],
    availableLanguages: LANGUAGES,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

// Helper hook for components that need language-specific content
export const useTranslation = () => {
  const { language } = useLanguage();
  
  return {
    t: (key: string, options?: any) => {
      // Simple translation helper - you can expand this
      return i18n.t(key, { lng: language, ...options });
    },
    language,
  };
};
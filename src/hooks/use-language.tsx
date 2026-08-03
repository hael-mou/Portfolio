/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
  tArray: (key: string) => any[];
  isReady: boolean;
  hasPreferenceSet: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, any> = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to English ('en') on the server to prevent hydration mismatch.
  const [language, setLanguageState] = useState<Language>("en");
  const [isReady, setIsReady] = useState(false);
  const [hasPreferenceSet, setHasPreferenceSet] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("preferred_language");
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
      setHasPreferenceSet(true);
    } else {
      setHasPreferenceSet(false);
    }
    setIsReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred_language", lang);
    setLanguageState(lang);
    setHasPreferenceSet(true);
  };

  const tArray = useCallback(
    (key: string): any[] => {
      const currentTranslations = translations[language] || translations["en"];
      const value = key.split(".").reduce((acc, part) => {
        return acc && acc[part] !== undefined ? acc[part] : null;
      }, currentTranslations);

      if (Array.isArray(value)) {
        return value;
      }

      const fallbackValue = key.split(".").reduce((acc, part) => {
        return acc && acc[part] !== undefined ? acc[part] : null;
      }, translations["en"]);

      if (Array.isArray(fallbackValue)) {
        return fallbackValue;
      }

      return [];
    },
    [language],
  );

  const t = useCallback(
    (key: string, variables?: Record<string, string | number>): string => {
      const currentTranslations = translations[language] || translations["en"];

      // Resolve nested dot notation keys: e.g. "hero.description"
      const value = key.split(".").reduce((acc, part) => {
        return acc && acc[part] !== undefined ? acc[part] : null;
      }, currentTranslations);

      if (value === null || typeof value !== "string") {
        // Fallback to English if key is missing or not a string
        const fallbackValue = key.split(".").reduce((acc, part) => {
          return acc && acc[part] !== undefined ? acc[part] : null;
        }, translations["en"]);

        if (fallbackValue && typeof fallbackValue === "string") {
          return replaceVariables(fallbackValue, variables);
        }
        return key;
      }

      return replaceVariables(value, variables);
    },
    [language],
  );

  // Helper function to replace variables in string (e.g. {year} -> 2026)
  const replaceVariables = (str: string, vars?: Record<string, string | number>): string => {
    if (!vars) return str;
    let result = str;
    Object.entries(vars).forEach(([k, v]) => {
      result = result.replaceAll(`{${k}}`, String(v));
    });
    return result;
  };

  // Dynamically update document titles and SEO tags on client side
  useEffect(() => {
    if (!isReady) return;

    // HTML lang attribute
    document.documentElement.setAttribute("lang", language);

    // Dynamic Title
    const titleVal = t("meta.title");
    if (titleVal && titleVal !== "meta.title") {
      document.title = titleVal;
    }

    // Dynamic Description
    const descVal = t("meta.description");
    if (descVal && descVal !== "meta.description") {
      document.querySelector('meta[name="description"]')?.setAttribute("content", descVal);
    }

    // Dynamic OpenGraph titles and descriptions
    const ogTitle = t("meta.ogTitle");
    if (ogTitle && ogTitle !== "meta.ogTitle") {
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", ogTitle);
    }
    const ogDesc = t("meta.ogDescription");
    if (ogDesc && ogDesc !== "meta.ogDescription") {
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", ogDesc);
    }
    const twTitle = t("meta.twitterTitle");
    if (twTitle && twTitle !== "meta.twitterTitle") {
      document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", twTitle);
    }
    const twDesc = t("meta.twitterDescription");
    if (twDesc && twDesc !== "meta.twitterDescription") {
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", twDesc);
    }
  }, [language, isReady, t]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, tArray, isReady, hasPreferenceSet }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

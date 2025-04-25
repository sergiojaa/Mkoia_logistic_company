// src/utils/translate.ts
import translations from '../../translations.json'
import { useLanguage } from "../context/LanguageContext";

type Translations = {
    [key: string]: {
        en: string;
        ge: string;
    };
};

const typedTranslations: Translations = translations;

export const useTranslate = () => {
    const { language } = useLanguage();

    const t = (key: keyof typeof typedTranslations): string => {
        return String(typedTranslations[key]?.[language]) || String(key);
    };

    return t;
};

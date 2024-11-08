import en from '../../public/locales/en/translation.json';
import es from '../../public/locales/es/translation.json';

const translations = { en, es };

export const loadTranslations = (locale) => {
    if (!translations[locale]) {
        throw new Error(`No translations found for locale: ${locale}`);
    }
    return translations[locale];
};

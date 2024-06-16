export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE = "fr";
export type Locale = (typeof LOCALES)[number];
export interface LocaleParams {
    params: { locale: Locale };
}

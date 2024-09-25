export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE = "fr";

/**
 * `Locale` is a TypeScript type representing the different locales supported by the application.
 * It is derived from the `LOCALES` constant, ensuring that any variable of type `Locale` can only
 * be one of the values specified in `LOCALES`. This type is crucial for implementing internationalization
 * (i18n) features within the application, as it allows for type-safe operations on locales.
 *
 * The primary use of the `Locale` type is to facilitate checking that dictionaries exist for the specified
 * locale. This is particularly useful when loading locale-specific resources, such as translations or
 * formatting settings. By ensuring that functions or components that deal with locale-specific data
 * are typed with `Locale`, developers can prevent runtime errors related to invalid or unsupported locales.
 *
 * Example:
 *
 * ```typescript
 * function getDictionary(locale: Locale): Dictionary {
 *   // Implementation to retrieve the dictionary for the given locale
 *   // The type checker ensures `locale` is one of the supported locales.
 * }
 * ```
 *
 * This approach enhances the application's maintainability and robustness by leveraging TypeScript's
 * static typing to enforce correct usage of locales throughout the codebase.
 */
export type Locale = (typeof LOCALES)[number];

/**
 * `LocaleParams` is a TypeScript interface designed to type the props of components
 * located within the `[locale]` folder. This interface ensures
 * that the components receive a `locale` parameter of a supported type.
 * This interface aids in maintaining type safety across localized components, ensuring
 * that they are compatible with the application's internationalisation structure.
 *
 *
 * Example Usage:
 *
 * ```tsx
 * import { LocaleParams } from '@/locale/config';
 *
 * const MyLocalizedComponent = ({ params }: LocaleParams) => {
 *   const { locale } = params;
 *   // Component logic that uses the locale
 *   return <div>Current locale: {locale}</div>;
 * };
 *
 * export default MyLocalizedComponent;
 * ```
 */
export interface LocaleParams {
    readonly params: { locale: Locale };
}

export const isLocale = (locale: string) => locale == "en" || locale == "fr";

import { enDictionary } from "../../dictionaries/en";
import { frDictionary } from "../../dictionaries/fr";
import { Locale } from "./config";

const dictionaries = {
    en: enDictionary,
    fr: frDictionary
} as const; // add `as const` to provide type safety when using the dictionaries

export const getDictionary = (locale: Locale) => dictionaries[locale];

export type Dictionary = typeof frDictionary;

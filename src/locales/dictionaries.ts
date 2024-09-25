import { enDictionary } from "../../dictionaries/en";
import { frDictionary } from "../../dictionaries/fr";
import { Locale } from "./config";

export type Dictionary = typeof frDictionary;

// Type that enforces deep immutability
type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

const dictionaries: DeepReadonly<{ [key in Locale]: Dictionary }> = {
    en: enDictionary,
    fr: frDictionary
} as const; // `as const` allows access to types in depth

export const getDictionary = (locale: Locale) => dictionaries[locale];

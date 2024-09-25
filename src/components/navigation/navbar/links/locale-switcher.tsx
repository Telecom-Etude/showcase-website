"use client";

import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { isLocale, Locale } from "@/locales/config";
import { nav } from "@/locales/routing";
import { GB, FR } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useLocaledUrl = (locale: Locale) => {
    const oldUrl = usePathname();
    const split = oldUrl.split("/");
    let index = 0;
    while (index < split.length && split[index].length === 0) {
        index++;
    }
    window.alert(split[index]);
    if (index === split.length) {
        return nav(locale, "/");
    } else if (isLocale(split[index])) {
        window.alert("is locale");
        return nav(locale, split.slice(index + 1).join("/"));
    } else {
        window.alert("not locale");
        return nav(locale, split.join("/"));
    }
};

export const LocaleSwitch = ({ locale }: { locale: Locale }) => {
    const localedUrl = useLocaledUrl(locale == "fr" ? "en" : "fr");

    return (
        <NavigationMenuItem>
            <Link href={localedUrl} legacyBehavior passHref>
                <NavigationMenuLink>
                    {locale === "fr" ? <GB title="English" className="h-6 w-6" /> : <FR title="Français" className="h-6 w-6" />}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};

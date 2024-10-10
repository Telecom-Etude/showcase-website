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
    if (index === split.length) {
        return nav(locale, "/");
    } else if (isLocale(split[index])) {
        return nav(locale, "/" + split.slice(index + 1).join("/"));
    } else {
        return nav(locale, split.join("/"));
    }
};

export const LocaleSwitch = ({ locale, mobile = false }: { locale: Locale; mobile?: boolean }) => {
    const localedUrl = useLocaledUrl(locale == "fr" ? "en" : "fr");

    return (
        <NavigationMenuItem className={mobile ? "" : "aspect-square rounded-full hover:bg-muted p-1"}>
            <Link href={localedUrl} legacyBehavior passHref className="border-2 border-red-500">
                <NavigationMenuLink>
                    <div className={mobile ? " hover:bg-muted w-screen flex justify-center py-2" : ""}>
                        {locale === "en" ? <GB title="English" className="h-6 w-6" /> : <FR title="Français" className="h-6 w-6" />}
                    </div>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};

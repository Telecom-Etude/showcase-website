import { BtnLink } from "@/components/telecom-etude/contact";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { isLocale, Locale } from "@/locales/config";
import { nav } from "@/locales/routing";
import { GB, FR } from "country-flag-icons/react/3x2";
import Link from "next/link";

const getLocaledUrl = (locale: Locale) => {
    const oldUrl = window.location.href;
    const split = oldUrl.split("/");
    var index = 0;
    while (index < split.length && split[index].length == 0) {
        index++;
    }
    if (index == split.length) {
        return nav(locale, "/");
    } else if (isLocale(split[index])) {
        return nav(locale, split.slice(index).join("/"));
    } else {
        return nav(locale, split.join("/"));
    }
};

export const LocaleSwitch = ({ locale }: { locale: Locale }) =>
    locale === "fr" ? (
        <NavigationMenuItem>
            <Link href={getLocaledUrl("fr")} legacyBehavior passHref>
                <NavigationMenuLink>
                    <GB title="English" className="h-6 w-6" />
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    ) : (
        <BtnLink href={getLocaledUrl("en")}>
            <FR title="Français" className="h-6 w-6" />
        </BtnLink>
    );

"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { isLocale, Locale } from "@/locales/config";
import { nav } from "@/locales/routing";
import { GB, FR } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const fetchSlug = async (slug: string) => {
    try {
        const response = await fetch(`/api/getPostSlug?slug=${slug}`);
        if (!response.ok) throw new Error("Erreur de récupération du slug");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const useLocaledUrl = (locale: Locale, post: any) => {
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
        if (split[-2] === "blog") {
            if (locale === "fr") {
                split[-1] = post?.slugen || split[-1];
            } else {
                split[-1] = post?.slugfr || split[-1];
            }
            return nav(locale, split.join("/"));
        } else {
            return nav(locale, split.join("/"));
        }
    }
};

export const LocaleSwitch = ({
    locale,
    mobile,
    onClick,
    setOpened,
}: {
    locale: Locale;
    mobile: boolean;
    onClick: () => void;
    setOpened: (open: null | number) => void;
}) => {
    const pathname = usePathname();
    const [post, setPost] = useState<{ slugen: string; slugfr: string } | null>(null);

    // Vérifie si l'URL correspond à un post
    const pathParts = pathname.split("/");
    const isBlogPost = pathParts.includes("blog");
    const postSlug = isBlogPost ? pathParts[pathParts.length - 1] : null;

    useEffect(() => {
        if (postSlug) {
            fetchSlug(postSlug).then(data => setPost(data));
        }
    }, [postSlug]);

    const localedUrl = useLocaledUrl(locale == "fr" ? "en" : "fr", post);

    return (
        <NavigationMenuItem className={mobile ? "" : "p-2 hover:bg-muted"}>
            <Button
                className="w-full"
                variant="ghost"
                onClick={() => {
                    setOpened(null);
                    onClick();
                }}
                asChild
            >
                <Link href={localedUrl} legacyBehavior passHref className="border-2 border-red-500 ">
                    <NavigationMenuLink>
                        <div className={mobile ? " hover:bg-muted w-screen flex  justify-center py-2" : ""}>
                            {locale === "en" ? <GB title="English" className="h-6 w-6" /> : <FR title="Français" className="h-6 w-6" />}
                        </div>
                    </NavigationMenuLink>
                </Link>
            </Button>
        </NavigationMenuItem>
    );
};

'use client';

import { GB, FR } from 'country-flag-icons/react/3x2';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { isLocale, Locale } from '@/locales/config';
import { nav } from '@/locales/routing';

const useLocaledUrl = (locale: Locale) => {
    const oldUrl = usePathname();
    const split = oldUrl.split('/');
    let index = 0;
    while (index < split.length && split[index].length === 0) {
        index++;
    }
    if (index === split.length) {
        return nav(locale, '/');
    } else if (isLocale(split[index])) {
        return nav(locale, '/' + split.slice(index + 1).join('/'));
    } else {
        return nav(locale, split.join('/'));
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
    const localedUrl = useLocaledUrl(locale == 'fr' ? 'en' : 'fr');

    return (
        <NavigationMenuItem className={mobile ? '' : 'hover:bg-muted'}>
            <Button
                className="w-full"
                variant="ghost"
                onClick={() => {
                    setOpened(null);
                    onClick();
                }}
                asChild
            >
                <NavigationMenuLink href={localedUrl}>
                    <div
                        className={
                            mobile ? ' hover:bg-muted w-screen flex  justify-center py-2' : ''
                        }
                    >
                        {locale === 'en' ? (
                            <FR title="Français" className="h-6 w-6" />
                        ) : (
                            <GB title="English" className="h-6 w-6" />
                        )}
                    </div>
                </NavigationMenuLink>
            </Button>
        </NavigationMenuItem>
    );
};

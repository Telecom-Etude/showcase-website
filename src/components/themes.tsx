'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { IoSunny, IoMoon } from 'react-icons/io5';

export function ThemeSwitch({
    onClick,
    setOpened,
}: {
    onClick: () => void;
    setOpened: (open: null | number) => void;
}) {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="px-2 rounded-none w-full"
            onClick={() => {
                if (theme == 'dark') {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
                setOpened(null);
                onClick();
            }}
        >
            <IoSunny className="dark:block hidden" />
            <IoMoon className="dark:hidden" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

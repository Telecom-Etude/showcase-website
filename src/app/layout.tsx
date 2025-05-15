import './globals.css';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/themes';
import { getLocale } from '@/headers';
import { cn } from '@/lib/utils';

export { generateMetadata } from './metadata';

const avenir = localFont({
    src: [
        {
            path: '../fonts/Avenir-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Avenir-Demi.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Avenir-DemiIt.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../fonts/Avenir-It.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/Avenir-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const locale = await getLocale();
    return (
        <html lang={locale}>
            <body className={cn(avenir.className, 'min-h-dvh flex flex-col')}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

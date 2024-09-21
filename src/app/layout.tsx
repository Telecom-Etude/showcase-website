import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import localFont from 'next/font/local';

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

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
    themeColor: "dark",
    colorScheme: "dark"
};

// <meta name="language" content="French">

export const metadata: Metadata = {
    /// VAR ///
    title: {
        // IMPORTANT
        template: "%s | Telecom Etude",
        default: "Telecom Etude"
    },
    /// FIXED ///

    // IMPORTANT
    description:
        "Telecom Etude, fondée en 1979, est la Junior-Entreprise de Télécom Paris, une école d'ingénieurs de premier plan dans les technologies de l'information et de la communication. Connectez-vous avec notre équipe dynamique de 23 administrateurs pour des solutions sur mesure à vos projets. Explorez l'expertise de Telecom Etude et engagez-vous avec plus de 1000 ingénieurs étudiants de Telecom Paris.", // IMPORTANT
    keywords: ["Numérique", "Data", "IA", "Machine Learning", "Développement"],
    metadataBase: new URL("https://telecom-etude.fr"), // settings for below
    alternates: {
        canonical: "/fr",
        languages: {
            "fr-FR": "/fr",
            "en-GB": "/en"
        }
        // media: {
        //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
        // },
        // types: {
        //     'application/rss+xml': 'https://nextjs.org/rss',
        // },
    },
    robots: {
        // IMPORTANT
        index: false,
        follow: true,
        nocache: true
        // googleBot: {
        //     index: true,
        //     follow: true,
        //     noimageindex: true,
        //     'max-video-preview': -1,
        //     'max-image-preview': 'large',
        //     'max-snippet': -1,
        // },
    },
    // NOT SO IMPORTANT
    generator: "Next.js",
    applicationName: "Telecom Etude Website",
    authors: [{ name: "Tom Webber", url: "https://www.github.com/t-webber" }],
    creator: "Tom Webber",
    publisher: "Rezel",
    category: "technology,data,numerique,informatique,computer,science",
    // UNKOWN IMPORTANCE
    formatDetection: {
        email: true,
        address: false,
        telephone: true
    }

    // TODO
    // referrer: 'origin-when-cross-origin',
    // openGraph: {
    //     title: 'Next.js',
    //     description: 'The React Framework for the Web',
    //     url: 'https://nextjs.org',
    //     siteName: 'Next.js',
    //     images: [
    //         {
    //             url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //             width: 800,
    //             height: 600,
    //         },
    //         {
    //             url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //             width: 1800,
    //             height: 1600,
    //             alt: 'My custom alt',
    //         },
    //     ],
    //     locale: 'en_US',
    //     type: 'website',
    // },
    // icons: {
    //     icon: [
    //         { url: '/icon.png' },
    //         new URL('/icon.png', 'https://example.com'),
    //         { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    //     ],
    //     shortcut: ['/shortcut-icon.png'],
    //     apple: [
    //         { url: '/apple-icon.png' },
    //         { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    //     ],
    //     other: [
    //         {
    //             rel: 'apple-touch-icon-precomposed',
    //             url: '/apple-touch-icon-precomposed.png',
    //         },
    //     ],
    // },
    // manifest: 'https://nextjs.org/manifest.json',
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'Next.js',
    //     description: 'The React Framework for the Web',
    //     siteId: '1467726470533754880',
    //     creator: '@nextjs',
    //     creatorId: '1467726470533754880',
    //     images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    // },
    // verification: {
    //     google: 'google',
    //     yandex: 'yandex',
    //     yahoo: 'yahoo',
    //     other: {
    //         me: ['my-email', 'my-link'],
    //     },
    // },
    // itunes: {
    //     appId: 'myAppStoreID',
    //     appArgument: 'myAppArgument',
    // },
    // appleWebApp: {
    //     title: 'Apple Web App',
    //     statusBarStyle: 'black-translucent',
    //     startupImage: [
    //         '/assets/startup/apple-touch-startup-image-768x1004.png',
    //         {
    //             url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
    //             media: '(device-width: 768px) and (device-height: 1024px)',
    //         },
    //     ],
    // },
    // appLinks: {
    //     ios: {
    //         url: 'https://nextjs.org/ios',
    //         app_store_id: 'app_store_id',
    //     },
    //     android: {
    //         package: 'com.example.android/package',
    //         app_name: 'app_name_android',
    //     },
    //     web: {
    //         url: 'https://nextjs.org/web',
    //         should_fallback: true,
    //     },
    // },
    // archives: ['https://nextjs.org/13'],
    // assets: ['https://nextjs.org/assets'],
    // bookmarks: ['https://nextjs.org/13'],
};

export default async function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html>
            <body className={cn(avenir.className, "min-h-dvh flex flex-col")}>
                <svg width="0" height="0">
                    <linearGradient id="te-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="var(--destructive)" offset="0%" />
                        <stop stopColor="var(--primary)" offset="100%" />
                    </linearGradient>
                </svg>
                {children}
            </body>
        </html>
    );
}

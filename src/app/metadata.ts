import { getLocale } from '@/headers';
import { Metadata } from 'next';

const WEBSITE_URL = process.env.WEBSITE_URL;
const DESCRIPTION =
    "Telecom Etude, fondée en 1979, est la Junior-Entreprise de Télécom Paris, une école d'ingénieur de premier plan dans les technologies de l'information et du numérique. Connectez-vous avec notre équipe réactive et professionnelle de 33 administrateurs pour des solutions sur mesure à vos projets. Explorez l'expertise de Telecom Etude et engagez-vous avec plus de 1000 ingénieurs étudiants de Télécom Paris."; // IMPORTANT

/** Metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return {
        // export const metadata: Metadata = {
        ///// VAR /////
        title: {
            // IMPORTANT
            template: '%s | Telecom Etude',
            default: 'Telecom Etude',
        },
        ///// FIXED /////

        // IMPORTANT
        description: DESCRIPTION,
        keywords: [
            'Numérique',
            'Data',
            'Intelligence Articielle',
            'Technology',
            'Machine Learning',
            'Développement',
            'Web',
            'Logiciel',
            'Chatbot',
            'Cybersécurité',
        ],
        metadataBase: new URL(WEBSITE_URL), // settings for below
        alternates: {
            canonical: '/' + locale,
            languages: {
                'fr-FR': '/fr',
                'en-GB': '/en',
            },
            // ...
        },
        robots: {
            // IMPORTANT
            index: true,
            follow: true,
            'max-snippet': 320,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            // ...
        },
        openGraph: {
            title: 'Telecom Etude',
            description: DESCRIPTION,
            url: WEBSITE_URL,
            images: [
                {
                    url: WEBSITE_URL + '/logo.png',
                    width: 555,
                    height: 555,
                    alt: 'Telecom Etude Logo',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Telecom Etude',
            description: DESCRIPTION,
            images: WEBSITE_URL + '/logo.png',
        },
        // NOT SO IMPORTANT
        generator: 'Next.js',
        applicationName: 'Telecom Etude Website',
        authors: [{ name: 'Tom Webber', url: 'https://www.github.com/t-webber' }],
        creator: 'Tom Webber',
        publisher: 'Rezel',
        category: 'technology,data,numerique,informatique,computer,science,junior,telecom',
        // UNKOWN IMPORTANCE
        formatDetection: {
            email: true,
            address: false,
            telephone: true,
        },

        // TODO
        // referrer: 'origin-when-cross-origin',
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
}

/** Viewport
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
// export const viewport: Viewport = {
//  ...
// };

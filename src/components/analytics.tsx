'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Locale } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

declare global {
    interface Window {
        _paq: (string | string[])[][];
    }
}

export function CookieConsent({ locale }: { locale: Locale }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else if (consent === 'accepted') {
            loadAnalytics();
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        loadAnalytics();
    };

    const rejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    const loadAnalytics = () => {
        const _paq = (window._paq = window._paq || []);
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['setDocumentTitle', document.domain + '/' + document.title]);
        _paq.push(['setCookieDomain', '*.telecom-etude.fr']);
        _paq.push(['setDomains', ['*.telecom-etude.fr']]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function () {
            const u = '//analytics.rezel.net/';
            _paq.push(['setTrackerUrl', u + 'matomo.php']);
            _paq.push(['setSiteId', '1']);
            const d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
            g.async = true;
            g.src = u + 'matomo.js';
            s.parentNode!.insertBefore(g, s);
        })();
    };

    const t = getDictionary(locale).navigation.cookies;

    return (
        <AlertDialog open={isVisible} onOpenChange={setIsVisible}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t.title}</AlertDialogTitle>
                </AlertDialogHeader>
                <p>
                    {t.description}{' '}
                    <Link href="/legal" className="hover:underline">
                        {t.link}
                    </Link>
                </p>
                <div className="mt-4 flex justify-end gap-2">
                    <Button variant="secondary" onClick={rejectCookies}>
                        {t.reject}
                    </Button>
                    <Button onClick={acceptCookies}>{t.accept}</Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}

'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ExtendedUser } from '@/auth/auth';
import { Locale } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

import { FullLogo } from '../../telecom-etude/logos';
import { Button } from '../../ui/button';

import { Links } from './links/links';

export const MobileNavBar = ({ locale, user }: { locale: Locale; user?: ExtendedUser }) => {
    const [deployed, setDeployed] = useState(false);
    const close = () => setDeployed(false);
    const button_vocab = getDictionary(locale).navigation.button;
    const router = useRouter();
    return (
        <div>
            <div className="flex justify-between border-b-2 border-accent">
                <Button
                    asChild
                    variant="ghost"
                    className="p-2"
                    onClick={() => close()}
                    aria-label="menu"
                >
                    <Link
                        href="/"
                        className="flex justify-start px-0 py-0"
                        onContextMenu={(e) => {
                            e.preventDefault();
                            router.push('https://github.com/telecom-etude/logos');
                        }}
                    >
                        <FullLogo />
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    className="p-2 rounded-none"
                    onClick={() => setDeployed((d) => !d)}
                    aria-label={deployed ? button_vocab.close : button_vocab.open}
                >
                    <Menu className="text-primary" />
                </Button>
            </div>
            {deployed && (
                <Links onClick={() => setDeployed((x) => !x)} mobile locale={locale} user={user} />
            )}
        </div>
    );
};

import { Metadata } from 'next';

import { ErrorPage } from '@/components/navigation/errors';
import { getLocale } from '@/headers';

export const metadata: Metadata = {
    title: 'Erreur',
};

export default async function Errors() {
    return <ErrorPage code={'404'} locale={await getLocale()} />;
}

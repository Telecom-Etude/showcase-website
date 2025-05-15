import { Metadata } from 'next';

import { ErrorPage } from '@/components/navigation/errors';
import { LocaleParams } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

export const metadata: Metadata = {
    title: 'Erreur',
};
type Params = LocaleParams & {
    params: Promise<{ code: string }>;
};

export default async function Page({ params }: Params) {
    const { locale, code } = await params;
    metadata.title = getDictionary(locale).navigation.errors.title;
    return <ErrorPage code={code} locale={locale} />;
}

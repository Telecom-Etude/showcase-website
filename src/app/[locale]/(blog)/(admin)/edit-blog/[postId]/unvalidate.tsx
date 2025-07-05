'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { VariantLink } from '@/components/ui/button';
import { unvalidateBlog } from '@/db/blogs';
import { Locale } from '@/locales/config';
import { nav } from '@/locales/routing';

export function UnValidate({ locale, id }: { locale: Locale; id: number }) {
    return (
        <AlertDialog defaultOpen={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Post déjà approuvé et validé</AlertDialogTitle>
                    <AlertDialogDescription>
                        Pour modifier ce blog, il doit être invalidé. Le blog devra être revalidé
                        par un administrateur avant de réapparaitre dans la section blog du site.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <VariantLink variant="outline" href={nav(locale, '/blog')}>
                        Cancel
                    </VariantLink>
                    <AlertDialogAction onClick={() => unvalidateBlog(id)}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

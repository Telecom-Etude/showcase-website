'use client';

import { Button, VariantLink } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Locale } from '@/locales/config';
import { nav } from '@/locales/routing';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { unvalidateBlog } from '@/db/blogs';

export function UnValidate({ locale, id }: { locale: Locale; id: number }) {
    return (
        <AlertDialog defaultOpen={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Post déjà approuvé et validé</AlertDialogTitle>
                    <AlertDialogDescription>
                        Pour modifier ce blog, il doit être invalider. Le blog devra être revalidé
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

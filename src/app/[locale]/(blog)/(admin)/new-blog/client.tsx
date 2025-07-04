'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { LoadingFullStops } from '@/components/animations/loading';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BlogCreationStatus, blogCreationStatusMessage } from '@/lib/blogs';
import { DEFAULT_LOCALE, Locale, LOCALES } from '@/locales/config';
import { nav } from '@/locales/routing';

export const newPostSchema = z.object({
    title: z.string().min(2, {
        message: 'Le titre doit comporter au moins 2 caractères.',
    }),
    locale: z.enum(LOCALES),
});

enum SubmissionStatus {
    None = 'None',
    Creating = 'Creating',
}

type ClientBlogCreationStatus = BlogCreationStatus | SubmissionStatus;

export default function NewPostForm({ email, locale }: { email: string; locale: Locale }) {
    const form = useForm<z.infer<typeof newPostSchema>>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
            locale: DEFAULT_LOCALE,
        },
    });

    const router = useRouter();
    const [creationStatus, setCreationStatus] = useState<ClientBlogCreationStatus>(
        SubmissionStatus.None
    );

    const onSubmit = async (values: z.infer<typeof newPostSchema>) => {
        setCreationStatus(SubmissionStatus.Creating);
        const apiData = JSON.stringify({ authorEmail: email, title: values.title, locale: 'fr' });
        const response = await fetch('/api/create-blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: apiData,
        });
        const json: { id?: number; status: BlogCreationStatus } = await response.json();
        setCreationStatus(json.status);
        if (json.status === BlogCreationStatus.Ok) {
            const id = json.id;
            if (process.env.DEV_MODE) {
                console.log('Created POST with ID = ', id);
            }
            router.push(nav('fr', `/edit-blog/${id}`));
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center space-y-6"
            >
                <div className="flex space-x-1 w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center items-center space-y-4 h-full w-full">
                                <FormControl>
                                    <Input
                                        className="rounded-md rounded-r-none border-none"
                                        placeholder="Titre"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="bg-transparent" />
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="locale"
                        render={({ field }) => (
                            <FormItem className="flex-col justify-center items-center space-y-4 h-full">
                                <FormControl>
                                    <select
                                        {...field}
                                        defaultValue={DEFAULT_LOCALE}
                                        className="p-2 rounded-md rounded-l-none"
                                        value={selectedLocale}
                                        onChange={e => {
                                            form.setValue("locale", e.target.value as Locale);
                                            setSelectedLocale(e.target.value as Locale);
                                        }}
                                    >
                                        {LOCALES.map(l => (
                                            <option value={l} key={l} className="h-[200px] p-2 m-2">
                                                {l}
                                            </option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                </div>
                {creationStatus === SubmissionStatus.Creating ||
                creationStatus === BlogCreationStatus.Ok ? (
                    <div className="h-[30pt] flex items-center justify-center">
                        <LoadingFullStops />
                    </div>
                ) : (
                    <Button className="w-full h-[30pt]" variant="call2action" type="submit">
                        Créer
                    </Button>
                )}
                {creationStatus !== SubmissionStatus.Creating &&
                creationStatus !== SubmissionStatus.None &&
                creationStatus != BlogCreationStatus.Ok ? (
                    <p className="text-destructive w-full text-center">
                        {blogCreationStatusMessage(creationStatus)}
                    </p>
                ) : (
                    <p className="w-full text-center">ou</p>
                )}
                {creationStatus === SubmissionStatus.Creating ||
                creationStatus === BlogCreationStatus.Ok ? (
                    <div className="h-[30pt] w-full flex justify-center">
                        <LoadingFullStops />
                    </div>
                ) : (
                    <Button
                        className="h-[30pt] w-full flex justify-center"
                        type="button"
                        variant="link"
                        asChild
                    >
                        <Link href={nav(locale, '/list-blog')}>Éditer un post existant</Link>
                    </Button>
                )}
            </form>
        </Form>
    );
}

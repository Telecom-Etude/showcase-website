'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { nav } from '@/locales/routing';
import { DEFAULT_LOCALE, LOCALES, Locale } from '@/locales/config';

export const newPostSchema = z.object({
    title: z.string().min(2, {
        message: 'Le titre doit comporter au moins 2 caractères.',
    }),
    locale: z.enum(LOCALES),
});

export default function NewPostForm({ email }: { email: string }) {
    const form = useForm<z.infer<typeof newPostSchema>>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
            locale: DEFAULT_LOCALE,
        },
    });

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof newPostSchema>) => {
        const apiData = JSON.stringify({ authorEmail: email, title: values.title, locale: 'fr' });
        const response = await fetch('/api/create-blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: apiData,
        });
        if (!response.ok) {
            console.error('Error creating blog: ', response.status, response.body);
            router.push(nav('fr', '/errors/500'));
        } else {
            const id = (await response.json()).blogId;
            if (process.env.DEV_MODE) console.log('Created POST with ID = ', id);
            router.push(nav('fr', `/edit-blog/${id}`));
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex space-x-1 mb-6 w-full">
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
                <Button className="w-full" variant="call2action" type="submit">
                    Créer
                </Button>
            </form>
        </Form>
    );
}

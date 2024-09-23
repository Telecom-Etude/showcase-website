"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { nav } from "@/locales/routing";
import { createBlog } from "@/db/blogs";
import { DEFAULT_LOCALE, LOCALES, Locale } from "@/locales/config";

export const newPostSchema = z.object({
    title: z.string().min(2, {
        message: "Le titre doit comporter au moins 2 caractères."
    }),
    locale: z.enum(LOCALES)
});

export default function NewPostForm({ email }: { email: string }) {
    const form = useForm<z.infer<typeof newPostSchema>>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
            locale: DEFAULT_LOCALE
        }
    });

    const router = useRouter();

    const onSubmit = (values: z.infer<typeof newPostSchema>) => {
        createBlog(email, values.title, values.locale)
            .then((id: number) => {
                router.push(nav("fr", `/edit-blog/${id}`));
            })
            .catch(() => {
                toast({
                    title: "Une erreur est survenue.",
                    variant: "destructive",
                    description:
                        "Une erreur est survenue lors de la création du post. Rafraîchissez la page et réessayez, ou contactez le support à jet.info@telecom-etude.fr"
                });
            });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex space-x-1 mb-6 w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="flex flex-col jusitfy-center items-center space-y-4 w-full">
                                <FormControl>
                                    <Input className="rounded-md rounded-r-none border-none" placeholder="Titre" {...field} />
                                </FormControl>
                                <FormMessage className="bg-transparent" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="locale"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center items-center space-y-4">
                                <FormControl>
                                    <select
                                        {...field}
                                        defaultValue={DEFAULT_LOCALE}
                                        className="p-2 rounded-md rounded-l-none"
                                        onChange={e => {
                                            form.setValue("locale", e.target.value as Locale);
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
                    />
                </div>
                <Button className="w-full" variant="call2action" type="submit">
                    Créer
                </Button>
            </form>
        </Form>
    );
}

"use client";

import { z } from "zod";
import { ControllerRenderProps, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

import { createForm } from "@/db/formbug";
import { sendForm } from "@/mail/mailerbug";

import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";

import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import Link from "next/link";
import { nav } from "@/locales/routing";

type Fields = "email" | "subject" | "message";
const ListFields = ["email", "subject", "message"];

interface FieldVocabItem {
    label: string;
    placeholder: string;
    error?: string;
}

export default function BugForm({ locale, emails }: { locale: Locale; emails: (string | undefined)[] }) {
    const [finished, setFinished] = useState(false);
    const [success, setSuccess] = useState(false);
    const [sending, setSending] = useState(false);

    const t = getDictionary(locale).pages.bug;
    const checkedEmails: string[] = emails.filter(e => typeof e !== "undefined");

    /*if (checkedEmails.length == 0) {
        throw new Error("Missing destination email");
    }*/

    const formFields = {
        email: z.string().email({
            message: t.form.email.error,
        }),
        subject: z.string(),
        message: z.string().min(5, {
            message: t.form.message.error,
        }),
    };

    const formSchema = z.object(formFields);
    type FormType = z.infer<typeof formSchema>;

    const formEntries: [Fields, FieldVocabItem][] = Object.entries(t.form)
        .filter(([key]) => ListFields.includes(key))
        .map(([key, value]) => [key as Fields, value] as [Fields, FieldVocabItem]);

    const form: UseFormReturn<FormType> = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (values: FormType) => {
        const fields = formSchema.safeParse(values);
        if (fields.success) {
            setSending(true);
            createForm(values);
            sendForm(values, checkedEmails)
                .then(() => {
                    setSending(false);
                    setSuccess(true);
                    setFinished(true);
                })
                .catch(() => {
                    setSending(false);
                    setSuccess(false);
                    setFinished(true);
                });
        } else {
            setSuccess(false);
            setFinished(true);
        }
    };

    const starRequired = (fieldName: Fields) => {
        if ([ "subject", "message"].includes(fieldName)) return " *";
        else return ` (${t.optional})`;
    };

    return (
        <div className="space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="space-y-4">
                        {formEntries.map(([name, value], idx) => (
                            <FormField
                                key={idx}
                                control={form.control}
                                name={name}
                                render={({ field }: { field: ControllerRenderProps<FormType> }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">{value.label + starRequired(name)}</FormLabel>
                                        <FormControl>
                                            {name === "message" ? (
                                                <Textarea
                                                    className="border-[1px] rounded-none  border-primary p-4"
                                                    placeholder={value.placeholder}
                                                    {...field}
                                                    onInput={e => {
                                                        let target = e.target as HTMLElement;
                                                        target.style.height = "inherit";
                                                        let fontSize = parseFloat(window.getComputedStyle(target, null).getPropertyValue("font-size"));
                                                        target.style.height = `${target.scrollHeight + fontSize}px`;
                                                    }}
                                                />
                                            ) : (
                                                <Input className="border-[1px] rounded-none border-primary p-4" placeholder={value.placeholder} {...field} />
                                            )}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>
                    <div className="w-full flex justify-center">
                        <Button variant="call2action" type="submit">
                            {t.form.send}
                        </Button>
                    </div>
                </form>
            </Form>
            <p className="text-sm italic pt-10">{t.terms}</p>
            <AlertDialog open={finished}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t[success ? "success" : "error"].title}</AlertDialogTitle>
                        <AlertDialogDescription>{t[success ? "success" : "error"].message}</AlertDialogDescription>
                    </AlertDialogHeader>
                    {success ? (
                        <AlertDialogFooter>
                            <Button asChild variant="call2action">
                                <Link href={nav(locale, "/")}>{t.success.back}</Link>
                            </Button>
                        </AlertDialogFooter>
                    ) : null}
                </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={sending}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center space-x-4">
                            <VscLoading className="animate-spin" />
                            <p>{t.sending}</p>
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { ControllerRenderProps, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getDictionary } from "@/locales/dictionaries";
import { createForm } from "@/db/form";
import { Locale } from "@/locales/config";
import { sendForm } from "@/mail/mailer";

type Fields = "name" | "email" | "tel" | "societe" | "subject" | "message";
const ListFields = ["name", "email", "tel", "societe", "subject", "message"];

interface FieldVocabItem {
    label: string;
    placeholder: string;
    error?: string;
}

export default function ContactForm({ locale, emails }: { locale: Locale; emails: string[] }) {
    const t = getDictionary(locale).pages.contact;

    const formFields = {
        name: z.string().min(2, {
            message: t.form.name.error
        }),
        email: z.string().email({
            message: t.form.email.error
        }),
        tel: z.string().optional(),
        societe: z.string().optional(),
        subject: z.string(),
        message: z.string().min(5, {
            message: t.form.message.error
        })
    };

    const formSchema = z.object(formFields);
    type FormType = z.infer<typeof formSchema>;

    const formEntries: [Fields, FieldVocabItem][] = Object.entries(t.form)
        .filter(([key]) => ListFields.includes(key))
        .map(([key, value]) => [key as Fields, value] as [Fields, FieldVocabItem]);

    const form: UseFormReturn<FormType> = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            tel: "",
            societe: "",
            subject: "",
            message: ""
        }
    });

    const { toast } = useToast();

    const onSubmit = (values: FormType) => {
        const fields = formSchema.safeParse(values);
        if (fields.success) {
            createForm(values);
            sendForm(values, emails)
                .then(() => {
                    toast({
                        title: t.success.title,
                        description: t.success.message,
                        duration: 5000,
                        variant: "success"
                    });
                })
                .catch(() => {
                    toast({
                        title: t.error.title,
                        description: t.error.message,
                        duration: 5000,
                        variant: "destructive"
                    });
                });
        }
    };

    const FormElement = ({
        form,
        name,
        value,
        textarea = false
    }: {
        form: UseFormReturn<FormType>;
        name: Fields;
        value: FieldVocabItem;
        textarea?: boolean;
    }) => (
        <FormField
            control={form.control}
            name={name}
            render={({ field }: { field: ControllerRenderProps<FormType> }) => (
                <FormItem>
                    <FormLabel>{value.label}</FormLabel>
                    <FormControl>
                        {textarea ? (
                            <Textarea
                                className="border-[1px] rounded-none  border-primary p-6"
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
                            <Input className="border-[1px] rounded-none border-primary p-6" placeholder={value.placeholder} {...field} />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                {formEntries.map(([name, value], idx) => (
                    <FormElement name={name} value={value} form={form} key={idx} textarea={name === "message"} />
                ))}

                <div className="w-full flex justify-center">
                    <Button variant="call2action" onClick={() => onSubmit(form.getValues())}>
                        {t.form.send}
                    </Button>
                </div>
            </form>
        </Form>
    );
}

"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { ControllerRenderProps, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type Fields = "name" | "email" | "tel" | "societe" | "subject" | "message";
const ListFields = ["name", "email", "tel", "societe", "subject", "message"];

interface FieldVocabItem {
    label: string;
    placeholder: string;
    error?: string;
}

const vocab = {
    title: "Contactez-nous !",
    before: "Vous avez un projet en tête ? Vous avez besoin de plus d'informations sur notre offre ? N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en nous envoyant un email à ",
    after: ". Nous reviendrons vers vous dès que possible.",
    terms: "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter dans le cadre de votre demande et de la relation commerciale qui peut en découler. ",
    form: {
        name: {
            label: "Nom",
            placeholder: "Votre nom",
            error: "Merci de fournir un nom"
        },
        email: {
            label: "Email",
            placeholder: "Votre email",
            error: "Merci de fournir une adresse email valide"
        },
        tel: {
            label: "Téléphone",
            placeholder: "Votre numéro de téléphone",
            error: "Numéro de téléphone invalide"
        },
        societe: {
            label: "Société",
            placeholder: "Votre nom de société"
        },
        subject: {
            label: "Objet",
            placeholder: "Un titre pour votre message"
        },
        message: {
            label: "Message",
            placeholder: "Votre message à l'équipe",
            error: "Merci d'écrire un message"
        },
        send: "Envoyer"
    },
    success: {
        title: "Message envoyé !",
        message: "Merci pour votre message. Nous vous recontacterons dès que possible."
    },
    error: {
        title: "Erreur lors de l'envoie",
        message: "Merci de nous envoyé un mail directement à"
    }
};

const FormElement = ({ form, name, value, textarea = false }: { form: UseFormReturn<FormType>; name: Fields; value: FieldVocabItem; textarea?: boolean }) => (
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

const formFields = {
    name: z.string().min(2, {
        message: vocab.form.name.error
    }),
    email: z.string().email({
        message: vocab.form.email.error
    }),
    tel: z.string().optional(),
    societe: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(5, {
        message: vocab.form.message.error
    })
};

const formSchema = z.object(formFields);
type FormType = z.infer<typeof formSchema>;

const formEntries: [Fields, FieldVocabItem][] = Object.entries(vocab.form)
    .filter(([key]) => ListFields.includes(key))
    .map(([key, value]) => [key as Fields, value] as [Fields, FieldVocabItem]);

export default function FormElements() {
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
            setTimeout(() => {
                toast({
                    title: "Succès",
                    description: "Votre réponse au formulaire de contact a été envoyée, nous reviendrons vers vous d'ici peu.",
                    duration: 5000,
                    variant: "success"
                });
            }, 2000);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                {formEntries.map(([name, value], idx) => (
                    <FormElement name={name} value={value} form={form} key={idx} textarea={name === "message"} />
                ))}

                <div className="w-full flex justify-center">
                    <Button variant="call2action" className="hover:bg-primary text-lg min-w-[200px]" onClick={() => onSubmit(form.getValues())}>
                        {vocab.form.send}
                    </Button>
                </div>
            </form>
        </Form>
    );
}

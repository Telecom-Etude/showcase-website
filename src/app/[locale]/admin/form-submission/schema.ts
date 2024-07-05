import { TELECOM_REGEX } from "@/consts";
import { z } from "zod";

export const contactFormSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
    tel: z.bigint().optional(),
    societe: z.string().optional(),
    subject: z.string().optional(),
    message: z.string(),
    date: z.date(),
    done: z.boolean()
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

import { z } from "zod";

export const validationBlogSchema = z.object({
    id: z.number(),
    validated: z.boolean(),
    emails: z.array(z.string()),
    title: z.string(),
    content: z.string()
});

export type ValidationBlogType = z.infer<typeof validationBlogSchema>;

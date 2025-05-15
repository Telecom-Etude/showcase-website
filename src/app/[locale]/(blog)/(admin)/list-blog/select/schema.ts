import { z } from 'zod';

const validationBlogSchema = z.object({
    id: z.number(),
    validated: z.boolean(),
    emails: z.array(z.string()),
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type ValidationBlogType = z.infer<typeof validationBlogSchema>;

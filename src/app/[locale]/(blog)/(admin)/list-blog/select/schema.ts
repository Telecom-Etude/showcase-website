import { z } from 'zod';

export type ValidationBlogType = z.infer<
    z.ZodObject<{
        id: z.ZodNumber;
        validated: z.ZodBoolean;
        emails: z.ZodArray<z.ZodString>;
        title: z.ZodString;
        content: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }>
>;

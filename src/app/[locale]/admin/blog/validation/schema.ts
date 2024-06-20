import { z } from "zod";

export const validationBlogSchema = z.object({
    id: z.number(),
    authorId: z.number(),
    validated: z.boolean(),
    localeBlogs: z.array(
        z.object({
            id: z.number(),
            locale: z.string(),
            blogId: z.number()
        })
    )
});

export type ValidationBlogType = z.infer<typeof validationBlogSchema>;

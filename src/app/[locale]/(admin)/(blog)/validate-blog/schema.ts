import { z } from "zod";

export const validationBlogSchema = z.object({
    id: z.number(),
    validated: z.boolean(),
    authorIds: z.array(z.number()),
    localePosts: z.array(
        z.object({
            id: z.number(),
            locale: z.string(),
            blogId: z.number()
        })
    )
});

export type ValidationBlogType = z.infer<typeof validationBlogSchema>;

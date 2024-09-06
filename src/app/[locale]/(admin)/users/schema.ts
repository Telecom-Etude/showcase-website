import { z } from "zod";

export const userRolesSchema = z.object({
    email: z.string(),
    image: z.string().optional(),
    blogAdmin: z.boolean(),
    userAdmin: z.boolean(),
    blogAuthor: z.boolean(),
    formAdmin: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export type UserRolesType = z.infer<typeof userRolesSchema>;

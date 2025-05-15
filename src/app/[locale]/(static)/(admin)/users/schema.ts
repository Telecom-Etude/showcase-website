import { z } from 'zod';

export type UserRolesType = z.infer<
    z.ZodObject<{
        email: z.ZodString;
        blogAdmin: z.ZodBoolean;
        userAdmin: z.ZodBoolean;
        blogAuthor: z.ZodBoolean;
        formAdmin: z.ZodBoolean;
    }>
>;

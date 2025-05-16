import { z } from 'zod';

export type ContactFormType = z.infer<
    z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        email: z.ZodString;
        tel?: z.ZodBigInt;
        societe?: z.ZodString;
        subject?: z.ZodString;
        message: z.ZodString;
        date: z.ZodDate;
        done: z.ZodBoolean;
    }>
>;

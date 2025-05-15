/**
 * @file next-auth.d.ts
 * This file is for specifying the types for TypeScript for @/auth/auth.ts.
 * It changes the value of Session and JWT types, directly imported for NextAuth.
 * It is necessary because the rights of a user where added to the jwt and session.
 * This file has a specific name and should not be moved.
 *
 * @module next-auth.d
 * @protected
 * @donotmove
 */

import NextAuth, { type DefaultSession } from 'next-auth';
import type { Rights } from '@/auth/auth';
import type { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            rights: Rights | null;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        rights: Rights | null;
    }
}

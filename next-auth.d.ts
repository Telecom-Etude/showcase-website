import NextAuth, { type DefaultSession } from "next-auth";
import type { Rights } from "@/auth/auth";

export type ExtendUser = DefaultSession["user"] & {
    rights: Rights | null;
};

declare module "next-auth" {
    interface Session {
        user: ExtendUser;
    }
}

import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        rights: Rights | null;
    }
}

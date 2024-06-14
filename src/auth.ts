import type { NextAuthConfig, User } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const config = {
    providers: [Google],
    callbacks: {
        async signIn(params: { user: User }) {
            const email = params.user.email;
            const prisma = new PrismaClient();
            if (email) {
                await prisma.user.upsert({
                    where: { email },
                    update: { email },
                    create: { email }
                });
                return true;
            } else {
                return false;
            }
        }
    }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

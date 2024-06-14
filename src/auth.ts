import type { NextAuthConfig, User as AuthUser } from "next-auth";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { User as PrismaUser } from "@prisma/client";

const config = {
    ...authConfig,
    callbacks: {
        async session({ session }) {
            if (session.user) {
                const user: PrismaUser | null = await db.user.findUnique({ where: { email: session.user.email } });
                const newUser = { ...user, ...session.user };
                session.user = newUser;
                console.log("new session ", user);
            }
            return session;
        },
        async jwt({ token, profile }) {
            return token;
        },
        async signIn(params: { user: AuthUser }) {
            const email = params.user.email;
            if (email) {
                await db.user.upsert({
                    where: { email },
                    update: { email },
                    create: { email }
                });
                return true;
            } else {
                return false;
            }
        }
    },
    session: { strategy: "jwt" }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

import NextAuth, { type NextAuthConfig, type User as AuthUser, type Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import authConfig from "@/auth/auth.config";
import { db } from "@/lib/db";
import { getRights } from "@/db/users";

export interface Rights {
    formAdmin: boolean;
    blogAdmin: boolean;
    userAdmin: boolean;
    blogAuthor: boolean;
}

const config = {
    trustHost: true,
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout"
    },
    callbacks: {
        async session({ session, token }: { session: Session; token: JWT }) {
            if (token.rights && session.user) {
                session.user.rights = token.rights;
            } else {
                session.user.rights = null;
            }
            return session;
        },
        async jwt({ token }: { token: JWT }) {
            const rights = await getRights(token.email);
            if (token.sub && rights) {
                token.rights = rights;
            }
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
    session: { strategy: "jwt" },
    ...authConfig
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

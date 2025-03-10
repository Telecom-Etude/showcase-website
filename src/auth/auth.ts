import NextAuth, { type NextAuthConfig, type User as AuthUser, type Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import authConfig from "@/auth/auth.config";
import { db } from "@/lib/db";
import { getRights } from "@/db/users";
import { SIGNIN_PATH, SIGNOUT_PATH } from "./routes";
import { measureMemory } from "vm";

export interface Rights {
    formAdmin: boolean;
    blogAdmin: boolean;
    userAdmin: boolean;
    blogAuthor: boolean;
}

export type ExtendedUser =
    | (User & {
          rights: Rights | null;
      })
    | undefined;

const config = {
    trustHost: true,
    pages: {
        signIn: SIGNIN_PATH,
        signOut: SIGNOUT_PATH,
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
            const { email, name } = params.user;
            if (!email) {
                return false;
            }
            var data;
            if (name) {
                data = { email: email!, name: name! };
            } else {
                data = { email };
            }
            if (email) {
                await db.user.upsert({
                    where: { email },
                    update: data!,
                    create: data!,
                });
                return true;
            } else {
                return false;
            }
        },
    },
    session: { strategy: "jwt" },
    ...authConfig,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

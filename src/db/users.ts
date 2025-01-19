"use server";

import { Rights } from "@/auth/auth";
import { db } from "@/lib/db";

////////////// CREAT ///////////////////

////////////// READ ///////////////////

export async function getRights(email: string | null | undefined): Promise<Rights | null> {
    var rights = null;
    if (!email) {
        return rights;
    }
    try {
        const user = await db.user.findUnique({ where: { email } });
        rights = {
            formAdmin: user?.formAdmin || false,
            blogAdmin: user?.blogAdmin || false,
            userAdmin: user?.userAdmin || false,
            blogAuthor: user?.blogAuthor || false
        };
        return rights;
    } catch (e) {
        // console.error(`[getRights] Error:\n\n${e}\n`);
        return null;
    }
}

////////////// UPDATE  ///////////////////

export async function makeBlogAdmin(email: string, value: boolean) {
    try {
        await db.user.update({
            where: { email },
            data: { blogAdmin: value }
        });
    } catch (e) {
        console.error(`[makeBlogAdmin] Error:\n\n${e}\n`);
    }
}

export async function makeUserAdmin(email: string, value: boolean) {
    try {
        const x = await db.user.update({
            where: { email },
            data: { userAdmin: value }
        });
    } catch (e) {
        console.error(`[makeUserAdmin] Error:\n\n${e}\n`);
    }
}

export async function makeFormAdmin(email: string, value: boolean) {
    try {
        await db.user.update({
            where: { email },
            data: { formAdmin: value }
        });
    } catch (e) {
        console.error(`[makeFormAdmin] Error:\n\n${e}\n`);
    }
}

export async function makeBlogAuthor(email: string, value: boolean) {
    try {
        await db.user.update({
            where: { email },
            data: { blogAuthor: value }
        });
    } catch (e) {
        console.error(`[makeFormAdmin] Error:\n\n${e}\n`);
    }
}

////////////// DELETE  ///////////////////

export async function deleteUser(email: string) {
    try {
        await db.user.delete({ where: { email } });
    } catch (e) {
        console.error(`[deleteUser] Error:\n\n${e}\n`);
    }
}

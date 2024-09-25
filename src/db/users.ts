"use server";

import { db } from "@/lib/db";

////////////// CREAT ///////////////////

////////////// READ ///////////////////

export const getRights = async (email: string | null | undefined) => {
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
        return false;
    }
};

////////////// UPDATE  ///////////////////

export const makeBlogAdmin = async (email: string, value: boolean) => {
    try {
        await db.user.update({
            where: { email },
            data: { blogAdmin: value }
        });
        return true;
    } catch (e) {
        console.error(`[makeBlogAdmin] Error:\n\n${e}\n`);
        return false;
    }
};

export const makeUserAdmin = async (email: string, value: boolean) => {
    try {
        const x = await db.user.update({
            where: { email },
            data: { userAdmin: value }
        });
        return true;
    } catch (e) {
        console.error(`[makeUserAdmin] Error:\n\n${e}\n`);
        return false;
    }
};

export const makeFormAdmin = async (email: string, value: boolean) => {
    try {
        await db.user.update({
            where: { email },
            data: { formAdmin: value }
        });
        return true;
    } catch (e) {
        console.error(`[makeFormAdmin] Error:\n\n${e}\n`);
        return false;
    }
};

export const makeBlogAuthor = async (email: string, value: boolean) => {
    try {
        await db.user.update({
            where: { email },
            data: { blogAuthor: value }
        });
        return true;
    } catch (e) {
        console.error(`[makeFormAdmin] Error:\n\n${e}\n`);
        return false;
    }
};

////////////// DELETE  ///////////////////

export const deleteUser = async (email: string) => {
    try {
        await db.user.delete({ where: { email } });
        return true;
    } catch (e) {
        console.error(`[deleteUser] Error:\n\n${e}\n`);
        return false;
    }
};

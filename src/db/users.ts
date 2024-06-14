"use server";

import { db } from "@/lib/db";

////////////// CREAT ///////////////////

////////////// READ ///////////////////

export const isFormAdmin = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        });
        return user?.formAdmin;
    } catch (e) {
        console.error("[isFormAdmin] Error: ", e);
        return false;
    }
};

export const isUserAdmin = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        });
        return user?.userAdmin;
    } catch (e) {
        console.error("[isUserAdmin] Error: ", e);
        return false;
    }
};

export const isBlogAdmin = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        });
        return user?.blogAdmin;
    } catch (e) {
        console.error("[isBlogAdmin] Error: ", e);
        return false;
    }
};

export const isBlogAuthor = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        });
        return user?.blogAuthor;
    } catch (e) {
        console.error("[isBlogAuthor] Error: ", e);
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
        console.error("[makeBlogAdmin] Error: ", e);
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
        console.error("[makeUserAdmin] Error: ", e);
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
        console.error("[makeFormAdmin] Error: ", e);
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
        console.error("[makeFormAdmin] Error: ", e);
        return false;
    }
};

////////////// DELETE  ///////////////////

export const deleteUser = async (email: string) => {
    try {
        await db.user.delete({ where: { email } });
        return true;
    } catch (e) {
        console.error("[deleteUser] Error: ", e);
        return false;
    }
};

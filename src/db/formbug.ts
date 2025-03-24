"use server";

import { db } from "@/lib/db";

export const createForm = (values: {email: string; subject?: string; message: string }) =>
    new Promise((resolve, reject) => {
        try {
            const zDate = new Date();
            const year = zDate.getFullYear();
            const month = zDate.getMonth();
            const day = zDate.getDate();

            const localeTime = new Date().toLocaleTimeString().split(":");

            const hours = parseInt(localeTime[0]);
            const minutes = parseInt(localeTime[1]);
            const seconds = parseInt(localeTime[2]);
            const localeDate = new Date(year, month, day, hours, minutes, seconds);

            db.bugForm
                .create({
                    data: { ...values, date: localeDate },
                })
                .then(() => resolve(null))
                .catch((e: unknown) => {
                    if (e instanceof Error) {
                        console.error(`[createForm] Error while creating form:\n\n${e.message}\n`);
                    } else {
                        console.error(`[createForm] Unexpected error:\n\n${e}\n`);
                    }
                    reject(e);
                });
        } catch (e) {
            console.error(`[createForm] Error while creating date:\n\n${e}\n`);
            reject(e);
        }
    });

export const makeDone = async (id: number, done: boolean) => {
    try {
        await db.contactForm.update({
            where: { id },
            data: { done },
        });
    } catch (e) {
        console.error(`[makeDone] Error:\n\n${e}\n`);
    }
};

import { signOut } from '@/auth/auth';

export async function googleSignout() {
    'use server';
    await signOut();
}

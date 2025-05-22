'use server';

import { signOut } from '@/auth/auth';

export async function googleSignout() {
    await signOut();
}

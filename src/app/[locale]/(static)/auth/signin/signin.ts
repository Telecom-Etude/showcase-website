'use server';

import { signIn } from '@/auth/auth';

export async function googleSignin() {
    await signIn('google');
}

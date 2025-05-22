'use server';

import { signIn } from '@/auth/auth';

export async function googleSignin() {
    'use server';
    await signIn('google');
}

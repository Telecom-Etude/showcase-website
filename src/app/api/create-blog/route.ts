import { NextResponse } from 'next/server';

import { auth } from '@/auth/auth';
import { createBlog } from '@/db/blogs';
import { BlogCreationStatus } from '@/lib/blogs';
import { Locale } from '@/locales/config';

/* Function to handle POST requests, but with static types.*/
async function getBlogCreationResponse(
    authorEmail: string,
    title: string,
    locale: Locale
): Promise<{ status: BlogCreationStatus; id?: number }> {
    const session = await auth();
    if (session?.user.email !== authorEmail) {
        return {
            status: BlogCreationStatus.Unauthorised,
        };
    } else {
        return await createBlog(authorEmail, title, locale);
    }
}

/* Function to handle POST requests on the API defined at this route.
 * It tries to create a blog and returns a status if it fails to try and find the issues.
 *
 * @donotrename
 */
export async function POST(request: Request) {
    const { authorEmail, title, locale } = await request.json();
    const response = await getBlogCreationResponse(authorEmail, title, locale);
    return NextResponse.json(response);
}

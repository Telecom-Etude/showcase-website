import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export function getUserName(email: string) {
    const username = email.split("@")[0];
    if (username.includes(".")) {
        return username
            .split(".")
            .map(item => capitalize(item))
            .join(" ");
    } else {
        return capitalize(username);
    }
}

export function getAuthors(authors: string[]) {
    const last = authors[authors.length - 1];
    const beforeLast = authors[authors.length - 2];
    if (authors.length === 0 || !authors[authors.length - 1]) {
        console.error("Error while fetching user data.");
        return "";
    } else if (authors.length === 1 || !authors[authors.length - 2]) {
        const last = authors[authors.length - 1];
        return last;
    } else {
        const last = authors[authors.length - 1];
        const beforeLast = authors[authors.length - 2];
        return authors.reduce((acc, author) => `${acc}${author}, `, "") + `${beforeLast} & ${last}`;
    }
}

export function displayAuthors(locale: Locale, post: { authors: string[]; date: Date }) {
    const t = getDictionary(locale).pages.blog.date;
    return t.posted_by + " " + getAuthors(post.authors) + " " + t.on + " " + post.date.toLocaleDateString();
}

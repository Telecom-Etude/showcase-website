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
    const last = authors.pop();
    const beforeLast = authors.pop();
    if (!last) {
        console.error("Error while fetching user data.");
        return "";
    } else if (!beforeLast) {
        authors.push(last);
        return last;
    } else {
        authors.push(beforeLast);
        authors.push(last);
        return authors.reduce((acc, author) => `${acc}${author}, `, "") + `${beforeLast} & ${last}`;
    }
}

export function displayAuthors(locale: Locale, post: { authors: string[]; date: Date }) {
    const t = getDictionary(locale).pages.blog.date;
    return t.posted_by + " " + getAuthors(post.authors) + " " + t.on + " " + post.date.toLocaleDateString();
}

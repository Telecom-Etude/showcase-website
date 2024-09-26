import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getUserName = (email: string): string => {
    const username = email.split("@")[0];
    if (username.includes(".")) {
        return username
            .split(".")
            .map(item => capitalize(item))
            .join(" ");
    } else {
        return capitalize(username);
    }
};

export const getAuthors = (authors: string[]) => {
    const last = authors.pop();
    const beforeLast = authors.pop();
    if (!last) {
        console.error("Error while fetching user data.");
        return "";
    } else if (!beforeLast) {
        return last;
    } else {
        return authors.reduce((acc, author) => `${acc}${author}, `, "") + `${beforeLast} & ${last}`;
    }
};

export const displayAuthors = (locale: Locale, post: { authors: string[]; date: Date }) => {
    const t = getDictionary(locale).pages.blog.date;
    return t.posted_by + " " + getAuthors(post.authors) + " " + t.on + " " + post.date.toLocaleDateString();
};

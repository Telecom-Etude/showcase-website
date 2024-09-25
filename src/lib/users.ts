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

import { Session } from "next-auth";
import { auth } from "./auth";

export const notExist = (path: string) => false;

export const isProtected = (path: string) => {
    const res = path.startsWith("/admin");
    if (res) {
        console.log(`🔒 isProtected: ${path}`);
    } else {
        console.log(`🔓 isOpen: ${path}`);
    }
    return res;
};

export const notAllowed = (path: string, auth: Session | null) => {
    var allowed = false;
    console.log("Session : ", auth, "PATH : ", path);
    if (auth?.user.rights) {
        switch (path) {
            case "/admin/form-submission":
                console.log("form page");
                allowed = auth.user?.rights.formAdmin || false;
                break;
            case "/admin/users":
                console.log("users page");
                allowed = auth.user?.rights.userAdmin || false;
                break;
        }
    }

    const res = !allowed;
    if (res) {
        console.log(`🚫 notAllowed: ${path}`);
    } else {
        console.log(`✅ allowed: ${path}`);
    }
    return res;
};

import Link from "next/link";

export const EmailContact = ({ rgpd = false, dsi = false, text }: { rgpd?: boolean; dsi?: boolean; text?: string }) => {
    const email = rgpd ? "secretaire.general@telecom-etude.fr" : dsi ? "info.telecom-paris.fr" : "contact@telecom-etude.fr";
    return <Link href={"mailto:" + email}>{text || email}</Link>;
};

import Link from "next/link";

export const EmailContact = ({ text, email = "contact@telecom-etude.fr" }: { text?: string; email?: string }) => (
    <Link href={"mailto:" + email}>{text || email}</Link>
);

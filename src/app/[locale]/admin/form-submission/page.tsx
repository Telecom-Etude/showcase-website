import { auth } from "@/auth/auth";
import { ContactFormType } from "./schema";
import { H1 } from "@/components/styles/titles";
import { DataTable } from "@/components/table/data-table";
import { db } from "@/lib/db";
import { Filter } from "@/components/table/data-table-toolbar";
import { columns } from "./columns";

export default async function FormSubmission() {
    const session = await auth();
    const email = session?.user?.email;
    const submissions: ContactFormType[] = (await db.contactForm.findMany()).map(submission => ({
        ...submission,
        tel: submission.tel || undefined,
        societe: submission.societe || undefined,
        subject: submission.subject || undefined
    }));
    const filters: Filter[] = [];

    return (
        <div className="min-h-screen w-full p-10">
            <H1>Historique des soumissions dans le formulaire de contact</H1>
            <div className="w-full p-10 rounded-lg">
                <DataTable search_column="name" data={submissions} columns={columns} filters={filters} />
            </div>
        </div>
    );
}

import { auth } from "@/auth/auth";
import { ContactFormType } from "./schema";
import { H1 } from "@/components/styles/titles";
import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "@/components/meta-components/table/data-table";

export default async function FormSubmission() {
    const session = await auth();
    const email = session?.user?.email;
    const submissions: ContactFormType[] = (await db.contactForm.findMany()).map(submission => ({
        ...submission,
        tel: submission.tel || undefined,
        societe: submission.societe || undefined,
        subject: submission.subject || undefined
    }));

    return (
        <div className="min-h-screen w-full md:p-10 p-4">
            <div className="text-center lg:text-left">
                <H1>Historique des soumissions dans le formulaire de contact</H1>
            </div>
            <div className="w-full p-10 rounded-lg">
                <DataTable search_column="name" data={submissions} columns={columns} filters={[]} />
            </div>
        </div>
    );
}

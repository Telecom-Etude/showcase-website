import { DataTable } from '@/components/meta-components/table/data-table';
import { db } from '@/lib/db';

import { columns } from './columns';
import { ContactFormType } from './schema';

export default async function FormSubmission() {
    const submissions: ContactFormType[] = (await db.contactForm.findMany()).map((submission) => ({
        ...submission,
        tel: submission.tel || undefined,
        societe: submission.societe || undefined,
        subject: submission.subject || undefined,
    }));

    return (
        <div className="min-h-screen w-full md:p-10 p-4">
            <div className="text-center lg:text-left">
                <h1>Historique des soumissions dans le formulaire de contact</h1>
            </div>
            <div className="w-full p-10 rounded-lg">
                <DataTable search_column="name" data={submissions} columns={columns} filters={[]} />
            </div>
        </div>
    );
}

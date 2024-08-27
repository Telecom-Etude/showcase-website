import React from "react";
import { columns } from "./columns";
import { UserRolesType } from "./schema";
import { PrismaClient } from "@prisma/client";
import { H1 } from "@/components/styles/titles";
import { DataTable } from "@/components/meta-components/table/data-table";

export default async function Users() {
    const prisma = new PrismaClient();
    const users: UserRolesType[] = await prisma.user.findMany();

    return (
        <div className="w-full min-h-screen">
            <H1>Gérer les utilisateurs et leurs permissions</H1>
            <div className="w-full p-10 rounded-lg">
                <DataTable search_column="email" data={users} columns={columns} filters={[]} />
            </div>
        </div>
    );
}

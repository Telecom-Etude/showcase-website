"use client";

import { ColumnDef, Row } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { ContactFormType } from "./schema";
import { useRouter } from "next/navigation";
import React from "react";
import { makeDone } from "@/db/form";
import { DataTableColumnHeader } from "@/components/meta-components/table/data-table-column-header";

const DoneCheck = (row: Row<ContactFormType>) => {
    const router = useRouter();
    return (
        <Checkbox
            checked={row.original.done}
            onCheckedChange={(value: boolean) => {
                makeDone(row.original.id!, value).then(() => {
                    router.refresh();
                });
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
        />
    );
};
const Message = ({ row }: { row: Row<ContactFormType> }) => {
    return (
        <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">{row.getValue("message")}</span>
        </div>
    );
};

export const columns: ColumnDef<ContactFormType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{row.getValue("name")}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{row.getValue("email")}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "done",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Fait" />,
        cell: ({ row }) => DoneCheck(row)
    },
    {
        accessorKey: "societe",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Société" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{row.getValue("societe")}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "tel",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Téléphone" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{row.getValue("tel")}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "subject",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Sujet" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{row.getValue("subject")}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "message",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Message" />,
        cell: ({ row }) => <Message row={row} />
    }
];

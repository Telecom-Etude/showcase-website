"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/meta-components/table/data-table-column-header";
import { ColumnDef, Row } from "@tanstack/react-table";

import { ValidationBlogType } from "./schema";
import { deleteBlog } from "@/db/blogs";

const Delete = ({ row }: { row: Row<ValidationBlogType> }) => {
    const router = useRouter();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link">
                    <FaTrash className="w-6 h-6" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Êtes-vous sur de vouloir suprimer ce post ?</DialogTitle>
                    <DialogDescription>Cette action est irréversible. Toutes les données seront écrasées.</DialogDescription>
                    <DialogFooter>
                        <DialogClose>Annuler</DialogClose>
                        <Button
                            variant="call2action"
                            onClick={() => {
                                deleteBlog(row.original.id).then(() => {
                                    router.refresh();
                                });
                            }}
                        >
                            Supprimer le post
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export const columns: ColumnDef<ValidationBlogType>[] = [
    {
        accessorKey: "emails",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Emails" />,
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue("emails") as string[]).map((email, i) => (
                        <span key={i} className="max-w-[500px] truncate font-medium">
                            {email}
                        </span>
                    ))}
                </div>
            );
        }
    },
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Titre" />,
        cell: ({ row }) => (
            <div className="flex space-x-2">
                <span className="max-w-[500px] truncate font-medium">{row.getValue("title")}</span>
            </div>
        )
    },
    {
        accessorKey: "delete",
        header: () => <span>Supprimer</span>,
        cell: ({ row }) => <Delete row={row} />
    }
];

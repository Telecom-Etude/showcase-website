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
import { BtnLink, EmailBtn } from "@/components/telecom-etude/contact";

const Delete = ({ row }: { row: Row<ValidationBlogType> }) => {
    const router = useRouter();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-foreground">
                    <FaTrash className="w-4 h-4" />
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
                                deleteBlog(row.getValue("id")).then(() => {
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
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="id" />,
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: "emails",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Emails" />,
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue("emails") as string[]).map((email, i) => (
                        <EmailBtn email={email} key={i} />
                    ))}
                </div>
            );
        }
    },
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Titre" />,
        cell: ({ row }) => (
            <BtnLink href={`/validate-blog/${row.getValue("id")}`}>
                <p>{row.getValue("title")}</p>
                <div className="flex space-x-2">
                    <span className="truncate"></span>
                </div>
            </BtnLink>
        )
    },
    {
        accessorKey: "delete",
        header: () => <span>Supprimer</span>,
        cell: ({ row }) => <Delete row={row} />
    }
];

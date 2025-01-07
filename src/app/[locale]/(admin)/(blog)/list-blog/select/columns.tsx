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
import { getUserName } from "@/lib/users";
import { Checkbox } from "@/components/ui/checkbox";

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
        header: ({ column }) => <></>,
        cell: ({ row }) => <></>,
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: "emails",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Auteur" />,
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue("emails") as string[]).map((email: string, i) => (
                        <EmailBtn email={email} text={getUserName(email)} key={i} />
                    ))}
                </div>
            );
        }
    },

    {
        accessorKey: "createdAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Créé le" />,
        cell: ({ row }) => <p>{(row.getValue("createdAt") as Date).toLocaleDateString()}</p>
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Modifié le" />,
        cell: ({ row }) => <p>{(row.getValue("updatedAt") as Date).toLocaleDateString()}</p>
    },
    {
        accessorKey: "validated",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Valider" />,
        cell: ({ row }) => {
            const value: boolean = row.getValue("validated");
            return <Checkbox className="cursor-not-allowed" checked={value} contentEditable={false} />;
        }
    },
    {
        accessorKey: "delete",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Supprimer" />,
        cell: ({ row }) => <Delete row={row} />,
        enableSorting: false
    },
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Titre" />,
        cell: ({ row }) => (
            <BtnLink href={`/list-blog/${row.getValue("id")}`}>
                <p>{row.getValue("title")}</p>
                <div className="flex space-x-2">
                    <span className="truncate"></span>
                </div>
            </BtnLink>
        )
    }
];

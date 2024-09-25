"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteUser, makeBlogAdmin, makeBlogAuthor, makeFormAdmin, makeUserAdmin } from "@/db/users";
import { DataTableColumnHeader } from "@/components/meta-components/table/data-table-column-header";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { UserRolesType } from "./schema";
import { getUserName } from "@/lib/users";

const ActionCheckBox = ({
    row,
    column,
    func
}: {
    row: Row<UserRolesType>;
    column: keyof UserRolesType;
    func: (email: string, value: boolean) => Promise<boolean>;
}) => {
    const email = row.original.email!;
    const router = useRouter();
    return (
        <div className="w-full flex justify-center">
            <Checkbox
                checked={row.original[column] as boolean}
                onCheckedChange={(value: boolean) => {
                    func(email, value).then(() => {
                        router.refresh();
                    });
                }}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        </div>
    );
};

const Delete = ({ row }: { row: Row<UserRolesType> }) => {
    const router = useRouter();
    return (
        <Dialog>
            <DialogTrigger className="w-full" asChild>
                <Button variant="link" className="w-full flex justify-center text-je-orange">
                    <FaTrash className="w-6 h-6" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Êtes-vous sur de vouloir suprimer ce compte ?</DialogTitle>
                    <DialogDescription>Cette action est irréversible. Toutes les données seront écrasées.</DialogDescription>
                    <DialogFooter>
                        <DialogClose>Annuler</DialogClose>
                        <Button
                            variant="call2action"
                            onClick={() => {
                                deleteUser(row.original.email).then(() => {
                                    router.refresh();
                                });
                            }}
                        >
                            Supprimer l&apos;utilisateur
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export const columns: ColumnDef<UserRolesType>[] = [
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">{getUserName(row.original.email)}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "blogAdmin",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Administrateur Blog" />,
        cell: ({ row }) => <ActionCheckBox row={row} column={"blogAdmin"} func={makeBlogAdmin} />
    },
    {
        accessorKey: "userAdmin",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Administrateur Utilisateurs" />,
        cell: ({ row }) => <ActionCheckBox row={row} column={"userAdmin"} func={makeUserAdmin} />
    },
    {
        accessorKey: "formAdmin",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Administrateur Forms" />,
        cell: ({ row }) => <ActionCheckBox row={row} column={"formAdmin"} func={makeFormAdmin} />
    },
    {
        accessorKey: "blogAuthor",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Auteur Blog" />,
        cell: ({ row }) => <ActionCheckBox row={row} column={"blogAuthor"} func={makeBlogAuthor} />
    },
    {
        accessorKey: "delete",
        header: () => <span>Supprimer</span>,
        cell: ({ row }) => <Delete row={row} />
    }
];

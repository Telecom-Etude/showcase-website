"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import type { Op } from "quill/core";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MdLabel } from "react-icons/md";
import { DisplayItems, ManyComboBox } from "@/components/meta-components/combobox";
import { useEffect, useState } from "react";
import { getBlog, renameBlog } from "@/db/blogs";
import { DbLabels, updatePostLabels } from "@/db/labels";
import { toast } from "@/components/ui/use-toast";
import { Locale } from "@/locales/config";

const Rename = ({ title, id, router }: { title: string; id: number; router: AppRouterInstance }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <span className="flex items-center space-x-2">
                    <p>Renommer</p>
                    <FaPencil />
                </span>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Modification du titre du post</DialogTitle>
                <form
                    className="flex flex-col items-center w-full space-y-10"
                    onSubmit={e => {
                        const formData = new FormData(e.target as HTMLFormElement);
                        const title = formData.get("title") as string;
                        renameBlog(id, title).finally(() => {
                            router.refresh();
                        });
                    }}
                >
                    <Label htmlFor="title" className="w-full">
                        Titre
                    </Label>
                    <Input defaultValue={title} className="w-full" type="text" name="title" id="title" />
                    <Button variant="call2action" type="submit">
                        Renommer
                    </Button>
                </form>
            </DialogHeader>
        </DialogContent>
    </Dialog>
);

const AddLabel = ({ getLabels, addRemoveLabel, dbLabels }: { getLabels: string[]; addRemoveLabel: (x: string) => void; dbLabels: string[] }) => (
    <ManyComboBox
        selected={getLabels}
        addRemove={addRemoveLabel}
        items={dbLabels}
        vocab={{
            title: "Modifier les labels",
            selectorMessage: "Selectionner au plus 6 labels",
            empty: "Aucun filtre ne correspond à cette recherche"
        }}
        limit={6}
    />
);

const OpenSave = ({ saving }: { saving: boolean }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <span className="flex items-center space-x-2">
                    {saving ? (
                        <>
                            <p>Sauvegarde en cours</p>
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        </>
                    ) : (
                        <>
                            <p>Sauvegardé</p>
                            <FaCheck />
                        </>
                    )}
                </span>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader className="space-y-6">
                <DialogTitle>Sauvegarde automatique des posts</DialogTitle>
                <DialogDescription className="flex items-center flex-col">
                    Une sauvegarde automatique s&apos;effectue en permanence pour éviter les pertes de données. Comme elles peuvent prendre du temps, vous
                    pouvez faire une sauvegarde manuelle avant de quitter la page avec le bouton &ldquo;Sauvegarder&rdquo;. Spammer ce bouton ne sert à rien,
                    juste peut entraîner des crash.
                </DialogDescription>
                <DialogFooter className="text-destructive">
                    ATTENTION: ne quittez pas la page tant que le status n&apos;est pas marqué en &ldquo;Sauvegardé&rdquo; au risque de perdre votre contenu...
                </DialogFooter>
            </DialogHeader>
        </DialogContent>
    </Dialog>
);

interface ActionProps {
    readonly content: Op[];
    readonly value: string;
    readonly setToBeChanged: (_: boolean) => void;
    readonly title: string;
    readonly id: number;
    readonly dbLabels: string[];
    readonly blogLabels: string[];
    readonly locale: Locale;
}

export const Actions = ({ setToBeChanged, content, value, title, id, dbLabels, blogLabels, locale }: ActionProps) => {
    const [getLabels, setLabels] = useState<string[]>(blogLabels);
    const addRemoveLabel = (label: string) => {
        var newLabels = getLabels;
        if (getLabels.includes(label)) {
            newLabels = getLabels.filter(l => l !== label);
        } else if (getLabels.length < 6) {
            newLabels.push(label);
        }
        setLabels(newLabels);
        console.log("NEWLABELS", JSON.stringify(newLabels));
        console.log("GETLABELS", JSON.stringify(getLabels));

        updatePostLabels(newLabels, id, locale).finally(() => {
            getBlog(id).then(post => console.log("DBLABELS ", JSON.stringify(post?.labels)));
        });
    };

    const router = useRouter();

    return (
        <>
            <div className="p-6 flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setToBeChanged(true);
                        }}
                    >
                        <span className="flex items-center space-x-2">
                            <p>Sauvergarder</p>
                            <FaSave />
                        </span>
                    </Button>
                    <Rename id={id} title={title} router={router} />
                    <AddLabel addRemoveLabel={addRemoveLabel} dbLabels={dbLabels} getLabels={getLabels} />
                </div>
                <div>
                    <OpenSave saving={JSON.stringify(content) !== value} />
                </div>
            </div>
            {/* <div className="pb-4">
                <DisplayItems items={getLabels} removeItem={addRemoveLabel} />
            </div> */}
        </>
    );
};

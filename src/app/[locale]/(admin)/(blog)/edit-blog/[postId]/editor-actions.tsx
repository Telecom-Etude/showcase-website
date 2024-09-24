import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { renameLocaleBlog } from "@/db/blogs";
import { useRouter } from "next/navigation";
import type { Op } from "quill/core";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MdLabel } from "react-icons/md";
import { ManyComboBox } from "@/components/meta-components/combobox";
import { useState } from "react";

const Rename = ({ title, localeBlogId, router }: { title: string; localeBlogId: number; router: AppRouterInstance }) => (
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
                        renameLocaleBlog(localeBlogId, title).finally(() => {
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

const AddLabel = ({ dbLabels, router, blogId }: { blogId: number; dbLabels: string[]; router: AppRouterInstance }) => {
    const [getLabels, setLabels] = useState<string[]>(dbLabels);
    const addRemoveLabel = (label: string) => {
        if (getLabels.includes(label)) {
            setLabels(labels => labels.filter(l => l !== label));
        } else {
            setLabels(labels => {
                labels.push(label);
                return labels;
            });
        }
    };
    const items: { [key: string]: string } = {};

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <span className="flex items-center space-x-2">
                        <p>Ajouter des labels</p>
                        <MdLabel />
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ajouter des labels</DialogTitle>
                    <ManyComboBox
                        selectedKeys={getLabels}
                        addRemoveKey={addRemoveLabel}
                        items={items}
                        vocab={{ title: "Choisir des labels", selectorMessage: "Selectionner au plus 6 labels" }}
                        limit={6}
                    />
                    <ul className="p-2">
                        {getLabels.map((label, i) => (
                            <li key={i}>{label}</li>
                        ))}
                    </ul>
                    <Button variant="call2action" type="submit" onClick={}>
                        Valider
                    </Button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

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
                    Une sauvegarde automatique s&apos;effectue en permanence pour éviter les pertes de données. Cependant, elles peuvent être longue donc je
                    vous conseille de sauvegarder manuellement - avec le bouton de sauvegarde - avant de quitter la page.
                </DialogDescription>
                <DialogFooter>
                    ATTENTION: ne quittez pas la page tant que le status n&apos;est pas marqué en &ldquo;Sauvegardé&rdquo; au risque de perdre votre contenu...
                </DialogFooter>
            </DialogHeader>
        </DialogContent>
    </Dialog>
);

interface ActionProps {
    content: Op[];
    value: string;
    setToBeChanged: (_: boolean) => void;
    localeBlogId: number;
    title: string;
    blogId: number;
    dbLabels: string[];
}

export const Actions = ({ setToBeChanged, content, value, localeBlogId, title, blogId, dbLabels }: ActionProps) => {
    const router = useRouter();
    return (
        <div className="p-6 flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={() => {}}>
                    <span className="flex items-center space-x-2">
                        <p>Traduire</p>
                        <TfiWorld />
                    </span>
                </Button>
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
                <Rename localeBlogId={localeBlogId} title={title} router={router} />
                <AddLabel dbLabels={dbLabels} blogId={blogId} router={router} />
            </div>
            <div>
                <OpenSave saving={JSON.stringify(content) !== value} />
            </div>
        </div>
    );
};

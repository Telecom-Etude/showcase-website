import { Button } from "@/components/ui/button";
import { Op } from "quill/core";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaCross, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ActionProps {
    content: Op[];
    value: string;
    toBeChanged: boolean;
    setToBeChanged: (_: boolean) => void;
    localeBlogId: number;
    title: string;
}

export const Actions = ({ toBeChanged, setToBeChanged, content, value, localeBlogId, title }: ActionProps) => {
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
                <Rename localeBlogId={localeBlogId} title={title} />
            </div>
            <div>
                <OpenSave saving={JSON.stringify(content) !== value} />
            </div>
        </div>
    );
};

const Rename = ({ title, localeBlogId }: { title: string; localeBlogId: number }) => (
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
                {/* <DialogDescription> */}
                <form className="flex flex-col items-center w-full space-y-10" onSubmit={e => console.log(e.target)}>
                    <Label htmlFor="title" className="w-full">
                        Titre
                    </Label>
                    <Input defaultValue={title} className="w-full" type="text" name="title" id="title" />
                    <Button variant="call2action" type="submit">
                        Renommer
                    </Button>
                </form>
                {/* </DialogDescription> */}
            </DialogHeader>
        </DialogContent>
    </Dialog>
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

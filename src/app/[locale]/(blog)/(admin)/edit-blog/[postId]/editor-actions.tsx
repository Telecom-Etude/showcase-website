"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import type { Op } from "quill/core";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ManyComboBox } from "@/components/meta-components/combobox";
import { useState } from "react";
import { getBlog, renameBlog } from "@/db/blogs";
import { updatePostLabels } from "@/db/labels";
import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { usePathname } from "next/navigation";
import { isLocale } from "@/locales/config";

function Rename({ title, id, router, t, locale }: { title: string; id: number; router: AppRouterInstance; t: any; locale: Locale }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <span className="flex items-center space-x-2">
                        <p>{t.rename.rename}</p>
                        <FaPencil />
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t.rename.modifytitle}</DialogTitle>
                    <form
                        className="flex flex-col items-center w-full space-y-10"
                        onSubmit={e => {
                            const formData = new FormData(e.target as HTMLFormElement);
                            const title = formData.get("title") as string;
                            renameBlog(id, title, locale).finally(() => {
                                router.refresh();
                            });
                        }}
                    >
                        <Label htmlFor="title" className="w-full">
                            {t.rename.title}
                        </Label>
                        <Input defaultValue={title} className="w-full" type="text" name="title" id="title" />
                        <Button variant="call2action" type="submit">
                            {t.rename.rename}
                        </Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

function AddLabel({ getLabels, addRemoveLabel, dbLabels, t }: { getLabels: string[]; addRemoveLabel: (x: string) => void; dbLabels: string[]; t: any }) {
    return (
        <ManyComboBox
            selected={getLabels}
            addRemove={addRemoveLabel}
            items={dbLabels}
            vocab={{
                title: t.labels.modifylabels,
                selectorMessage: t.labels.selectlabels,
                empty: t.labels.empty,
            }}
            limit={6}
        />
    );
}

function OpenSave({ saving, t }: { saving: boolean; t: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <span className="flex items-center space-x-2">
                        {saving ? (
                            <>
                                <p>{t.save.saving}</p>
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            </>
                        ) : (
                            <>
                                <p>{t.save.saved}</p>
                                <FaCheck />
                            </>
                        )}
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="space-y-6">
                    <DialogTitle>{t.save.automaticsave}</DialogTitle>
                    <DialogDescription className="flex items-center flex-col">{t.save.savedescription}</DialogDescription>
                    <DialogFooter className="text-destructive">{t.save.savewarning}</DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

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

export function Actions({ setToBeChanged, content, value, title, id, dbLabels, blogLabels, locale }: ActionProps) {
    const localepage = usePathname().split("/")[1] as Locale;
    const t = getDictionary(localepage).navigation.admin.editblog;
    const [getLabels, setLabels] = useState<string[]>(blogLabels);
    const addRemoveLabel = (label: string) => {
        var newLabels = getLabels;
        if (getLabels.includes(label)) {
            newLabels = getLabels.filter(l => l !== label);
        } else if (getLabels.length < 6) {
            newLabels.push(label);
        }
        setLabels(newLabels);

        updatePostLabels(newLabels, id, locale).finally(() => {
            getBlog(id).then(post => {
                if (process.env.DEV_MODE) console.log("DBLABELS ", JSON.stringify(post?.labels));
            });
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
                            <p>{t.save.save}</p>
                            <FaSave />
                        </span>
                    </Button>
                    <Rename id={id} title={title} router={router} t={t} locale={locale} />
                    <AddLabel addRemoveLabel={addRemoveLabel} dbLabels={dbLabels} getLabels={getLabels} t={t} />
                </div>
                <div>
                    <OpenSave saving={JSON.stringify(content) !== value} t={t} />
                </div>
            </div>
            {/* <div className="pb-4">
                <DisplayItems items={getLabels} removeItem={addRemoveLabel} />
            </div> */}
        </>
    );
}

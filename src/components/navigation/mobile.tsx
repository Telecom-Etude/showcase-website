"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FullLogo } from "../telecom-etude/logos";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Links } from "./links";
import { Locale } from "@/locales/config";

export const MobileNavBar = ({ locale }: { locale: Locale }) => {
    const [deployed, setDeployed] = useState(false);
    const close = () => setDeployed(false);
    return (
        <>
            <div className="flex justify-between border-b-[1px] border-primary">
                <Button asChild variant="ghost" className="p-2" onClick={() => close()}>
                    <Link href="/" className="flex justify-start px-0 py-0">
                        <FullLogo />
                    </Link>
                </Button>
                <Button variant="ghost" className="p-2" onClick={() => setDeployed(d => !d)}>
                    <Menu className="text-primary" />
                </Button>
            </div>
            {deployed && <Links className="flex flex-col max-w-[100px] m-auto" locale={locale} />}
        </>
    );
};

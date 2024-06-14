import { Button } from "../ui/button";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { MobileNavBar } from "./mobile";
import { Links } from "./links";

export const NavBar = () => (
    <div className="sticky z-10 top-0 bg-background">
        <div className="hidden md:flex justify-between border-b-[1px] border-primary">
            <Button asChild variant="ghost" className="rounded-none px-0 py-0">
                <Link href="/" className="flex justify-start px-0 py-0">
                    <FullLogo />
                </Link>
            </Button>
            <Links buttonStyle="rounded-none" />
        </div>
        <div className="md:hidden">
            <MobileNavBar />
        </div>
    </div>
);

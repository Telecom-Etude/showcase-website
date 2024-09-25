import { Button } from "@/components/ui/button";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SingleLink } from "./get-links";

export const ContactButton = ({ link }: { link: SingleLink }) => (
    <Button asChild variant="call2action" className="rounded-none group/buttoncontact ">
        <NavigationMenuItem className="pt-0 pb-0 pl-0 pr-0">
            <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className="flex space-x-2 items-center  px-4 h-full">
                    <p>{link.title}</p>
                    <FaArrowRight className="group-hover/buttoncontact:animate-bounce-x" />
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    </Button>
);

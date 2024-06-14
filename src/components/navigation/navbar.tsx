import { Button } from "@/components/ui/button";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { MobileNavBar } from "../../../.test/mobile";

const NavBarItem = ({ href, title }: { href: string; title: string }) => (
  <Button asChild variant="ghost" className="rounded-none">
    <Link href={href}>{title}</Link>
  </Button>
);

export const NavBar = () => (
  <nav className="flex justify-between border-b-[1px] border-primary">
    <Button asChild variant="ghost" className="rounded-none">
      <Link href="/" className="flex justify-start px-0 py-0">
        <FullLogo />
      </Link>
    </Button>
    <div>
      <NavBarItem href="/about" title="À propos" />
      <NavBarItem href="/offer" title="Notre offre" />
      <NavBarItem href="/assos" title="Nos engagements" />
      <NavBarItem href="/blog" title="Actualités" />
      <NavBarItem href="/faq" title="FAQ" />
      <Button className="rounded-none">
        <Link href="/contact" className="flex items-center space-x-2">
          <p>Contact</p>
          <FaArrowRight />
        </Link>
      </Button>
    </div>
  </nav>
);

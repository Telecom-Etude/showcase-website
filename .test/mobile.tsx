"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FullLogo } from "../src/components/telecom-etude/logos";
import { useState } from "react";
import { Menu } from "lucide-react";

export const MobileNavBar = () => {
  const [deployed, setDeployed] = useState(false);
  const close = () => setDeployed(false);
  return (
    <div className="md:hidden">
      <div className="flex justify-between border-b-[1px] border-primary">
        <Button asChild variant="ghost" className="p-2" onClick={() => close()}>
          <Link href="/" className="flex justify-start px-0 py-0">
            <FullLogo />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setDeployed((d) => !d)}
        >
          <Menu className="text-primary" />
        </Button>
      </div>
      {deployed && <p>qreioktgfds^slqkfsfvcx</p>}
    </div>
  );
};

import Image from "next/image";
import logo from "@/../public/icons/logo-bird-text.svg";

export const FullLogo = () => (
  <Image src={logo} alt="Logo Telecom Etude" className="h-full w-auto" />
);

import TelecomParis from "@/../public/images/global/tp.jpeg";
import GroupPhoto from "@/../public/images/global/group_photo.jpg";
import Image from "next/image";
import { H1 } from "@/components/styles/titles";

export default function Home() {
    return (
        <>
            <Image src={TelecomParis} alt="Photo Telecom Paris" layout="fill" objectFit="cover" className="absolute h-dvh w-full top-0 z-10" />

            <div className="overflow-auto z-20">
                <div className="relative h-screen">
                    <div className="flex lg:flex-row flex-col items-center h-full max-w-[2000px]">
                        <div className="flex lg:w-1/3 flex-col items-center justify-center">
                            <h1 className="text-4xl">Telecom Etude</h1>
                            <p>La Junior-Entreprise du numérique</p>
                        </div>
                        <Image src={GroupPhoto} alt="Photo Mandat Telecom Etude" className="flex flex-2 items-center justify-center lg:w-2/3" />
                    </div>
                </div>
                <div className="h-[300px] border-2">À propos</div>
                <div className="h-[300px] border-2">À propos</div>
                <div className="h-[300px] border-2">À propos</div>
                <div className="h-[300px] border-2">À propos</div>
            </div>
        </>
    );
}

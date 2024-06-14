import TelecomParis from "@/../public/images/global/tp.jpeg";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex-grow overflow-auto">
            <div className="relative h-screen">
                <Image src={TelecomParis} alt="Photo Telecom Paris" layout="fill" objectFit="cover" />
            </div>
            <div className="h-[300px] border-2">A propos</div>
            <div className="h-[300px] border-2">A propos</div>
            <div className="h-[300px] border-2">A propos</div>
            <div className="h-[300px] border-2">A propos</div>
        </div>
    );
}

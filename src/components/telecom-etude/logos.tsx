import Image from 'next/image';
import fullLogo from '@/../public/icons/logo-bird-text.svg';
import birdLogo from '@/../public/icons/logo-bird.svg';

export const FullLogo = () => (
    <Image src={fullLogo} alt="Logo Telecom Etude" className="h-full w-auto" priority />
);

export const BirdLogo = () => (
    <Image
        src={birdLogo}
        alt="Logo Telecom Etude"
        width={555}
        height={555}
        className="h-full w-auto"
    />
);

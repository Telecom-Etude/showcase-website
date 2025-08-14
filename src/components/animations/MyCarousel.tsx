'use client';

import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export default function MyCarousel({ opinions }) {
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    return (
        <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[autoplay.current]}
            className="h-[300px] rounded-lg w-full group"
        >
            <CarouselContent>
                {opinions.map((opinion, i) => (
                    <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3">
                        <div className="bg-navigation h-[300px] rounded-lg flex flex-col px-5 py-4 ">
                            <div className="flex-1 flex text-center break-words overflow-y-auto">
                                {opinion.text}
                            </div>
                            <div className="mt-4 text-right text-sm italic">{opinion.author}</div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CarouselNext className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Carousel>
    );
}

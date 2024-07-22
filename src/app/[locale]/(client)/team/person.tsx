"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppearOnScroll } from "@/components/animations/scroll";

import { Alt } from "./page";

interface PersonProps {
    alt: Alt;
    image: StaticImageData;
    name: string;
    t: { job: string; text: string };
    linkedin: string;
}

export function Person({ image, name, t, alt, linkedin }: PersonProps) {
    const [isHovered, setHover] = useState(false);
    return (
        <AppearOnScroll>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{t.job}</CardDescription>
                </CardHeader>
                <CardContent onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {isHovered ? <p>{t.text}</p> : <Image src={image} alt={alt.before + " " + name + ", " + t.job + " " + alt.after} />}
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </AppearOnScroll>
    );
}

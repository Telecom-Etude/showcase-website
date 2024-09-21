"use client";

import { Paragraphs } from "@/components/styles/texts";
import { Pointer } from "lucide-react";
import React, { MouseEventHandler, useState } from "react";

const STEPS = ["Prise de contact", "Pré-étude", "Mission", "Finialisation"];
const TEXTS = [
    [
        "Vous nous contactez pour nous expliquer votre projet. Vous pouvez nous contacter en nous envoyant un mail à contact@telecom-etude.fr ou en remplissant le formulaire de contact."
    ],
    [
        "Lors de la pré-étude, nous faisons une réunion pour définir clairement vos attentes et besoins. Nous sélectionnons ensuite un intervenant expert dans le domaine correspondant à vos besoins. Une Convention d'Étude vous est ensuite envoyée. C'est le document qui pose le cadre légal et qui définit le cahier des chargers."
    ],
    ["Pendant la mission, nous restons en contact pour vous tenir au courant de l'avancement de l'étude."],
    ["Une fois la mission réaliée, vous effectuez le paiment, nous vous rendons le livrable final, et nous vons envoyons un questionnaire de satisfaction."]
];

export const OfferGraphic = () => {
    const [selectedZone, setSelectedZone] = useState<number>(1);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 500, y: 0 });
    const [previousX, setPreviousX] = useState<number>(500);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = e => {
        setHovered(true);
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        setMousePosition({ x: x <= 2 ? 0 : x >= 498 ? 500 : x, y });
        handleMouseClick(e);
    };

    const handleMouseClick: MouseEventHandler<HTMLDivElement> = () => {
        const nb = (4 * mousePosition.x) / 500;
        const zone = Math.ceil(nb === 0 ? 1 : nb);
        setSelectedZone(zone);
    };

    const gradientColor = `linear-gradient(to right, var(--destructive), var(--primary) ${previousX}px, var(--muted), var(--muted) ${mousePosition.x}px)`;

    React.useEffect(() => {
        setPreviousX(mousePosition.x);
    }, [mousePosition]);

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="flex items-center p-10">
                <div
                    onMouseMove={handleMouseMove}
                    // onClick={handleMouseClick}
                    className="flex w-[500px] h-[50px] cursor-col-resize relative"
                    style={{ backgroundImage: gradientColor }}
                >
                    {[1, 2, 3, 4].map(i => (
                        <div
                            key={i}
                            className={`absolute left-[calc(${i}*100px)] h-full w-0 border-[1px] ${mousePosition.x >= i * 100 ? "border-muted" : "border-destructive"}`}
                        />
                    ))}
                    {!hovered && <Pointer className="m-auto text-muted" />}
                </div>
                <div
                    className="w-0 h-0 
                    border-l-[100px] border-l-primary
                    border-t-[50px] border-t-transparent
                    border-b-[50px]
                    border-b-transparent"
                ></div>
            </div>
            {JSON.stringify(mousePosition)}
            <h3 >{STEPS[selectedZone - 1]}</h3>
            <Paragraphs className="max-w-[500px] text-center" paragraphs={TEXTS[selectedZone - 1]} />
        </>
    );
};

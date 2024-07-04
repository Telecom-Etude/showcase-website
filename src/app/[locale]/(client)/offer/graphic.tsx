"use client";

import { BtnLink, EmailContact } from "@/components/telecom-etude/contact";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const STEPS = ["Prise de contact", "Pré-étude", "Mission", "Finalisation"];
const TEXTS = [
    <p key={0}>
        Vous nous contactez pour nous expliquer votre projet. Vous pouvez nous contacter en nous envoyant un mail à <EmailContact underline /> ou en remplissant
        le{" "}
        <BtnLink href="/contact" underline>
            formulaire de contact
        </BtnLink>
        . Nous traiterons ensuite votre demande et retournerons vers vous le plus rapidement possible.
    </p>,
    <p key={1}>
        Après la prise de contact, la mission passe en &laquo; Pré-étude &raquo;. Lors de cette étape, nous faisons une réunion pour définir clairement vos
        attentes et besoins. Nous sélectionnons ensuite un intervenant - un étudiant de Télécom Paris - expert dans le domaine correspondant à votre demande.
        Une Convention d&apos;Étude vous est ensuite envoyée. C&apos;est le document qui pose le cadre légal de l&apos;étude et qui définit le cahier des
        chargers.
    </p>,
    <p key={2}>
        Pendant la mission, nous restons en contact pour vous tenir au courant de l&apos;avancement de l&apos;étude. En fonction de vos envies et besoins, nous
        faisons des réunions avec vous et l&apos;intervenant et mettons en place un moyen de communication rapide.
    </p>,
    <p key={3}>
        Une fois la mission réaliée, nous faisons une réunion pour vous présenter le livrable. Ensuite, vous signez le Procès Verbal de Recette Final, qui vous
        engage à payer. Après cette étape seulement, vous recevrez le livrable finale. Vous possédez toujours une période de garantie. Un questionnaire de
        satisfaction vous est envoyé.
    </p>
];

export const OfferGraphic = () => {
    const gradientColor = `linear-gradient(to right, var(--destructive), var(--primary) 100px, var(--muted), var(--muted) 200px)`;
    const [currentStep, setCurrentStep] = useState<number>(0);
    return (
        <>
            <div className="flex items-center p-10 ">
                <div
                    className="flex from-destructive to-primary via-primary relative bg-gradient-to-r"
                    // style={{ backgroundImage: "linear-gradient(to right, var(--destructive), var(--primary) 100px, var(--muted), var(--muted) 200px)" }}
                >
                    {STEPS.map((step: string, i: number) => (
                        <Button
                            key={i}
                            variant="ghost"
                            className="rounded-none hover:bg-hatched hover:text-background hover:underline"
                            onMouseEnter={() => setCurrentStep(i)}
                            // className={`bg-blue-500 border-8 ${i % 2 === 0 ? "border-red-800" : "border-green-800"} h-full w-0`}
                            // style={{ left: `calc(${i} * 100px)` }}
                        >
                            {step}
                        </Button>
                    ))}
                </div>
                <div
                    className="w-0 h-0 
                    border-l-[100px] border-l-primary
                    border-t-[50px] border-t-transparent
                    border-b-[50px]
                    border-b-transparent"
                ></div>
            </div>
            {TEXTS[currentStep]}
        </>
    );
};

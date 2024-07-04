// import BoxLine from "./box-line";
import { cn } from "@/lib/utils";
import { OfferGraphic } from "./graphic";
import { blockCn } from "@/components/styles/blocks";

export default function Offer() {
    return (
        <div className="flex flex-col items-center space-y-8 p-8">
            <header className="flex flex-col items-center space-y-2 p-2">
                <h1 className="text-4xl">Notre offre</h1>
                <p className="text-xl">Ce que nous vous proposons</p>
            </header>
            <section className={cn(blockCn, "flex flex-col items-center space-y-2 p-2")}>
                <h2 className="text-3xl">Déroulement d&apos;une étude</h2>
                <OfferGraphic />
            </section>
        </div>
    );
}

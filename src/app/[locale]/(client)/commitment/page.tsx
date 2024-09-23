import { Locale, LocaleParams } from "@/locales/config";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Block } from "@/components/styles/blocks";
import { Separator } from "@/components/ui/separator";

interface Card {
    title: string;
    content: string;
}

const educationalEngagements: Card[] = [
    {
        title: "Apprentissage par projet",
        content:
            "Telecom Etude permet aux étudiants de Télécom Paris de s'insérer plus facilement dans le monde professionnel. En effet, Telecom Etude rétribue les étudiants de Télécom Paris pour qu&apos;ils réalisent des projets dans leur domaine de compétences, dans tous les aspects du numérique"
    },
    {
        title: "Formation continue",
        content:
            "Praesent imperdiet justo sed enim commodo, in varius velit laoreet. Nullam viverra dui ligula, sed dictum nunc pellentesque ac. Nulla auctor aliquet sodales. Morbi consectetur varius ex vel feugiat. Vestibulum ut lacinia purus. Donec felis urna, dictum eget ante at, hendrerit fringilla tortor. Nulla vel quam vitae urna dignissim tempus. Vestibulum tristique placerat nisi, at accumsan magna pulvinar id. Ut dignissim nulla eget tortor tempor, a hendrerit nibh dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius ligula tortor, id ultrices metus pretium nec. Vestibulum sodales ornare."
    }
];

const associationEngagements: Card[] = [
    {
        title: "Jamais Sans Elles",
        content:
            "Praesent imperdiet justo sed enim commodo, in varius velit laoreet. Nullam viverra dui ligula, sed dictum nunc pellentesque ac. Nulla auctor aliquet sodales. Morbi consectetur varius ex vel feugiat. Vestibulum ut lacinia purus. Donec felis urna, dictum eget ante at, hendrerit fringilla tortor. Nulla vel quam vitae urna dignissim tempus. Vestibulum tristique placerat nisi, at accumsan magna pulvinar id. Ut dignissim nulla eget tortor tempor, a hendrerit nibh dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius ligula tortor, id ultrices metus pretium nec. Vestibulum sodales ornare."
    },
    {
        title: "Charte RSE",
        content:
            "Praesent imperdiet justo sed enim commodo, in varius velit laoreet. Nullam viverra dui ligula, sed dictum nunc pellentesque ac. Nulla auctor aliquet sodales. Morbi consectetur varius ex vel feugiat. Vestibulum ut lacinia purus. Donec felis urna, dictum eget ante at, hendrerit fringilla tortor. Nulla vel quam vitae urna dignissim tempus. Vestibulum tristique placerat nisi, at accumsan magna pulvinar id. Ut dignissim nulla eget tortor tempor, a hendrerit nibh dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius ligula tortor, id ultrices metus pretium nec. Vestibulum sodales ornare."
    }
];

function Cards({ cards }: { cards: Card[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
            {cards.map(({ title, content }, i) => (
                <Card key={i} className="m-6">
                    <CardHeader>
                        <CardTitle className="text-xl w-full text-center pb-2">{title}</CardTitle>
                        <Separator />
                    </CardHeader>
                    <CardContent>
                        <p>{content}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default function Commitment({ params: { locale } }: LocaleParams) {
    return (
        <Block>
            <header className="w-full h-[400px] max-h-dvh flex flex-col items-center justify-center space-y-4">
                <h1 className="font-bold">Nos engagements</h1>
                <p className="text-lg max-w-[500px] text-center">
                    Telecom Etude est une association qui permet aux étudiants de développer des compétences techniques et de la connaissance du monde
                    professionnel. Nous avons des engagements autant dans notre préstation que dans divers domaines, avec des chartes d&apos;engagement.
                </p>
            </header>
            <section className="flex flex-col items-center  justify-center">
                <h2 className="font-bold">Engagements de préstation</h2>
                <Cards cards={educationalEngagements} />
            </section>
            <section className="flex flex-col items-center justify-center">
                <h2 className="font-bold">Chartes d&apos;engagement</h2>
                <Cards cards={associationEngagements} />
            </section>
        </Block>
    );
}

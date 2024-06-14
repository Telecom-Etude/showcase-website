import Image, { StaticImageData } from "next/image";
import { Fragment, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GroupPhoto from "@/../public/images/global/group_photo.jpg";
import TP from "@/../public/images/global/tp.jpeg";
import CNJE from "@/../public/images/global/cnje_text.png";
import AFNOR from "@/../public/images/global/afnor.png";
import { Separator } from "@/components/ui/separator";

const Text = ({ title, children }: { title: string | ReactNode; children: ReactNode }) => (
    <section className="flex flex-col pb-10 justify-evenly h-full items-center space-y-4 text-lg">
        <h2 className="text-3xl">{title}</h2>
        {children}
    </section>
);

const TextImage = ({ title, pars, imageSrc, imageAlt }: { title: string | ReactNode; pars: ReactNode; imageSrc: StaticImageData; imageAlt: string }) => (
    <div className="flex flex-col xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
        <div className="xl:w-1/2">
            <Text title={title}>{pars}</Text>
        </div>
        <div className="xl:w-1/2">
            <Image src={imageSrc} alt={imageAlt} className="w-auto m-auto max-h-[300px]" />
        </div>
    </div>
);
const ImageText = ({ title, pars, imageSrc, imageAlt }: { title: string | ReactNode; pars: ReactNode; imageSrc: StaticImageData; imageAlt: string }) => (
    <div className="flex flex-col xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
        <div className="xl:hidden">
            <Text title={title}>{pars}</Text>
        </div>
        <div className="xl:w-1/2">
            <Image src={imageSrc} alt={imageAlt} className="w-auto m-auto max-h-[300px]" />
        </div>
        <div className="xl:block hidden w-1/2">
            <Text title={title}>{pars}</Text>
        </div>
    </div>
);

export default function About() {
    return (
        <>
            <h1 className="text-4xl max-w-[800px] p-10 m-auto">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">Telecom Etude&nbsp;:</strong> la
                Junior-Entreprise du numérique et de la data.
            </h1>
            <TextImage
                title="Notre JE"
                imageSrc={GroupPhoto}
                imageAlt="Mandat Telecom Etude"
                pars={
                    <>
                        <p>
                            Telecom Etude est la Junior Entreprise (JE) de Télécom Paris, <strong>première école du numérique</strong> en France, et propose à
                            ses clients l&apos;expertise de plusieurs centaines d&apos;étudiants.
                        </p>
                        <p>
                            Choisir notre JE, c&apos;est avant tout travailler avec une <strong>équipe réactive et disponible</strong>. Vous développerez vos
                            projets avec des étudiants de Télécom Paris, compétents, motivés et qui auront choisi de s&apos;investir dans cette mission.
                        </p>
                        <Button variant="call2action">
                            <Link href="/contact">Notre mandat</Link>
                        </Button>
                    </>
                }
            />
            <Separator />
            <ImageText
                title={<>Notre école&nbsp;: Télécom Paris</>}
                imageSrc={TP}
                imageAlt="Photo Telecom Paris"
                pars={
                    <>
                        <p>
                            Choisir Télécom Paris, c&apos;est choisir la Junior-Entreprise de
                            <ul>
                                <li>La 1ère école d&apos;ingénieur du numérique (Le Figaro 2021)</li>
                                <li>
                                    La <strong>1ère école pour la proximité avec les entreprises</strong>, et la 2ème école d&apos;ingénieur au classement
                                    général (L&apos;Etudiant 2022)
                                </li>
                                <li>
                                    La <strong>6ème &ldquo;small university&rdquo; au monde</strong> (Times Higher Education World University Ranking 2021)
                                </li>
                            </ul>
                        </p>
                    </>
                }
            />
            <Separator />
            <TextImage
                title={<>Notre école&nbsp;: Télécom Paris</>}
                imageSrc={TP}
                imageAlt="Photo Telecom Paris"
                pars={
                    <>
                        <p>
                            Choisir Télécom Paris, c&apos;est choisir la Junior-Entreprise de
                            <ul>
                                <li>La 1ère école d&apos;ingénieur du numérique (Le Figaro 2021)</li>
                                <li>
                                    La <strong>1ère école pour la proximité avec les entreprises</strong>, et la 2ème école d&apos;ingénieur au classement
                                    général (L&apos;Etudiant 2022)
                                </li>
                                <li>
                                    La <strong>6ème &ldquo;small university&rdquo; au monde</strong> (Times Higher Education World University Ranking 2021)
                                </li>
                            </ul>
                        </p>
                    </>
                }
            />
            <Separator />
            <ImageText
                title="Une JE de qualité"
                imageSrc={AFNOR}
                imageAlt=""
                pars={
                    <p>
                        <ul>
                            <li>Un taux de satisfaction de nos de clients de plus de 97%.</li>
                            <li>Telecom Etude est l&apos;une des eules Junior-Entreprises à être certifiée AFNOR ISO&nbsp;9001.</li>
                            <li>Nous obtenus la mention &quot;Satisfait&quot; de la CNJE (la meilleure mention) depuis plusieurs années</li>
                        </ul>
                    </p>
                }
            ></ImageText>
            <Separator />
            <TextImage
                title={<>Notre objectif&nbsp;: votre satisfaction</>}
                imageSrc={CNJE}
                imageAlt="Logo CNJE"
                pars={
                    <>
                        <p>
                            Depuis sa création, la CNJE œuvre pour promouvoir la marque Junior-Entreprise afin qu&apos;elle reste un{" "}
                            <strong>gage de qualité</strong>. Pour cela, elle décerne des labels qualité aux structures méritoires, et met en place des
                            audits-conseils annuels. La CNJE fournit l&apos;assurance que nos administrateurs ou chefs de projet reçoivent les formations
                            adéquates pour proposer à nos clients <strong>formalisme et efficacité</strong>.
                        </p>
                    </>
                }
            />
        </>
    );
}

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Button, VariantLink } from "@/components/ui/button";
import Link from "next/link";
import GroupPhoto from "@/../public/images/global/group_photo.jpg";
import TP from "@/../public/images/global/tp.jpeg";
import CNJE from "@/../public/images/global/cnje_text.png";
import AFNOR from "@/../public/images/global/afnor.png";
import ICP from "@/../public/images/logo.webp";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Text = ({ title, children }: { title: string | ReactNode; children: ReactNode }) => (
    <section className="flex flex-col pb-10 justify-evenly h-full items-center space-y-4 text-lg">
        <h2 className="text-3xl">{title}</h2>
        {children}
    </section>
);

const SideImage = ({ src, alt, className, ...props }: { src: StaticImageData; alt: string; className?: string }) => (
    <Image src={src} alt={alt} className={cn("w-auto m-auto max-h-[300px] rounded-2xl", className)} {...props} />
);

const TopLeft = ({ title, pars, right }: { title: string | ReactNode; pars: ReactNode; right: ReactNode }) => (
    <div className="flex flex-col justify-center items-center xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
        <div className="xl:w-1/2">
            <Text title={title}>{pars}</Text>
        </div>
        <div className="xl:w-1/2">{right} </div>
    </div>
);
const TopRight = ({ title, pars, left }: { title: string | ReactNode; pars: ReactNode; left: ReactNode }) => (
    <div className="flex flex-col justify-center items-center xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
        <div className="xl:hidden">
            <Text title={title}>{pars}</Text>
        </div>
        <div className="xl:w-1/2">{left} </div>
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
            <TopLeft
                right={<SideImage src={GroupPhoto} alt="Mandat Telecom Etude" />}
                title="Notre JE"
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
                        <VariantLink variant="call2action" href="/team" className="flex items-center space-x-2 text-xl p-2">
                            <p>Notre mandat</p>
                            <ArrowRight />
                        </VariantLink>
                    </>
                }
            />
            <Separator />
            <TopRight
                left={<SideImage src={TP} alt="Photo Telecom Paris" />}
                title={<>Notre école&nbsp;: Télécom Paris</>}
                pars={
                    <>
                        <p>Choisir Télécom Paris, c&apos;est choisir la Junior-Entreprise de</p>
                        <ul className=" ">
                            <li>La 1ère école d&apos;ingénieur du numérique (Le Figaro 2021)</li>
                            <li>
                                La <strong>1ère école pour la proximité avec les entreprises</strong>, et la 2ème école d&apos;ingénieur au classement général
                                (L&apos;Etudiant 2022)
                            </li>
                            <li>
                                La <strong>6ème &ldquo;small university&rdquo; au monde</strong> (Times Higher Education World University Ranking 2021)
                            </li>
                        </ul>
                    </>
                }
            />
            <Separator />
            <TopLeft
                right={<SideImage src={AFNOR} alt="Logo AFNOR" />}
                title="Une JE de qualité"
                pars={
                    <ul>
                        <li className="text-xl text-center p-4">Un taux de satisfaction de nos de clients de plus de 97%.</li>
                        <li className="text-xl text-center p-4">Une des seules Junior-Entreprises à être certifiée AFNOR ISO&nbsp;9001.</li>
                        <li className="text-xl text-center p-4">Nous avons la meilleure mention &quot;Satisfait&quot; de la CNJE depuis plusieurs années.</li>
                    </ul>
                }
            />
            <Separator />
            <TopRight
                left={<SideImage src={CNJE} alt="Logo CNJE" />}
                title={<>Notre objectif&nbsp;: votre satisfaction</>}
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
            <Separator />
            <TopLeft
                right={
                    <div className="flex flex-col space-y-10 items-center justify-between">
                        <SideImage src={ICP} alt="Logo IESEG Conseil Paris" className="bg-[#151f2a]" />
                        <VariantLink variant="call2action" href="/ieseg" className="flex items-center space-x-2 text-xl p-2">
                            <p>Plus d&apos;informations</p>
                            <ArrowRight />
                        </VariantLink>
                    </div>
                }
                title="Une présentation commune"
                pars={
                    <>
                        <p>
                            <strong>IESEG Conseil Paris et Telecom Etude</strong> s&apos;associent pour offrir des services complets en combinant leurs
                            expertises en ingénierie et en gestion. Cette collaboration permet de proposer des solutions innovantes et adaptées aux besoins
                            spécifiques des entreprises, allant de l&apos;évaluation de la faisabilité technique à la mise en place de stratégies de croissance
                            digitale.
                        </p>
                        <p>
                            Grâce à cette synergie, IESEG Conseil et Telecom Etude fournissent des analyses approfondies et des recommandations stratégiques,
                            tout en développant des outils sur mesure tels que des{" "}
                            <strong>chatbots, des applications, des plateformes web ou des modèles d&apos;intelligence artificielle.</strong>
                        </p>
                        <p>
                            Cette double présentation combine <strong>l&apos;expertise en conseil</strong> d&apos;IESEG Conseil avec les{" "}
                            <strong>compétences technologiques</strong> de Telecom Etude, offrant ainsi des solutions robustes et personnalisées pour vous
                            accompagner dans votre transformation digitale et votre croissance.
                        </p>
                    </>
                }
            />
        </>
    );
}

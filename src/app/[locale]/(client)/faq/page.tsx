import { Paragraphs } from "@/components/styles/texts";
import { EmailContact } from "@/components/telecom-etude/contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

interface FaqItem {
    question: string;
    answer: string[];
}

const questions = [
    {
        question: "Qu'est-ce qu'une Junior-Entreprise ?",
        answer: [
            "Une Junior-Entreprise est une association d'étudiants à but pédagogique et non lucratif qui propose des services professionnels dans leur domaine d'études. Dans le cas de Telecom Etude, nous vendons des services dans le domaine du numérique, princpalement dans les domaines de la data, du développement, de la cybersécurité, du traitement d'image et du marketing."
        ]
    },
    {
        question: "Comment fonctionnent-elles ?",
        answer: [
            "Elles fonctionnent par missions. Vous nous soumettez un projet et nous réalisons une proposition. Une fois la proposition acceptée, nous réalisons sélectionnons un intervenant parmi un peu moins de 1000 élèves-ingénieurs par les compétences particulères nécessitées par la mission. C'est cet intervenant qui réalisera le projet que vous nous soumettez."
        ]
    },
    {
        question: "Par qui sera réalisé mon projet ?",
        answer: [
            "Nous sélectionnons soigneusement un étudiant de Télécom Paris qui a les compétences particulières nécessaires pour réaliser la mission. Dans une majorité des cas, l'intervenant suit des filières de niveau master ou plus élevé dans le domaine en plus de connaissances personnelles qu'il/elle a pu acquérir."
        ]
    },
    {
        question: "Pourquoi nous choisir ?",
        answer: [
            "Vous devriez nous choisir pour notre expertise dans notre domaine, notre réactivité à vos contacts et notre dévouement à fournir un excellent service. En plus de cela, nous sommes la Junior-Entreprise de la première école du numériquee en France, ce qui fait de nous la Junior-Entreprise de choix pour toute mission dans les domaines connexes."
        ]
    },
    {
        question: "Comment se déroule une mission?",
        answer: [
            "Une mission commence par une discussion avec le client pour comprendre ses besoins, puis nous vous proposons une offre commerciale. Après des réunions pour bien connaitre vos besoins, nous sélectionnons un intervenant compétent qui va réalisé la mission. Le client est tenu informé tout au long du processus."
        ]
    }
];

export default function FAQ() {
    return (
        <div className="p-10 space-y-10">
            <h1 className="text-4xl text-center">Foire aux Questions</h1>
            <p className="text-center max-w-[1000px] m-auto">
                {" "}
                Voici les réponses aux questions que vous pourriez vous poser. N&apos;hésitez pas à nous contacter à <EmailContact /> ou en remplissant ce form{" "}
                <Link href="/contact"></Link> si vous avez d&apos;autres questions ou pour avoir plus d&apos;informations.
            </p>
            <Accordion type="single" collapsible className="w-full">
                {questions.map((item: FaqItem, idx: number) => (
                    <AccordionItem value={idx.toString()} key={idx} className="shadow-lg m-2">
                        <AccordionTrigger className="border-[1px] border-primary px-4">{item.question}</AccordionTrigger>
                        <AccordionContent className="p-4">
                            <Paragraphs paragraphs={item.answer} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

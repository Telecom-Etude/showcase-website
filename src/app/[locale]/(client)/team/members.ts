import Manon from "@/../public/images/members/Manon.jpg";
import Rémy from "@/../public/images/members/Rémy.jpg";
import Tasnim from "@/../public/images/members/Tasnim.jpg";
import Kevin from "@/../public/images/members/Kevin.jpg";
import Leïla from "@/../public/images/members/Leïla.jpg";
import Rahma from "@/../public/images/members/Rahma.jpg";
import Sacha from "@/../public/images/members/Sacha.jpg";
import AntoineQ from "@/../public/images/members/AntoineQ.jpg";
import Ikrame from "@/../public/images/members/Ikrame.jpg";
import Titouan from "@/../public/images/members/Titouan.jpg";
import Chahinez from "@/../public/images/members/Chahinez.jpg";
import Yacine from "@/../public/images/members/Yacine.jpg";
import Thomas from "@/../public/images/members/Thomas.jpg";
import Fouad from "@/../public/images/members/Fouad.jpg";
import Alexander from "@/../public/images/members/Alexander.jpg";
import Luc from "@/../public/images/members/Luc.jpg";
import Lyla from "@/../public/images/members/Lyla.jpg";
import Myriam from "@/../public/images/members/Myriam.jpg";
import Jennifer from "@/../public/images/members/Jennifer.jpg";
import Tom from "@/../public/images/members/Tom.jpg";
import Nicolas from "@/../public/images/members/Nicolas.jpg";
import Sarah from "@/../public/images/members/Sarah.jpg";
import Thibaud from "@/../public/images/members/Thibaud.jpg";
import Julien from "@/../public/images/members/Julien.jpg";
import Axel from "@/../public/images/members/Axel.jpg";
import Luka from "@/../public/images/members/Luka.jpg";
import Nathan from "@/../public/images/members/Nathan.jpg";
import Edwin from "@/../public/images/members/Edwin.jpg";
import Victor from "@/../public/images/members/Victor.jpg";
import VincentH from "@/../public/images/members/VincentH.jpg";
import AntoineH from "@/../public/images/members/AntoineH.jpg";
import Lauren from "@/../public/images/members/Lauren.jpg";

import { Dictionary } from "@/locales/dictionaries";
import { StaticImageData } from "next/image";
export interface PersonProps {
    name: string;
    linkedin?: string;
    image: StaticImageData;
    id: keyof Dictionary["pages"]["team"]["members"];
}

export interface DepartmentProps {
    id: keyof Dictionary["pages"]["team"]["poles"];
    members: PersonProps[];
}

export const DEPARTMENTS: DepartmentProps[] = [
    {
        id: "board",
        members: [
            {
                id: "prez", // id is to find the translations
                name: "Manon Strasser",
                image: Manon
            },
            {
                id: "trez",
                name: "Rémy Fayet",
                image: Rémy
            },
            {
                id: "vicetrez",
                name: "Tasnim Drissi",
                image: Tasnim
            },
            {
                id: "vpe",
                name: "Kevin Garnier",
                image: Kevin
            },
            {
                id: "secge",
                name: "Leïla Iksil",
                image: Leïla
            },
            {
                id: "dirco",
                name: "Rahma Loukil",
                image: Rahma
            },
            {
                id: "vpi",
                name: "Sacha Radovanovic",
                image: Sacha
            }
        ]
    },
    {
        id: "devco",
        members: [
            {
                id: "respodevco",
                name: "Antoine Quint",
                image: AntoineQ
            },
            {
                id: "international",
                name: "Ikrame Amallah",
                image: Ikrame
            },
            {
                id: "alumni",
                name: "Titouan Vasnier",
                image: Titouan
            },
            {
                id: "appel",
                name: "Chahinez Abbas",
                image: Chahinez
            },
            {
                id: "devco",
                name: "Yacine Khalil",
                image: Yacine
            },
            {
                id: "devco",
                name: "Thomas Lucereau",
                image: Thomas
            },
            {
                id: "devco",
                name: "Fouad Khelifi",
                image: Fouad
            }
        ]
    },
    {
        id: "auditqua",
        members: [
            {
                id: "respoquality",
                name: "Alexander Hare",
                image: Alexander
            },
            {
                id: "respoaudit",
                name: "Luc Kreucher",
                image: Luc
            },
            {
                id: "templates",
                name: "Lyla Demange",
                image: Lyla
            },
            {
                id: "audit",
                name: "Myriam Lebatteux",
                image: Myriam
            },
            {
                id: "processus",
                name: "Jennifer Timani",
                image: Jennifer
            }
        ]
    },
    {
        id: "info",
        members: [
            {
                id: "respoinfo",
                name: "Tom Webber",
                image: Tom
            },
            {
                id: "info",
                name: "Nicolas Besson",
                image: Nicolas
            }
        ]
    },
    {
        id: "com",
        members: [
            {
                id: "respocom",
                name: "Sarah Dos Santos",
                image: Sarah
            },
            {
                id: "cominterne",
                name: "Thibaud Chasteauneuf",
                image: Thibaud
            },
            {
                id: "insta",
                name: "Julien Waxweiler",
                image: Julien
            },
            {
                id: "linkedin",
                name: "Axel Guimbault",
                image: Axel
            }
        ]
    },
    {
        id: "suivi",
        members: [
            {
                id: "resposuivi",
                name: "Luka Judas",
                image: Luka
            },
            {
                id: "formations",
                name: "Nathan Casanova",
                image: Nathan
            },
            {
                id: "selectionCDP",
                name: "Edwin Feneux",
                image: Edwin
            },
            {
                id: "suivi",
                name: "Victor Deru",
                image: Victor
            }
        ]
    },
    {
        id: "event",
        members: [
            {
                id: "respoevent",
                name: "Vincent Houlné",
                image: VincentH
            },
            {
                id: "pots",
                name: "Antoine Heitzmann",
                image: AntoineH
            },
            {
                id: "teambuildings",
                name: "Lauren Calvosa",
                image: Lauren
            }
        ]
    }
] as const;

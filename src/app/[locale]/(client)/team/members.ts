import { Dictionary } from "@/locales/dictionaries";

export interface PersonProps {
    imageCn: string;
    name: string;
    linkedin?: string;
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
                imageCn: "bg-[url(../../public/images/members/Manon.jpg)]", // render the image as background
                name: "Manon Strasser"
            },
            {
                id: "trez",
                imageCn: "bg-[url(../../public/images/members/Rémy.jpg)]",
                name: "Rémy Fayet"
            },
            {
                id: "vicetrez",
                imageCn: "bg-[url(../../public/images/members/Tasnim.jpg)]",
                name: "Tasnim Drissi"
            },
            {
                id: "vpe",
                imageCn: "bg-[url(../../public/images/members/Kevin.jpg)]",
                name: "Kevin Garnier"
            },
            {
                id: "secge",
                imageCn: "bg-[url(../../public/images/members/Leïla.jpg)]",
                name: "Leïla Iksil"
            },
            {
                id: "dirco",
                imageCn: "bg-[url(../../public/images/members/Rahma.jpg)]",
                name: "Rahma Loukil"
            },
            {
                id: "vpi",
                imageCn: "bg-[url(../../public/images/members/Sacha.jpg)]",
                name: "Sacha Radovanovic"
            }
        ]
    },
    {
        id: "devco",
        members: [
            {
                id: "respodevco",
                imageCn: "bg-[url(../../public/images/members/AntoineQ.jpg)]",
                name: "Antoine Quint"
            },
            {
                id: "international",
                imageCn: "bg-[url(../../public/images/members/Ikrame.jpg)]",
                name: "Ikrame Amallah"
            },
            {
                id: "alumni",
                imageCn: "bg-[url(../../public/images/members/Titouan.jpg)]",
                name: "Titouan Vasnier"
            },
            {
                id: "appel",
                imageCn: "bg-[url(../../public/images/members/Chahinez.jpg)]",
                name: "Chahinez Abbas"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/Yacine.jpg)]",
                name: "Yacine Khalil"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/Thomas.jpg)]",
                name: "Thomas Lucereau"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/Fouad.jpg)]",
                name: "Fouad Khelifi"
            }
        ]
    },
    {
        id: "auditqua",
        members: [
            {
                id: "respoquality",
                imageCn: "bg-[url(../../public/images/members/Alexander.jpg)]",
                name: "Alexander Hare"
            },
            {
                id: "respoaudit",
                imageCn: "bg-[url(../../public/images/members/Luc.jpg)]",
                name: "Luc Kreucher"
            },
            {
                id: "templates",
                imageCn: "bg-[url(../../public/images/members/Lyla.jpg)]",
                name: "Lyla Demange"
            },
            {
                id: "audit",
                imageCn: "bg-[url(../../public/images/members/Myriam.jpg)]",
                name: "Myriam Lebatteux"
            },
            {
                id: "processus",
                imageCn: "bg-[url(../../public/images/members/Jennifer.jpg)]",
                name: "Jennifer Timani"
            }
        ]
    },
    {
        id: "info",
        members: [
            {
                id: "respoinfo",
                imageCn: "bg-[url(../../public/images/members/Tom.jpg)]",
                name: "Tom Webber"
            },
            {
                id: "info",
                imageCn: "bg-[url(../../public/images/members/Nicolas.jpg)]",
                name: "Nicolas Besson"
            }
        ]
    },
    {
        id: "com",
        members: [
            {
                id: "respocom",
                imageCn: "bg-[url(../../public/images/members/Sarah.jpg)]",
                name: "Sarah Dos Santos"
            },
            {
                id: "cominterne",
                imageCn: "bg-[url(../../public/images/members/Thibaud.jpg)]",
                name: "Thibaud Chasteauneuf"
            },
            {
                id: "insta",
                imageCn: "bg-[url(../../public/images/members/Julien.jpg)]",
                name: "Julien Waxweiler"
            },
            {
                id: "linkedin",
                imageCn: "bg-[url(../../public/images/members/Axel.jpg)]",
                name: "Axel Guimbault"
            }
        ]
    },
    {
        id: "suivi",
        members: [
            {
                id: "resposuivi",
                imageCn: "bg-[url(../../public/images/members/Luka.jpg)]",
                name: "Luka Judas"
            },
            {
                id: "formations",
                imageCn: "bg-[url(../../public/images/members/Nathan.jpg)]",
                name: "Nathan Casanova"
            },
            {
                id: "selectionCDP",
                imageCn: "bg-[url(../../public/images/members/Edwin.jpg)]",
                name: "Edwin Feneux"
            },
            {
                id: "suivi",
                imageCn: "bg-[url(../../public/images/members/Victor.jpg)]",
                name: "Victor Deru"
            }
        ]
    },
    {
        id: "event",
        members: [
            {
                id: "respoevent",
                imageCn: "bg-[url(../../public/images/members/VincentH.jpg)]",
                name: "Vincent Houlné"
            },
            {
                id: "pots",
                imageCn: "bg-[url(../../public/images/members/AntoineH.jpg)]",
                name: "Antoine Heitzmann"
            },
            {
                id: "teambuildings",
                imageCn: "bg-[url(../../public/images/members/Lauren.jpg)]",
                name: "Lauren Calvosa"
            }
        ]
    }
] as const;

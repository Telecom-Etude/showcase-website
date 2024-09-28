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
                imageCn: "bg-[url(../../public/images/members-croped/Manon.jpg)]", // render the image as background
                name: "Manon Strasser"
            },
            {
                id: "trez",
                imageCn: "bg-[url(../../public/images/members-croped/Rémy.jpg)]",
                name: "Rémy Fayet"
            },
            {
                id: "vicetrez",
                imageCn: "bg-[url(../../public/images/members-croped/Tasnim.jpg)]",
                name: "Tasnim Drissi"
            },
            {
                id: "vpe",
                imageCn: "bg-[url(../../public/images/members-croped/Kevin.jpg)]",
                name: "Kevin Garnier"
            },
            {
                id: "secge",
                imageCn: "bg-[url(../../public/images/members-croped/Leïla.jpg)]",
                name: "Leïla Iksil"
            },
            {
                id: "dirco",
                imageCn: "bg-[url(../../public/images/members-croped/Rahma.jpg)]",
                name: "Rahma Loukil"
            },
            {
                id: "vpi",
                imageCn: "bg-[url(../../public/images/members-croped/Sacha.jpg)]",
                name: "Sacha Radovanovic"
            }
        ]
    },
    {
        id: "devco",
        members: [
            {
                id: "respodevco",
                imageCn: "bg-[url(../../public/images/members-croped/AntoineQ.jpg)]",
                name: "Antoine Quint"
            },
            {
                id: "international",
                imageCn: "bg-[url(../../public/images/members-croped/Ikrame.jpg)]",
                name: "Ikrame Amallah"
            },
            {
                id: "alumni",
                imageCn: "bg-[url(../../public/images/members-croped/Titouan.jpg)]",
                name: "Titouan Vasnier"
            },
            {
                id: "appel",
                imageCn: "bg-[url(../../public/images/members-croped/Chahinez.jpg)]",
                name: "Chahinez Abbas"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members-croped/Yacine.jpg)]",
                name: "Yacine Khalil"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members-croped/Thomas.jpg)]",
                name: "Thomas Lucereau"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members-croped/Fouad.jpg)]",
                name: "Fouad Khelifi"
            }
        ]
    },
    {
        id: "auditqua",
        members: [
            {
                id: "respoquality",
                imageCn: "bg-[url(../../public/images/members-croped/Alexander.jpg)]",
                name: "Alexander Hare"
            },
            {
                id: "respoaudit",
                imageCn: "bg-[url(../../public/images/members-croped/Luc.jpg)]",
                name: "Luc Kreucher"
            },
            {
                id: "templates",
                imageCn: "bg-[url(../../public/images/members-croped/Lyla.jpg)]",
                name: "Lyla Demange"
            },
            {
                id: "audit",
                imageCn: "bg-[url(../../public/images/members-croped/Myriam.jpg)]",
                name: "Myriam Lebatteux"
            },
            {
                id: "processus",
                imageCn: "bg-[url(../../public/images/members-croped/Jennifer.jpg)]",
                name: "Jennifer Timani"
            }
        ]
    },
    {
        id: "info",
        members: [
            {
                id: "respoinfo",
                imageCn: "bg-[url(../../public/images/members-croped/Tom.jpg)]",
                name: "Tom Webber"
            },
            {
                id: "info",
                imageCn: "bg-[url(../../public/images/members-croped/Nicolas.jpg)]",
                name: "Nicolas Besson"
            }
        ]
    },
    {
        id: "com",
        members: [
            {
                id: "respocom",
                imageCn: "bg-[url(../../public/images/members-croped/Sarah.jpg)]",
                name: "Sarah Dos Santos"
            },
            {
                id: "cominterne",
                imageCn: "bg-[url(../../public/images/members-croped/Thibaud.jpg)]",
                name: "Thibaud Chasteauneuf"
            },
            {
                id: "insta",
                imageCn: "bg-[url(../../public/images/members-croped/Julien.jpg)]",
                name: "Julien Waxweiler"
            },
            {
                id: "linkedin",
                imageCn: "bg-[url(../../public/images/members-croped/Axel.jpg)]",
                name: "Axel Guimbault"
            }
        ]
    },
    {
        id: "suivi",
        members: [
            {
                id: "resposuivi",
                imageCn: "bg-[url(../../public/images/members-croped/Luka.jpg)]",
                name: "Luka Judas"
            },
            {
                id: "formations",
                imageCn: "bg-[url(../../public/images/members-croped/Nathan.jpg)]",
                name: "Nathan Casanova"
            },
            {
                id: "selectionCDP",
                imageCn: "bg-[url(../../public/images/members-croped/Edwin.jpg)]",
                name: "Edwin Feneux"
            },
            {
                id: "suivi",
                imageCn: "bg-[url(../../public/images/members-croped/Victor.jpg)]",
                name: "Victor Deru"
            }
        ]
    },
    {
        id: "event",
        members: [
            {
                id: "respoevent",
                imageCn: "bg-[url(../../public/images/members-croped/VincentH.jpg)]",
                name: "Vincent Houlné"
            },
            {
                id: "pots",
                imageCn: "bg-[url(../../public/images/members-croped/AntoineH.jpg)]",
                name: "Antoine Heitzmann"
            },
            {
                id: "teambuildings",
                imageCn: "bg-[url(../../public/images/members-croped/Lauren.jpg)]",
                name: "Lauren Calvosa"
            }
        ]
    }
] as const;

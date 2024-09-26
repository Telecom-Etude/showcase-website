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
                imageCn: "bg-[url(../../public/images/members/A7S00045.jpg)]", // render the image as background
                name: "Manon Strasser"
            },
            {
                id: "trez",
                imageCn: "bg-[url(../../public/images/members/DSC07395.jpg)]",
                name: "Rémy Fayet"
            },
            {
                id: "vicetrez",
                imageCn: "bg-[url(../../public/images/members/DSC07436.jpg)]",
                name: "Tasnim Drissi"
            },
            {
                id: "vpe",
                imageCn: "bg-[url(../../public/images/members/DSC07565.jpg)]",
                name: "Kevin Garnier"
            },
            {
                id: "secge",
                imageCn: "bg-[url(../../public/images/members/DSC07361.jpg)]",
                name: "Leïla Iksil"
            },
            {
                id: "dirco",
                imageCn: "bg-[url(../../public/images/members/DSC07499.jpg)]",
                name: "Rahma Loukil"
            },
            {
                id: "vpi",
                imageCn: "bg-[url(../../public/images/members/A7S00056.jpg)]",
                name: "Sacha Radovanovic"
            }
        ]
    },
    {
        id: "devco",
        members: [
            {
                id: "respodevco",
                imageCn: "bg-[url(../../public/images/members/DSC07389.jpg)]",
                name: "Antoine Quint"
            },
            {
                id: "international",
                imageCn: "bg-[url(../../public/images/members/DSC07513.jpg)]",
                name: "Ikrame Amallah"
            },
            {
                id: "alumni",
                imageCn: "bg-[url(../../public/images/members/A7S00007.jpg)]",
                name: "Titouan Vasnier"
            },
            {
                id: "appel",
                imageCn: "bg-[url(../../public/images/members/DSC07524.jpg)]",
                name: "Chahinez Abbas"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/DSC07431.jpg)]",
                name: "Yacine Khalil"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/DSC07491.jpg)]",
                name: "Thomas Lucereau"
            },
            {
                id: "devco",
                imageCn: "bg-[url(../../public/images/members/DSC07426.jpg)]",
                name: "Fouad Khelifi"
            }
        ]
    },
    {
        id: "auditqua",
        members: [
            {
                id: "respoquality",
                imageCn: "bg-[url(../../public/images/members/DSC07479.jpg)]",
                name: "Alexander Hare"
            },
            {
                id: "respoaudit",
                imageCn: "bg-[url(../../public/images/members/DSC07537.jpg)]",
                name: "Luc Kreucher"
            },
            {
                id: "templates",
                imageCn: "bg-[url(../../public/images/members/DSC07541.jpg)]",
                name: "Lyla Demange"
            },
            {
                id: "audit",
                imageCn: "bg-[url(../../public/images/members/DSC07460.jpg)]",
                name: "Myriam Lebatteux"
            },
            {
                id: "processus",
                imageCn: "bg-[url(../../public/images/members/DSC07420.jpg)]",
                name: "Jennifer Timani"
            }
        ]
    },
    {
        id: "info",
        members: [
            {
                id: "respoinfo",
                imageCn: "bg-[url(../../public/images/members/A7S00026.jpg)]",
                name: "Tom Webber"
            },
            {
                id: "info",
                imageCn: "bg-[url(../../public/images/members/DSC07404.jpg)]",
                name: "Nicolas Besson"
            }
        ]
    },
    {
        id: "com",
        members: [
            {
                id: "respocom",
                imageCn: "bg-[url(../../public/images/members/DSC07351.jpg)]",
                name: "Sarah Dos Santos"
            },
            {
                id: "cominterne",
                imageCn: "bg-[url(../../public/images/members/A7S00027.jpg)]",
                name: "Thibaud Chasteauneuf"
            },
            {
                id: "insta",
                imageCn: "bg-[url(../../public/images/members/DSC07407.jpg)]",
                name: "Julien Waxweiler"
            },
            {
                id: "linkedin",
                imageCn: "bg-[url(../../public/images/members/DSC07399.jpg)]",
                name: "Axel Guimbault"
            }
        ]
    },
    {
        id: "suivi",
        members: [
            {
                id: "resposuivi",
                imageCn: "bg-[url(../../public/images/members/DSC07443.jpg)]",
                name: "Luka Judas"
            },
            {
                id: "formations",
                imageCn: "bg-[url(../../public/images/members/A7S00024.jpg)]",
                name: "Nathan Casanova"
            },
            {
                id: "selectionCDP",
                imageCn: "bg-[url(../../public/images/members/DSC07450.jpg)]",
                name: "Edwin Feneux"
            },
            {
                id: "suivi",
                imageCn: "bg-[url(../../public/images/members/A7S00019.jpg)]",
                name: "Victor Deru"
            }
        ]
    },
    {
        id: "event",
        members: [
            {
                id: "respoevent",
                imageCn: "bg-[url(../../public/images/members/DSC07569.jpg)]",
                name: "Vincent Houlné"
            },
            {
                id: "pots",
                imageCn: "bg-[url(../../public/images/members/A7S00035.jpg)]",
                name: "Antoine Heitzmann"
            },
            {
                id: "teambuildings",
                imageCn: "bg-[url(../../public/images/members/DSC07546.jpg)]",
                name: "Lauren Calvosa"
            }
        ]
    }
] as const;

import { StaticImageData } from 'next/image';

import Adrien from '@/../public/images/members/adrien.webp';
import Allan from '@/../public/images/members/allan.webp';
import Augustin from '@/../public/images/members/augustin.webp';
import BaptisteD from '@/../public/images/members/baptiste_d.webp';
import BaptisteL from '@/../public/images/members/baptiste_l.webp';
import Elisa from '@/../public/images/members/elisa.webp';
import Eya from '@/../public/images/members/eya.webp';
import Florian from '@/../public/images/members/florian.webp';
import Francois from '@/../public/images/members/francois.webp';
import Gaspard from '@/../public/images/members/gaspard.webp';
import GuillaumeRa from '@/../public/images/members/guillaume_raquin.webp';
import GuillaumeRo from '@/../public/images/members/guillaume_rogron.webp';
import GwendalD from '@/../public/images/members/gwendal_d.webp';
import GwendalG from '@/../public/images/members/gwendal_g.webp';
import Léonie from '@/../public/images/members/leonie.webp';
import Livio from '@/../public/images/members/livio.webp';
import MarcH from '@/../public/images/members/marc_h.webp';
import MarcJ from '@/../public/images/members/marc_j.webp';
import Milan from '@/../public/images/members/milan.webp';
import Philibert from '@/../public/images/members/philibert.webp';
import Pierre from '@/../public/images/members/pierre.webp';
import Quentin from '@/../public/images/members/quentin.webp';
import Wassim from '@/../public/images/members/wassim.webp';
import Yael from '@/../public/images/members/yael.webp';

import { Dictionary } from '@/locales/dictionaries';

export interface PersonProps {
    name: string;
    linkedin?: string;
    image: StaticImageData;
    id: keyof Dictionary['pages']['team']['members'];
}

interface DepartmentProps {
    id: keyof Dictionary['pages']['team']['poles'];
    members: PersonProps[];
}

export const DEPARTMENTS: DepartmentProps[] = [
    {
        id: 'board',
        members: [
            {
                id: 'prez', // id is to find the translations
                name: 'Adrien Bertrand',
                image: Adrien,
            },
            {
                id: 'trez',
                name: 'Baptiste Drouillet',
                image: BaptisteD,
            },
            {
                id: 'dirco',
                name: 'Milan Simeon',
                image: Milan,
            },
            {
                id: 'vpi',
                name: 'Gwendal Deleage',
                image: GwendalD,
            },
            {
                id: 'vpo',
                name: 'Léonie Moreau',
                image: Léonie,
            },
            {
                id: 'secge',
                name: 'Baptiste Lefebvre',
                image: BaptisteL,
            },
            {
                id: 'vicetrez',
                name: 'Quentin Negrel',
                image: Quentin,
            },
        ],
    },
    {
        id: 'auditqua',
        members: [
            {
                id: 'respoquality',
                name: 'Augustin Boyer',
                image: Augustin,
            },
            {
                id: 'respoaudit',
                name: 'Guillaume Rogron',
                image: GuillaumeRo,
            },
            {
                id: 'templates',
                name: 'Pierre Neillo',
                image: Pierre,
            },
            {
                id: 'risque',
                name: 'Eya Mami',
                image: Eya,
            },
            {
                id: 'marque',
                name: 'Marc Justo',
                image: MarcJ,
            },
        ],
    },
    {
        id: 'devco',
        members: [
            {
                id: 'respodevco',
                name: 'Florian Roos',
                image: Florian,
            },
            {
                id: 'alumni',
                name: 'Yaël Mutenfu',
                image: Yael,
            },
            {
                id: 'alumni',
                name: 'Wassim Smati',
                image: Wassim,
            },
            {
                id: 'appel',
                name: 'Guillaume Raquin',
                image: GuillaumeRa,
            },
        ],
    },
    {
        id: 'comcom',
        members: [
            {
                id: 'coco',
                name: 'Gaspard Vibert',
                image: Gaspard,
            },
        ],
    },
    {
        id: 'com',
        members: [
            {
                id: 'respocom',
                name: 'Elisa Augier',
                image: Elisa,
            },
            {
                id: 'cominterne',
                name: 'Philibert Pierson de B.',
                image: Philibert,
            },
        ],
    },
    {
        id: 'info',
        members: [
            {
                id: 'respoinfo',
                name: 'Livio Personne',
                image: Livio,
            },
            {
                id: 'info',
                name: 'Allan Villars',
                image: Allan,
            },
        ],
    },
    {
        id: 'event',
        members: [
            {
                id: 'respoevent',
                name: 'Marc Hébert',
                image: MarcH,
            },
            {
                id: 'fete',
                name: 'François De Coatpont',
                image: Francois,
            },
            {
                id: 'teambuildings',
                name: 'Gwendal Grison',
                image: GwendalG,
            },
        ],
    },
] as const;

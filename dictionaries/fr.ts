export const frDictionary = {
    navigation: {
        auth: {
            signin: {
                title: "Connection",
                buttonText: "Se connecter avec Google",
                contact: "Un problème\u00A0? Contactez-la DSI"
            },
            signout: {
                title: "Déconnection",
                buttonText: "Se déconnecter",
                contact: "Un problème\u00A0? Contactez-la DSI"
            }
        },
        errors: {
            unauthorized: {
                title: "Accès non autorisé",
                description: "Vous devez être connecté pour accéder à cette page",
                button: "Login",
                contact: null
            },
            forbidden: {
                title: "Accès interdit",
                description: "Vous ne disposez pas des autorisations nécessaires pour accéder à cette page. Veuillez contacter l'administrateur",
                button: "Retourner à la page d'accueil",
                contact: "Demandez les droits d'accès"
            },
            notfound: {
                title: "Page non trouvée",
                description: "La page que vous recherchez n'existe pas. Veuillez vérifier l'URL ou retourner à la page d'accueil",
                button: "Retourner à la page d'accueil",
                contact: null
            },
            unknown: {
                title: "Erreur inattendue",
                description: "Veuillez réessayer plus tard ou nous contacter",
                button: "Retourner à la page d'accueil",
                contact: "Signaler un problème"
            },
            httpError: "Erreur HTTP"
        },
        sitemap: {
            title: "Plan du site",
            whoarewe: "Qui sommes-nous ?",
            home: "Page d'accueil",
            about: "À propos",
            commitment: "Nos engagements",
            team: "Notre équipe",
            partners: "Nos partenaires",
            company_partners: "Entreprises partenaires",
            offer: "Notre offre",
            example_offers: "Exemple d'offres",
            contact_information: "Contact & Informations",
            contact_form: "Formulaire de contact",
            blog: "Blog",
            legal_mentions: "Mentions légales",
            login: "Connexion",
            logout: "Déconnexion"
        }
    },
    pages: {
        about: {
            description: "la Junior-Entreprise du numérique et de la data.",
            moreInfo: "Plus d'informations",
            ourMandate: "Notre mandat",
            alt: {
                mandat: "Photo du Mandat de Telecom Etude",
                tp: "Photo de Télécom Paris",
                afnor: "Logo de l'AFNOR",
                cnje: "Logo de la CNJE"
            },
            titles: {
                ourje: "Notre JE",
                ourschool: "Notre école\u00A0: Télécom Paris",
                quality: "Une JE de qualité",
                satisfaction: "Notre objectif\u00A0: Votre satisfaction",
                ieseg: "Une préstation commune"
            },
            quality: [
                "Un taux de satisfaction de nos de clients de plus de 97%.",
                "Une des seules Junior-Entreprises à être certifiée AFNOR ISO\u00A09001.",
                'Nous avons la meilleure mention "Satisfait" de la CNJE depuis plusieurs années.'
            ],
            ourshool: {
                chooseTP: "Choisir Télécom Paris, c'est choisir la Junior-Entreprise de",
                rankings: [
                    "La **1ère école d'ingénieur du numérique** (Le Figaro, 2021)",
                    "La **1ère école pour la proximité avec les entreprises**, et la **2ème école d'ingénieur** au classement général (L'Etudiant 2022)",
                    'La **6ème "small university" au monde** (Times Higher Education World University Ranking 2021)'
                ]
            },
            ourje: [
                "Telecom Etude est la Junior-Entreprise (JE) de Télécom Paris, **première école du numérique** en France, et propose à ses clients l'expertise de plusieurs centaines d'étudiants.",
                "Choisir notre JE, c'est avant tout travailler avec une **équipe réactive et disponible**. Vous développerez vos projets avec des étudiants de Télécom Paris, compétents, motivés et qui auront choisi de s'investir dans cette mission."
            ],
            ieseg: [
                "**IESEG Conseil Paris et Telecom Etude** s'associent pour offrir des services complets en combinant leurs expertises en ingénierie et en gestion. Cette collaboration permet de proposer des solutions innovantes et adaptées aux besoins spécifiques des entreprises, allant de l'évaluation de la faisabilité technique à la mise en place de stratégies de croissance digitale.",
                "Grâce à cette synergie, IESEG Conseil et Telecom Etude fournissent des analyses approfondies et des recommandations stratégiques, tout en développant des outils sur mesure tels que des **chatbots, des applications, des plateformes web ou des modèles d'intelligence artificielle**.",
                "Cette double présentation combine **l'expertise en conseil** d'IESEG Conseil avec les **compétences technologiques** de Telecom Etude, offrant ainsi des solutions robustes et personnalisées pour vous accompagner dans votre transformation digitale et votre croissance."
            ],
            satisfaction:
                "Depuis sa création, la CNJE œuvre pour promouvoir la marque Junior-Entreprise afin qu'elle reste un **gage de qualité**. Pour cela, elle décerne des labels qualité aux structures méritoires, et met en place des audits-conseils annuels. La CNJE fournit l'assurance que nos administrateurs ou chefs de projet reçoivent les formations adéquates pour proposer à nos clients **formalisme et efficacité**."
        },
        contact: {
            title: "Contactez-nous !",
            before: "Vous avez un projet en tête\u00A0? Vous avez besoin de plus d'informations sur notre offre\u00A0? N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en nous envoyant un email à ",
            after: ". Nous reviendrons vers vous dès que possible.",
            terms: "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter dans le cadre de votre demande et de la relation commerciale qui peut en découler. ",
            form: {
                name: {
                    label: "Nom",
                    placeholder: "Votre nom",
                    error: "Merci de fournir un nom"
                },
                email: {
                    label: "Email",
                    placeholder: "Votre email",
                    error: "Merci de fournir une adresse email valide"
                },
                tel: {
                    label: "Téléphone",
                    placeholder: "Votre numéro de téléphone",
                    error: "Numéro de téléphone invalide"
                },
                societe: {
                    label: "Société",
                    placeholder: "Votre nom de société"
                },
                subject: {
                    label: "Objet",
                    placeholder: "Un titre pour votre message"
                },
                message: {
                    label: "Message",
                    placeholder: "Votre message à l'équipe",
                    error: "Merci d'écrire un message"
                },
                send: "Envoyer"
            },
            success: {
                title: "Message envoyé !",
                message: "Merci pour votre message. Nous vous recontacterons dès que possible."
            },
            error: {
                title: "Erreur lors de l'envoie",
                message: "Merci de nous envoyé un mail directement à"
            }
        },
        legal: {
            title: "Mentions légales",
            credits: "Crédits Photos",
            hosting: "Hébergement",
            dev: "Développement",
            madeBy: "Site réalisé en NextJS par Tom Webber",
            loi: {
                host: "Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, vous trouverez ci-dessous les informations relatives à l'éditeur et à l'hébergeur de ce site internet.",
                rgpd: {
                    before: "Conformément au RGPD, vous pouvez faire valoir vos droit d'accès, de portabilité, de rectification, d'opposition ou d'effacement de vos données en envoyant une demande à",
                    in: "ou via le ",
                    contact: "formulaire de contact",
                    after: "sur le site."
                }
            },
            loi1901: "Association loi 1901, affiliée à la CNJE",
            siegesocial: "Siège social : Télécom Paris, 19, place Marguerite Perey 91120 PALAISEAU",
            siret: "[Numéro SIRET : 332 711 522 00018 | Numéro URSSAF : 757 090058076001011 8",
            tva: "Numéro TVA Intra-communautaire : FR 1933 2711 522 00018 | Code APE : 6202A]",
            respoRGPD: "Délégué à la protection des données (DPO) : Leïla Iksil",
            rezelsiege: "Siège social : 19 Place Marguerite Perey, 91120 PALAISEAU",
            contact: "Contact :"
        }
    }
};

import { Dictionary } from "@/locales/dictionaries";

export const enDictionary: Dictionary = {
    navigation: {
        auth: {
            signin: {
                title: "Sign In",
                buttonText: "Sign in with Google",
                contact: "A problem? Contact the IT department"
            },
            signout: {
                title: "Sign Out",
                buttonText: "Sign out",
                contact: "A problem? Contact the IT department"
            }
        },
        errors: {
            unauthorized: {
                title: "Access Unauthorized",
                description: "You must be logged in to access this page.",
                button: "Login",
                contact: null
            },
            forbidden: {
                title: "Access Forbidden",
                description: "You do not have the necessary permissions to access this page. Please contact the administrator.",
                button: "Back to home page",
                contact: "Ask for permissions to access"
            },
            notfound: {
                title: "Page not found",
                description: "The page you are looking for does not exist. Please check the URL or return to the home page.",
                button: "Back to home page",
                contact: null
            },
            unknown: {
                title: "Unexpected error",
                description: "Please try again later or contact the administrator (info@telecom-etude.fr)",
                button: "Back to home page",
                contact: "Report a problem"
            },
            httpError: "HTTP Error"
        },
        admin: {
            validate: "Validate blogs",
            newblog: "New blog",
            edit: "Edit blogs",
            form: "Form submissions",
            users: "Users managment",
            account: "My account"
        },
        sitemap: {
            title: "Site plan",
            whoarewe: "Who are we?",
            home: "Home page",
            about: "About",
            commitment: "Our commitments",
            team: "Our team",
            partners: "Our partners",
            company_partners: "Partner companies",
            offer: "Our offer",
            example_offers: "Example of offers",
            contact_information: "Contact & Information",
            contact_form: "Contact form",
            blog: "Blog",
            legal_mentions: "Legal notices",
            login: "Log In",
            logout: "Log Out",
            ieseg: "IESEG Conseil Paris",
            contact: "Contact us",
            bug: "Report a bug"
        }
    },
    pages: {
        commitments: {
            title: "Our commitments",
            description:
                "Telecom Etude is an association that enables students to develop technical skills and knowledge of the professional world. We are committed both in our prestation and in various other areas, with charters of commitment",
            jamaissanselles: {
                title: "Charter #JamaisSansElles",
                text: "The #JamaisSansElles charter, co-drafted by the Jamais Sans Elles association and the CNJE, defines the commitments of the signatory Junior-Enterprises, including Télécom Étude, in terms of parity and gender diversity. By signing this charter, Télécom Étude undertakes to guarantee the presence of women in all representations involving at least three people. The Junior-Enterprise also undertakes to promote gender equality within its structure, both in the recruitment process and in access to positions of responsibility. Lastly, Télécom Étude is stepping up its action against sexist and sexual violence, through prevention initiatives aimed at students and the application of the CNJE's recommendations at its events",
                alt: "JamaisSansElles logo"
            },
            rse: {
                title: "CSR Charter",
                paragraphs: [
                    "The CSR Charter, designed by AgroParisTech Service Études, is aimed at Junior-Enterprises and defines the guiding principles that they, including Télécom Étude, must respect in terms of Corporate Social Responsibility. It is based on four main areas: studies, human resources, governance and communication",
                    "With regard to research, Télécom Étude is committed to introducing an RS-Score, an indicator that assesses the social and environmental impact of projects carried out. In terms of human resources, the commitments mainly concern the well-being of members, the promotion of diversity and parity, as well as particular attention to organisational sobriety",
                    "In terms of governance, Télécom Étude is committed to adopting inclusive management, training its members in CSR issues and monitoring its carbon footprint. Finally, in terms of communication, the emphasis is on more responsible canvassing, raising student awareness of CSR issues and transparency regarding the organisation's CSR policy."
                ],
                alt: "Focus of the CSR Charter."
            }
        },
        home: {
            trust: "They put their trust in us",
            description:
                "Telecom Etude, founded in 1979, is the Junior-Enterprise of Télécom Paris, a leading engineering school in information and digital technologies. Connect with our responsive and professional team of 33 administrators for tailor-made solutions to your projects. Explore Telecom Etude's expertise and engage with over 1,000 student engineers from Telecom Paris",
            questions: "More questions",
            subtitle: "The Junior Entreprise for digital, new technologies and data",
            alt: "Photo of Telecom Etude's mandate",
            whoarewe: "Who are we?",
            contact: "Contact us",
            cnje: [
                "Junior-Enterprises are educational consultancy associations governed by the French law of 1901, whose social purpose is to help students develop their skills by providing services to professionals",
                "These structures are set up within higher education establishments. They offer quality services to companies and enable students to develop their knowledge by putting their training into practice in order to meet clients' needs."
            ],
            numbers: {
                title: "Telecom Etude in figures",
                clients: "Satisfied clients",
                projects: "Projects every year",
                years: "Years of experience",
                pupils: "Qualified engineering students",
                admins: "Administrators at your service"
            },
            domains: {
                subtitle: "We find an answer to any of your needs",
                description: "Our experience and skills cover a wide range of digital areas, including the following examples:",
                title: "Our areas of expertise",
                data: "Data science, AI & Machine learning",
                web: "Software Development, Applications & Web",
                cyber: "Cybersecurity, Networks, Cryptography & Blockchain",
                image: "Image processing & 3D modelling",
                market: "Market Research, State of the Art & Audits",
                se: "Embedded Systems"
            }
        },
        blog: {
            title: "Our news",
            date: {
                posted_by: "Posted by",
                on: "on the"
            },
            labelSelector: { title: "Filter by label", selectorMessage: "Select up to 3 labels" },
            none: "No blogs blogs found, come back later."
        },
        team: {
            title: "Our team",
            alt: {
                before: "Telecom Etude's",
                after: "photo"
            },
            poles: {
                board: "Le bureau",
                devco: "Buisnees development department",
                auditqua: "Audit and quality department",
                event: "Events department",
                info: "IT department",
                com: "Communication department",
                suivi: "Projects monitoring division"
            },
            members: {
                prez: "Chief executive officer",
                trez: "Treasurer",
                vicetrez: "Vice-treasurer",
                vpi: "Internal vice-president",
                vpe: "External vice-president",
                secge: "General secretary",
                dirco: "Commercial director",
                //
                respodevco: "Business development officer",
                respoaudit: "Audit officer",
                respocom: "Communications officer",
                resposuivi: "Projects monitoring officer",
                respoevent: "Events officer",
                respoquality: "Quality officer",
                respoinfo: "Chief information officer",
                //
                appel: "Tender invitation officer",
                alumni: "Alumni manager",
                international: "International manager",
                selectionCDP: "CDP Selection manager",
                processus: "Process review manager",
                templates: "Templates manager",
                pots: "Evening events manager",
                teambuildings: "In charge of cohesion",
                linkedin: "Responsible for Linkedin",
                insta: "Responsible for Instagram",
                formations: "Traning officer",
                cominterne: "Internal communications officer",
                //
                devco: "Business development member",
                info: "IT member",
                audit: "Audit & Quality member",
                suivi: "Projects monitoring member"
            }
        },
        partners: {
            title: "Our partner companies",
            text: "Telecom Etude has partner companies. These partnerships with companies allow us to benefit from practical training, to lend our premises for their events, and to establish solid professional relationships. As students, this is a unique opportunity to acquire skills while discovering the business world. It strengthens our future opportunities and develops our network",
            bain: {
                type: "Consulting firm",
                text: "Bain & Company is the international consulting firm that helps ambitious managers transform their companies into pioneers of tomorrow's world. This prestigious partnership enables us to put Telecom Paris students in touch with Bain & Company consultants and recruiters through special events."
            },
            kpmg: {
                type: "Audit and consulting",
                text: "Our partnership with KPMG is designed to benefit both parties. In return, KPMG, in collaboration with Telecom Etude, organises events for students at Telecom Etude's premises during the year to introduce them to the consulting professions, as well as a visit to KPMG's premises at the end of the year accompanied by a discussion in small groups."
            },
            bearingPoint: {
                type: "Consulting firm",
                text: "Together, we are more than a company: this is the raison d'être of this management and technology consultancy. BearingPoint supports clients in more than 75 countries, helping them to achieve measurable, sustainable and responsible results. Since 2005, BearingPoint has supported our structure, both by training us and by offering us commercial opportunities. This real synergy is the result of a shared desire to make the most of today's talent in a company that reflects our image: a force for innovation and at the forefront of tomorrow's world. By allowing telecoms students to visit our offices, or by promoting our network of alumni, BearingPoint is part of our ecosystem through a mutually beneficial collaboration."
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            text: {
                before: "Here at the answers of questions you might have. Don't hesitate to contact us at ",
                between: "or be felling the ",
                form: "contact form",
                after: "if you have any other questions or in order to have more information."
            },
            list: [
                {
                    question: "What is a Junior-Enterprise\u00A0?",
                    answer: [
                        "A Junior-Enterprise is an educational, not-for-profit student association that offers professional services in their field of study. In the case of Telecom Etude, we sell services in the digital field, mainly in the areas of data, development, cybersecurity, image and marketing."
                    ]
                },
                {
                    question: "How do they work?",
                    answer: [
                        "They work by assignment. You submit a project to us and we make a proposal. Once the proposal has been accepted, we carry out the assignment by selecting a person to carry out the study."
                    ]
                },
                {
                    question: "Who will carry out my project\u00A0?",
                    answer: ["We carefully select a Télécom Paris student who has the particular skills needed to carry out the assignment. "]
                },
                {
                    question: "Why choose us?",
                    answer: [
                        "You should choose us for our expertise in our field, our responsiveness to your contacts and our dedication to providing excellent service."
                    ]
                },
                {
                    question: "How does an assignment work?",
                    answer: [
                        "An assignment begins with a discussion with the client to understand their needs, then a proposal is made. Once the proposal has been accepted, the work begins and the customer is kept informed throughout the process."
                    ]
                }
            ]
        },
        about: {
            description: "the Junior-Enterprise of digital and data",
            moreInfo: "More information",
            ourMandate: "Our mandate",
            alt: {
                mandat: "Photo of the Telecom Etude mandate",
                tp: "Photo of Telecom Paris",
                afnor: "AFNOR logo",
                cnje: "CNJE logo"
            },
            titles: {
                ourje: "Notre JE",
                ourschool: "Our school: Télécom Paris",
                quality: "A quality EY",
                satisfaction: "Our objective: Your satisfaction",
                ieseg: "A joint presentation"
            },
            quality: [
                "A client satisfaction rate of over 97%",
                "One of the only Junior-Entreprises to be AFNOR ISO00A09001 certified",
                'We have had the best "Satisfied" rating from the CNJE for several years.'
            ],
            ourshool: {
                chooseTP: "Choosing Télécom Paris means choosing the Junior-Enterprise of",
                rankings: [
                    "The **1st school for digital engineers** (Le Figaro, 2021)",
                    "The **1st school for proximity to companies**, and the **2nd engineering school** in the general ranking (L'Etudiant 2022)",
                    'The **6th "small university" in the world** (Times Higher Education World University Ranking 2021)'
                ]
            },
            ourje: [
                "Telecom Etude is the Junior-Enterprise (JE) of Télécom Paris, **the leading digital school** in France, and offers its clients the expertise of several hundred students",
                "Choosing our JE means above all working with a **responsive and available team**. You will develop your projects with competent, motivated students from Télécom Paris who have chosen to invest themselves in this mission."
            ],
            ieseg: [
                "**IESEG Conseil Paris and Telecom Etude** are joining forces to offer comprehensive services by combining their engineering and management expertise. This collaboration makes it possible to offer innovative solutions tailored to the specific needs of companies, from assessing technical feasibility to implementing digital growth strategies",
                "Thanks to this synergy, IESEG Conseil and Telecom Etude provide in-depth analyses and strategic recommendations, while developing tailor-made tools such as **chatbots, applications, web platforms or artificial intelligence models**.",
                "This dual presentation combines the **consulting expertise** of IESEG Conseil with the **technological skills** of Telecom Etude, offering robust and customised solutions to support you in your digital transformation and growth."
            ],
            satisfaction:
                "Since its creation, the CNJE has been working to promote the Junior-Entreprise brand so that it remains a **gage of quality**. To this end, it awards quality labels to deserving structures and sets up annual advisory audits. The CNJE provides the assurance that our administrators and project managers receive the appropriate training to offer our clients **formalism and efficiency**"
        },
        contact: {
            title: "Contact us!",
            before: "You have a project in mind? You need more information about our services? Don't hesitate to contact us using the form below or by sending us an email at ",
            after: ". We will get back to you as soon as possible.",
            terms: "By submitting this form, you agree that your data will be used to contact you in connection with your request and the commercial relationship that may result from it.",
            form: {
                name: {
                    label: "Name",
                    placeholder: "Your name",
                    error: "Please enter your name"
                },
                email: {
                    label: "Email",
                    placeholder: "Your email",
                    error: "Please enter a valid email address"
                },
                tel: {
                    label: "Phone",
                    placeholder: "Your phone number",
                    error: "Invalid phone number"
                },
                societe: {
                    label: "Company",
                    placeholder: "Your company's name"
                },

                subject: {
                    label: "Subject",
                    placeholder: "A title for your message"
                },
                message: {
                    label: "Message",
                    placeholder: "Your message",
                    error: "Please enter a message"
                },
                send: "Send"
            },
            success: {
                title: "Message sent!",
                message: "Thank you for contacting us. We will get back to you as soon as possible."
            },
            error: {
                title: "Unexepected error...",
                message: "Please contact us instead by sending a mail to"
            }
        },
        legal: {
            title: "Legal Notice",
            credits: "Photo credits",
            hosting: "Hosting",
            dev: "Development",
            madeBy: "Website made in NextJS by Tom Webber",
            loi: {
                host: "In accordance with the provisions of Article 6 III-1 of Law No. 2004-575 of 21 June 2004 on confidence in the digital economy, you will find below information on the publisher and host of this website",
                rgpd: {
                    before: "In accordance with the RGPD, you may exercise your right to access, portability, rectification, opposition or deletion of your data by sending a request to",
                    in: "or via the",
                    contact: "contact form",
                    after: " on the site."
                }
            },
            loi1901: "Association loi 1901, affiliated to the CNJE",
            siegesocial: "Head Office: Télécom Paris, 19, place Marguerite Perey 91120 PALAISEAU",
            siret: "[SIRET number: 332 711 522 00018 | URSSAF number: 757 090058076001011 8",
            tva: "Intra-community VAT number: FR 1933 2711 522 00018 | Code APE : 6202A]",
            respoRGPD: "Data Protection officer (DPO) : Leïla Iksil",
            rezelsiege: "Head Office : 19 Place Marguerite Perey, 91120 PALAISEAU",
            contact: "Contact:"
        }
    }
};

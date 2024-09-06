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
            logout: "Log Out"
        }
    },
    pages: {
        blog: {
            date: {
                posted_by: "Posted by",
                on: "on the"
            }
        },
        team: {
            title: "Our team",
            alt: {
                before: "Telecom Etude's",
                after: "photo"
            },
            board: {
                title: "The board",
                members: {
                    prez: {
                        job: "President",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat."
                    }
                }
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
            respoRGPD: "Data Protection Officer (DPO) : Leïla Iksil",
            rezelsiege: "Head Office : 19 Place Marguerite Perey, 91120 PALAISEAU",
            contact: "Contact:"
        }
    }
};

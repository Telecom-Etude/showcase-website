import { Dictionary } from "@/locales/dictionaries";

export const enDictionary: Dictionary = {
    navigation: {
        cookies: {
            title: "We value your privacy",
            description:
                "This website uses cookies to improve your experience, analyse traffic and deliver personalised content. You can accept or decline non-essential cookies. All data is collected and does not leave Télécom Paris' internal network. To find out more, visit our",
            link: "Privacy policy.",
            accept: "Accept all cookies",
            reject: "Reject all cookies"
        },

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
            users: "Users management",
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
            contact_form: "Contact",
            blog: "Blog",
            legal_mentions: "Legal notices",
            login: "Log In",
            logout: "Log Out",
            ieseg: "IESEG Conseil Paris",
            contact: "Contact us",
            bug: "Report a bug",
            plaquette: "Brochure"
        },
        button: {
            open: "Expand menu",
            close: "Close menu"
        }
    },
    pages: {
        ieseg: {
            title: "Telecom Etude and IÉSEG Conseil Paris",
            subtitle: "A unique partnership for innovative and effective solutions",
            presentation: {
                title: "Presentation IÉSEG Conseil Paris",
                par: "IÉSEG CONSEIL Paris, Junior-Enterprise of the IÉSEG School of Management, is a Junior-Enterprise whose members are students specializing in Management, Marketing, Finance, Auditing and Information Systems. Created in 2007, IÉSEG CONSEIL Paris offers you the expertise and dynamism of its junior consultants to support you in your consulting projects in strategy, organization, marketing, finance and information systems."
            },
            complementary: {
                title: "Complementary expertise",
                before: "By combining the technical expertise of Telecom Etude and the commercial expertise of IÉSEG Conseil Paris, we offer a complete solution that covers all aspects of your projects, from engineering to market strategy",
                strong: " Our approach enables us to support you from A to Z, integrating an assessment of technical feasibility with an in-depth analysis of market demand. ",
                after: "We believe that every project has unique potential. Choose a two-pronged approach combining technical expertise and commercial perspective to explore your product's potential.",
                alt: "Graph showing the complementary Telecom Etude IÉSEG Conseil Paris."
            },
            innovation: {
                title: "Innovative Solutions",
                before: "We use the latest technologies and data science methods to analyze the market and improve the online visibility of your products, enabling you to stay at the forefront of innovation.",
                strong: " Our services include implementing new technologies, launching new products and optimizing your performance using multi-linear regression and data visualization tools. "
            },
            personalised: {
                title: "Personalised approach", 
                before: "Every project is unique. We tailor our services to your specific needs, whether you want to assess the feasibility of a new product, optimise your customer service or improve your marketing strategy.",
                strong: " Our personalised approach guarantees concrete results, based on mystery visits, exit interviews and sector benchmarks tailored to your particular challenges."

            },

            gain: {
                title: "Saving Time and Efficiency",
                before: "Working hand in hand, we offer an integrated process that saves you time and efficiency. You benefit from our combined skills, without having to coordinate multiple service providers.",
                strong: " Our collaboration translates into detailed pre-studies, rigorous progress monitoring and clear deliverables, enabling your projects to be implemented quickly and efficiently."
            },
            contact: "Contact us!"
        },
        offer: {
            title: "Our Offer",
            timeline: {
                title: "Process of a Study",
                text: "We have a structured and rigorous approach to ensure quality, expertise, and responsiveness throughout the mission. Here are the main steps in conducting a study at JE:",
                steps: [
                    {
                        title: "Client Contact",
                        text: "The first contact between you and our Junior Enterprise. You can reach us through the form below or at contact@telecom-etude.fr. We will respond as soon as possible to schedule an initial meeting."
                    },
                    {
                        title: "Meeting with the Client",
                        text: "Two project managers will meet you at our offices at Télécom Paris or via a video conference. The purpose of this meeting is for us to understand your project's needs in detail to subsequently propose an offer tailored to your expectations. We will also establish the guidelines for the specifications together."
                    },
                    {
                        title: "Commercial Offer",
                        text: "Following this meeting, we will draft a personalized commercial offer outlining the key points of your project and how we can address them. This commercial offer will also include an estimate of the budget and duration of the mission."
                    },
                    {
                        title: "Search for Contributors",
                        text: "We then publish a call for applications to the students of Télécom Paris to gather the best profiles to execute your project. After a detailed analysis of the candidates' skills, experience, and motivation, we will meet them for an interview to ensure their qualifications meet the mission's needs."
                    },
                    {
                        title: "Tripartite Meeting",
                        text: "After the selection, you will meet the contributor in a second meeting to clarify all the details of your project in light of their expertise. It is especially through this exchange that we can build a precise and comprehensive specifications document."
                    },
                    {
                        title: "Signing of the Study Agreement",
                        text: "Finally, we formalize all the details of the mission in a study agreement that includes the complete specifications document, the methodology applied by the contributor, the schedule for the various stages of the mission, the expected deliverables, as well as the budget for the mission. Once this document is signed, the mission can officially begin!"
                    },
                    {
                        title: "Mission Follow-up with the Contributor",
                        text: "We organize regular follow-up meetings with you to ensure that the mission stays on track and meets the deadlines! Throughout the mission, our project managers are your primary contacts and keep you informed of the project's progress."
                    },
                    {
                        title: "Payment and Satisfaction Feedback",
                        text: "Once the mission is completed, we meet one last time to present the final deliverable, which you confirm is in accordance with the specifications by signing. You will also receive a satisfaction questionnaire that allows you to evaluate your experience with our organization."
                    }
                ]
            },
            plaquette: {
                title: "Our Brochure",
                text: "Learn more with our brochure",
                button: "View the Brochure"
            }
        },
        commitments: {
            title: "Our commitments",
            description:
                "Telecom Etude is an association that enables students to develop technical skills and knowledge of the professional world. We are committed both in our offer and in various other areas, with charters of commitment",
            jamaissanselles: {
                title: "Charter #JamaisSansElles",
                text: 'The #JamaisSansElles charter, co-drafted by the "Jamais Sans Elles" association and the CNJE, defines the commitments of the signatory Junior-Enterprises, including Télécom Étude, in terms of parity and gender diversity. By signing this charter, Télécom Étude undertakes to guarantee the presence of women in all representations involving at least three people. The Junior-Enterprise also undertakes to promote gender equality within its structure, both in the recruitment process and in access to positions of responsibility. Lastly, Télécom Étude is stepping up its action against sexist and sexual violence, through prevention initiatives aimed at students and the application of the CNJE\'s recommendations at its events',
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
            subtitle: "The Junior Enterprise for digital, new technologies and data",
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
            labelSelector: { title: "Filter by label", selectorMessage: "Select up to 3 labels", empty: "No labels found" },
            none: "No blogs found, come back later."
        },
        team: {
            title: "Our team",
            alt: {
                before: "Telecom Etude's",
                after: "photo"
            },
            poles: {
                board: "The board",
                devco: "Business development department",
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
                formations: "Training officer",
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
                before: "Here are answers to questions you might have. Don't hesitate to contact us at ",
                between: "or by filling the ",
                form: "contact form",
                after: "if you have any other questions or in order to have more information."
            },
            list: [
                {
                    question: "What is a Junior-Enterprise\u00A0?",
                    answer: [
                        "A Junior-Enterprise is an educational, not-for-profit student association that offers professional services in their field of study. In the case of Telecom Etude, we offer services in the digital field, mainly in the areas of data, development, cybersecurity, image and marketing."
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
                quality: "A quality JE",
                quality_policy: "Our quality privacy",
                satisfaction: "Our objective: Your satisfaction",
                ieseg: "A joint presentation"
            },
            quality: [
                "A client satisfaction rate of over 97%",
                "One of the only Junior-Enterprises to be AFNOR ISO00A09001 certified",
                'We have had the best "Satisfaisant" rating from the CNJE for several years.'
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
                "Since its creation, the CNJE has been working to promote the Junior-Enterprise brand so that it remains a **gage of quality**. To this end, it awards quality labels to deserving structures and sets up annual advisory audits. The CNJE provides the assurance that our administrators and project managers receive the appropriate training to offer our clients **formalism and efficiency**"
        },
        contact: {
            sending: "Form is being submitted. Please wait",
            title: "Contact us!",
            optional: "optional",
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
                message: "Thank you for contacting us. We will get back to you as soon as possible.",
                back: "Go back to home page"
            },
            error: {
                title: "Unexpected error...",
                message: "Please contact us instead by sending a mail to"
            }
        },
        legal: {
            title: "Legal Notice",
            legal: {
                title: "Legal Information",
                owner: {
                    title: "Site Owner",
                    description: "Telecom Etude, residing at 19, Place Marguerite Perey, 91120, PALAISEAU",
                    association: "Association of the 1901 law",
                    siret: "SIRET number",
                    urssaf: "URSSAF number",
                    vat: "Intra-community sales tax",
                    ape: "APE code",
                    contact: "Contact: "
                },
                director: {
                    title: "Publication Director",
                    description: "Manon Strasser, president of Telecom Etude"
                },
                host: {
                    title: "Site Host",
                    description: "Rezel, residing at 19, Place Marguerite Perey, 91120, PALAISEAU",
                    contact: "Contact: ",
                    website: "Website: "
                }
            },
            property: {
                title: "Intellectual Property",
                description:
                    "All elements present on the site (texts, images, logos, etc.) are protected by the provisions of the Intellectual Property Code and belong to Telecom Etude or are used with the authorization of their respective owners. Any reproduction, representation, modification, or partial or total exploitation of the site's contents is prohibited without the prior written consent of Telecom Etude."
            },
            data: {
                title: "Personal Data",
                description1:
                    "The information collected through the forms on the site is intended exclusively for the internal use of Telecom Etude and will not be communicated to third parties without your explicit consent, unless required by law.",
                description2:
                    "In accordance with the 'Informatique et Libertés' law of January 6, 1978, as amended, and the General Data Protection Regulation (GDPR), you have the right to access, rectify, oppose, delete, and port your data. You can exercise this right by sending an email to ",
                description3:
                    "Telecom Etude uses JSON Web Tokens (JWT) for user authentication on the site. These tokens secure access to the site's features without using cookies. JWTs do not collect additional personal data other than what is necessary for authentication."
            },
            cookies: {
                title: "Cookies",
                description:
                    "The Telecom Etude website uses cookies to track users' browsing habits. This data is collected for information purposes only and is not used for commercial purposes. These cookies are only stored if you expressly accept them. These cookies are stored locally and do not leave the Télécom Paris internal network."
            },
            liability: {
                title: "Limitation of Liability",
                description:
                    "Telecom Etude makes every effort to ensure the accuracy and updating of the information disseminated on the site, but cannot be held responsible for errors, omissions, or results that may be obtained due to misuse of this information. Telecom Etude also declines any responsibility for any direct or indirect damage resulting from access to or use of the site."
            },
            law: {
                title: "Applicable Law",
                description:
                    "These legal notices are governed by French law. In case of dispute, and after an attempt at amicable resolution, only French courts will be competent."
            }
        }
    }
};

import { Dictionary } from "@/locales/dictionaries";

export const enDictionary: Dictionary = {
    navigation: {
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
        }
    }
};

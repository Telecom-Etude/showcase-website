import { Dictionary } from "@/locales/dictionaries";

export const enDictionary: Dictionary = {
    navigation: {
        sitemap: {
            title: "Site plan",
            whoarewe: "Who are we?",
            home: "Home page",
            about: "About",
            commitment: "our commitments",
            team: "our team",
            partners: "Our partners",
            company_partners: "Partner companies",
            offer: "our offer",
            example_offers: "Example of offers",
            contact_information: "Contact & Information",
            contact_form: "contact form",
            blog: "Blog",
            legal_mentions: "Legal notices",
            login: "connection",
            logout: "Disconnection"
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

declare namespace NodeJS {
    interface ProcessEnv {
        // .env
        WEBSITE_URL: string;
        DATABASE_URL: string;
        // .env.local
        AUTH_GOOGLE_ID: string;
        AUTH_GOOGLE_SECRET: string;
        AUTH_SECRET: string;
        ADMIN_EMAIL: string;
        SMTP_EMAIL: string;
        SMTP_PASSWORD: string;
        FORM_DEST_EMAIL: string;
        IESEG_EMAIL: string;
    }
}

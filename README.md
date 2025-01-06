# Telecom Etude Showcase Website

> Code for the [Telecom Etude website](http://telecom-etude.fr).

## Getting started

1. Download the dependencies

    ```sh
    npm i 
    ```

2. Create the database

    ```sh
    npx prisma generate
    ```

3. Migrate the schema

    ```sh
    npx prisma migrate dev
    ```

4. Populate the database

    ```sh
    npx prisma db seed
    ```

5. Write the `.env.local` file (see below).
6. Run the project

    ```sh
    npm run dev
    ```

    > DO *NOT* USE THE `--turbo` flag if you need next auth.
    >
    > It is unstable as of now (2024). See, for example, [this issue](https://github.com/nextauthjs/next-auth/issues/11674).

## Tutorials

- [Auth.js tutorial](https://www.youtube.com/watch?v=1MTyCvS05V4)
- [Google Provider tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ)

## Notes

- Use `LocaleParams` type to avoid translation errors on pages.
- The translations are in `.ts` files instead of `.json` files to add type checks.

## Environment variables

### `.env.local`

#### `Auth.js`

- `GOOGLE_CLIENT_ID`: Google client ID for Open Authentication
- `GOOGLE_CLIENT_SECRET`: Google client secret for Open Authentication
- `AUTH_SECRET`: Random secret for JWT (can be generated with `openssl` command)
- `ADMIN_EMAIL`: Email to an administrator (will automatically have the `UserAdmin` right).

#### `NodeMailer`

- `SMTP_EMAIL`: Email for mailer
- `SMTP_PASSWORD`: Password for mailer
- `FORM_DEST_EMAIL`: Email for form destination
- `IESEG_EMAIL`: Email for form destination on `/ieseg` page

### `.env`

- `DATABASE_URL`: Relative path to the database file
- `WEBSITE_URL`: Full website URL
- `ANALYTICS`: Enable analytics and tracking.

### Check

You can check none are missing with [env.d.ts](./env.d.ts).

# Telecom Etude's Showcase Website

## Installation

### Requirements

You only need [Bun](https://bun.sh/). To install it, simply run

-   On Linux

```sh
curl -fsSL https://bun.sh/install | sh
```

-   On Windows (in powershell)

```pwsh
irm bun.sh/install.ps1 | iex
```

> Why Bun?
>
> It is simpler to use and has an lower toll on your computer, as well as being much faster than the other javascript runtimes that exist. A very important reason is also that it is reverse compatible with [`Node.js`]. See https://bun.sh/ for more information. Finally, this website doesn't use any runtime-specific features (I/O, filesystem, etc.) so changing runtime requires no code migrations.

### Setting up the database

The database is set up using [Prisma and sqlite](https://www.prisma.io/docs/orm/overview/databases/sqlite). The data is thus stored in a local file. A few configurations are needed though, as explained below.

> Why sqlite?
>
> sqlite may be bit slower and has less features than PostgreSQL for example, but it was chosen for its simplicity and ease of use: this website is designed to be maintained and to last over the years, and sqlite doesn't require an external server which can be hard, at first, to set up.

### Environment variables

#### Authentication

> If you just want to test it locally with access to all pages, you can just set `DEV_MODE=true` and enter rubbish in the 3 `AUTH_` variables to skip this section.

Generate a random `AUTH_SECRET` (e.g. by using `openssl rand -base64 255`), and set up the following environment variables in a `.env.local` file at the root of the project.

You must also generate a Google Secret and ID. To set those up, refer to this [tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ).

Here's what your `.env.local` file must look like at this stage:

```bash
# .env.local
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_id
AUTH_GOOGLE_SECRET=your_google_secret
```

#### Email setup

> You can enter rubbish in all variables if you want to skip this step.

<p style="color: red">
Danger: don't add real emails for <code>FORM_DEST_EMAIL</code> and <code>IESEG_EMAIL</code> as submitting the contact forms will send emails to those.
</p>

You can test the forms by adding custom emails. Here is a quick overview of the variables:

-   The `ADMIN_EMAIL` is the email of admin by default (at creation of the database).
-   To send emails, you need an email and an SMTP password (that you can generate on your Google account page).
-   The form submissions will be sent to `FORM_DEST_EMAIL` on the `/contact` page and to `FORM_DEST_EMAIL` and `IESEG_EMAIL` on the `/ieseg` page.

At the end of this step, you must have these variables set:

```bash
# .env.local
ADMIN_EMAIL=admin-email@example.com
SMTP_EMAIL=smtp-email@example.com
SMTP_PASSWORD=somesmtppassword
FORM_DEST_EMAIL=contact-telecom-etude@example.com
IESEG_EMAIL=contact-ieseg@example.com
```

#### Checking

This documentation may not be up to date. To make sure all required environment variables are defined, you can take a look at [../env.d.ts](../env.d.ts).

### Initialise the database

You now need to initialise your database:

```bash
bunx prisma generate
bunx prisma migrate dev
```

### Node Setup

Then you can install and run the project:

```bash
bun i
bun run dev
```

## The code base

### Structure

```
.
├── docs                Folder including documentation, including this file.
├── package.json        File including dependencies and scripts to run (like `npm run dev`).
├── prisma              Folder containing the database (data and schemas)
├── public              Folder containing the static data (images, pdfs, etc.).
├── src                 Folder containing the code (front-end, back-end, requests, api, etc..).
└── tailwind.config.ts  Configuration for tailwind (variables, sizes, etc.).
```

> The non-important files and folders are ignored.

Let's focus on the `src/` folder:

```
.
├── actions             Contains the server actions (e.g. for authentication).
├── app                 Contains the front-end pages of the app.
├── components          Contains the components (see below).
├── db                  Contains the database requests.
├── fonts               Contains the font of the project (`Avenir Next`)
├── lib                 Contains utils for different things
├── middleware.ts       The middleware is executed between the client request and the server response,
                            to handle redirections and check authorisations to access pages.
└── settings            Different settings
```

### Components

Before using a component, please check that it doesn't already exist, either in [Shadcn](https://ui.shadcn.com/) or in the `src/components/` folder.

### Additional Notes

-   Use `LocaleParams` type to avoid translation errors on pages.
-   The translations are in `.ts` files instead of `.json` files to add type checking.
-   Never use "use client" unless it is necessary: performance are better with server-side rendering.
-   To refresh or redirect from `use client` page, use `import { useRouter } from "next/navigation";`. The import is from `next/navigation` not `next/router`!
-   If you add a variable in [globals.css](../src/app/globals.css), you must also add it in [tailwind.config.ts](../tailwind.config.ts).

# Telecom Etude Centralised Tool

## Installation

### Requirements

-   [Node.js and npm](https://nodejs.org/en/download)
-   [Postgresql](https://www.postgresql.org/download/)

### Setting up the database

The database is set up using [Prisma and sqlite](https://www.prisma.io/docs/orm/overview/databases/sqlite). The data is thus stored in a local file. A few configurations are needed though, as explained below.

### Environment variables

> If you just want to test it locally with access to all pages, you can just set `DEV_MODE=true` and enter rubbish in the 3 `AUTH_` variables to skip this section.

Generate a random `AUTH_SECRET` (e.g. by using `openssl rand -base64 255`), and set up the following environment variables in a `.env.local` file at the root of the project.

You must also generate a Google Secret and ID. To set those up, refer to this [tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ).

Here's what your `.env.local` file must look like at this stage:

```bash
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_id
AUTH_GOOGLE_SECRET=your_google_secret
```

### Initialise the database

You know need to initialise your database:

```bash
npx prisma generate
npm run prisma migrate dev
```

### Node Setup

Then you can install and run the project:

```bash
npm install
npm run dev
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

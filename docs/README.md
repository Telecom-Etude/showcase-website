# Telecom Etude Showcase Website

> Code for the [Telecom Etude website](http://telecom-etude.fr).

This file contains the **Installation** section (how to setup and run the website). After this, please read the **Getting Started** section before contributing.

## Installation

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

### Environment variables

#### `.env.local`

##### `Auth.js`

- `GOOGLE_CLIENT_ID`: Google client ID for Open Authentication
- `GOOGLE_CLIENT_SECRET`: Google client secret for Open Authentication
- `AUTH_SECRET`: Random secret for JWT (can be generated with `openssl` command)
- `ADMIN_EMAIL`: Email to an administrator (will automatically have the `UserAdmin` right).

##### `NodeMailer`

- `SMTP_EMAIL`: Email for mailer
- `SMTP_PASSWORD`: Password for mailer
- `FORM_DEST_EMAIL`: Email for form destination
- `IESEG_EMAIL`: Email for form destination on `/ieseg` page

#### `.env`

- `DATABASE_URL`: Relative path to the database file
- `WEBSITE_URL`: Full website URL
- `ANALYTICS`: Enable analytics and tracking.

#### Check

You can check none are missing with [env.d.ts](./env.d.ts).

## Getting Started

### Overview of the project

Here are the important files/folders of the project:

|                         |                                                                                                                                  |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `/dictionaries/`        | contains all the text written on the website. For the website to be translatable, we store the text in different languages here. |
| `/docs/`                | contains all the notes, including this file                                                                                      |
| `/prisma/`              | folder for the database                                                                                                          |
| `/prisma/dev.db`        | file containing the data of the database                                                                                         |
| `/prisma/schema.schema` | schema of the database (i.e., what are the tables and the fields of the database) (*)                                            |
| `/public/`              | contains all the images, pdfs, etc. of the website                                                                               |
| `src/`                  | the interesting part, see [below](#the-src-directory) (*)                                                                        |
| `tailwind.config.ts`    | declaration of the tailwind variables, see [below](#styling)                                                                     |

(*) important

The ones **not listed here can be ignored** at first approche. They are less important.

#### The `src/` directory

The `src/` directory contains all the typescript code that is written for the website. The code splits in 2 parts: the front-end and the back-end.

- The front-end is the react code that will be displayed to the user (typically `tsx` files). It also contains the styling (`css` and tailwind) and some files specific like `favicon.ico`, `robots.txt` and `sitemap.yml`. The front-end is contained in the `app/` and `components/` folders.

- The back-end is the logic of the website: how to communicate with the database, how to decide whether a person has the rights to access or not a page, send emails, etc. The back-end is all the other folders.

|               |                                                         |
| :------------ | :------------------------------------------------------ |
| app           | the front-end part, see [below](#the-app-folder) (*)    |
| auth          | manages authentification (see last section)             |
| components    | the front-end components (see [below](#components)) (*) |
| db            | logic for communicating with the database (*)           |
| locales       | logic behind the translation of the website             |
| mail          | sending emails                                          |
| middleware.ts | see the [middleware section](#middleware) (*)           |

(*) important

#### The `app folder`

The front-end uses react.

|               |                                                   |
| :------------ | :------------------------------------------------ |
| api           | folder for requests with heavy data to the server |
| favicon.ico   | [google](www.google.com)                          |
| globals.css   | see [below](#styling)                             |
| metadata.ts   | equivalent of metadata in the `<head>` of an html |
| not-found.tsx | default 404 page                                  |
| robots.ts     | [google](www.google.com)                          |
| sitemap.ts    | [google](www.google.com)                          |

The rests is ruled by the `app` router of Next.js:

A folder is a route, and the file rendered is the `page.tsx` in this folder. For instance, the page `https://telecom-etude.fr/some/url` will render the file `src/app/some/url/page.tsx` inside the all the `layout.tsx` in this path. For example, if the structure is the following, the page will render `src/app/some/url/page.tsx` inside  `src/app/some/url/layout.tsx`, inside `src/app/layout.tsx`.

```
.
├── src/
│   └── app/
│       ├── some/
│       │   ├── url/
│       │       ├── page.tsx
│       |       └── layout.tsx
```

There are also specific rules for folders with signs, such as `[locale]`, `(home)` or `@validate`.

#### Components

To avoid you from writing times and times again the same code, a strategy of components has been adopted. All blocks that can be used multiple times are placed in the `src/components/` folder, in order to have less code in the pages (`src/app/` directory). Please try to use these components!

Some components come directly from the [shadcn] library, such as `Button`, `Form` or `Card`. These components implement the good methods for the best SEO (e.g. multiple supports for keybinding, accessibility, etc.) and allow you lots of flexibility (the code of these components is in `src/components/ui`).

#### Styling

The styling uses [tailwind](https://tailwindcss.com/docs), that allows you to use predefined styles as classnames. For instance, the following code will display text ub tge center with a red background and a border with a width of `4px`. This saves you from writing lots of lines of CSS in an external file. 

```tsx
<p className="bg-red-500 w-full text-center border-b-4">
    Some text
</p>
```

If you want to add a custom css style, simply add it into [globals.css](../src/app/globals.css) and use it! If it is for a color, please add the colour variable in [tailwind.conf.ts](../tailwind.config.ts) to be able to use like the predefined tailwind colours (as in `bg-red-500`). Don't add too much colours though to stay close to the colours of the corporate identity (beware, lots of colour names are used by `shadcn`, so don't delete them!).

#### Middleware

When you access a url, it sends a request to the server, and the server answers with a page. But what if you want to redirect or not authorise a client to access a page? You could add it to your `page.tsx` with a server action, but in this case, you sent a page for nothing to the client. In this case, use middleware, that is executed between the 2. It handles authorisations and redirections when needed/possible.

## Go further: Authentification

- [Auth.js tutorial](https://www.youtube.com/watch?v=1MTyCvS05V4)
- [Google Provider tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ)

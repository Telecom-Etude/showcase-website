# Telecom Etude Showcase Website

> Code for the [Telecom Etude website](http://telecom-etude.fr).

## Tutorials

- [Authjs tutorial](https://www.youtube.com/watch?v=1MTyCvS05V4)
- [Google Provuder tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ)

## Notes

- Utiliser `LocaleParams` en type, pour ne pas se tromper (sinon on traduit pas la page).
- La traduction est dans un fichier `.ts` au lieu de `.json` pour avoir la vérification des types.

## Environment variables

### `.env.local`

#### `Auth.js`

- `GOOGLE_CLIENT_ID`: Google client ID for Open Authentification
- `GOOGLE_CLIENT_SECRET`: Google client secret for Open Authentification
- `AUTH_SECRET`: Random secret for JWT (can be generated with `openssl` command)

#### `NodeMailer`

- `SMTP_EMAIL`: Email for mailer
- `SMTP_PASSWORD`: Password for mailer
- `FORM_DEST_EMAIL`: Email for form destination

### `.env`

- `DATABASE_URL`: Relative path to the database file

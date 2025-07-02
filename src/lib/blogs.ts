export enum BlogCreationStatus {
    Ok = 'Ok',
    SameTitle = 'SameTitle',
    Unauthorised = 'Unauthorised',
    UnknownProblem = 'UnknownProblem',
}

export function blogCreationStatusMessage(status: BlogCreationStatus): string | undefined {
    switch (status) {
        case BlogCreationStatus.Ok:
            return;
        case BlogCreationStatus.SameTitle:
            return 'Un blog avec le même nom existe déjà...';
        // Unauthorised is risen when the API is called manually.
        // Else, it is never meant to happen, as the caller should always have the rights on the post.
        case BlogCreationStatus.Unauthorised:
            return "Vous n'avez pas les droits pour créer un blog. Merci de contacter le pôle info!";
        case BlogCreationStatus.UnknownProblem:
            return "Une erreur s'est produite lors de la création du blog... Réessayez plus tard ou contactez le pôle info!";
    }
}

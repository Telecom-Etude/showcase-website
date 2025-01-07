function Template({ title }: { title: string }) {
    return (
        <div className="flex items-center h-full justify-center">
            <div className="space-y-6">
                <p className="w-full text-center">{title}</p>
                <p className="w-full text-center">Cliquer sur le titre d&apos;un blog sur le panneau de gauche pour l&apos;ouvrir et le valider</p>
            </div>
        </div>
    );
}

export function WrongId() {
    return <Template title="Le blog sélectionné n'existe pas." />;
}

export function NoId() {
    return <Template title="Merci de sélectionner un blog." />;
}

import TeamCardList from "./teamCardList";

export default function TeamSection() {
    return (
        <section className="bg-indigo-400 py-20 flex justify-center items-center">
            <div className="max-w-4/5 flex flex-col gap-y-10 items-center text-white">
                <p className="text-5xl font-times-new-roman text-center">L'équipe pédagogique</p>
                <p className="max-w-3/5 text-center">Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
                <TeamCardList />
            </div>
        </section>
    )
}
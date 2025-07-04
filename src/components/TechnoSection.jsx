import TechnoImage from "./TechnoImage"

export default function TechnoSection() {
    return (
        <div className="flex flex-col items-center bg-gray-100">
            <section className="max-w-3/5 py-10 flex gap-10 flex-col justify-around items-center flex-wrap">
                <h2 className="text-5xl text-blue-950 font-bold font-times-new-roman text-center">Les technos et langages utilisées</h2>
                <p className="text-center leading-8 w-4/5">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
                <TechnoImage />
            </section>
        </div>
    )
}
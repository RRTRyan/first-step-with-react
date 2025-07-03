export default function Opportnities() {
    return (
        <section className="py-10 flex items-center justify-center">
            <div className="max-w-4/6 flex flex-wrap-reverse justify-around items-center">
                <div className="max-w-7/12 flex-col">
                    <h2 className="text-5xl font-semibold text-blue-950 font-times-new-roman leading-20">Quelques débouchés</h2>
                    <p className="text-gray-900">Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p>
                    <br />
                    <p className="text-gray-900">Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
                </div>
                <img src="src/assets/OP.webp" alt="" className="max-w-96 min-w-80" />
            </div>
        </section>
    )
}
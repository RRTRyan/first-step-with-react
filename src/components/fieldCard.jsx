export default function FieldCard() {
    const icons = ["src/assets/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png", "src/assets/Intelligence-artificielle_Plan-de-travail-1-150x150.png", "src/assets/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png"];
    const field = ["Cloud et cybersécurité", "Intelligence artificielle", "Ingénierie logicielle"];
    const fieldDesc = [
        "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
        "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
        "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques."
    ];

    return (
        <div className="flex flex-wrap w-full justify-around gap-5">
            {field.map((fieldName, index) => (
                <div key={index} className="w-1/3 min-w-80 max-w-90 p-10 flex flex-col gap-3 items-center justify-start bg-white rounded-2xl">
                    <img src={icons[index]} alt="" className="w-2/5" />
                    <h2 className="text-2xl font-bold text-yellow-500 font-times-new-roman text-center" >{fieldName}</h2>
                    <p className="text-center text-blue-950">{fieldDesc[index]}</p>
                </div>
            ))}
        </div>
    )
}
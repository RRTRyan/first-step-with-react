export default function AboutText() {
    const icons = [<i className="fa-solid fa-graduation-cap"></i>, <i className="fa-solid fa-user-group"></i>, <i className="fa-solid fa-medal"></i>];
    const iconsText = ["+3 ans", "+250 étudiants", "Notre mission"];
    const aboutInfo = [
        "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
        "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
        "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar."
    ];

    return (
        <div className="text-amber-400 min-w-80 flex flex-col justify-between w-3/7 h-auto gap-8">
            <h3 className="text-5xl font-times-new-roman font-bold text-blue-950">À propos de nous</h3>
            {aboutInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-y-3">
                    <div className="text-5xl flex items-center gap-x-5">{icons[index]}<h3 className="text-2xl font-bold  text-blue-950">{iconsText[index]}</h3></div>
                    <p className="text-gray-500 leading-6.5">{info}</p>
                </div>
            ))}
        </div>
    )
}
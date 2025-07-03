export default function ProgramDistributionCard() {
    const cardText = ["Apprentissage théoriques en présentiel", "Apprentissage sur supports numériques", "Travaux individuels de l’étudiant", "Apprentissage en entreprise"];

    return (
        <div className="flex w-full justify-between items-center gap-y-3">
            {cardText.map((cardTextContent, index) => (
                <div key={index} className="bg-orange-100 max-w-3/13 rounded-3xl aspect-square p-7 gap-5 flex flex-col justify-start">
                    <h3 className="text-yellow-500 font-bold text-5xl">25%</h3>
                    <p className="text-2xl font-bold">{cardTextContent}</p>
                </div>
            ))}
        </div>
    )
}
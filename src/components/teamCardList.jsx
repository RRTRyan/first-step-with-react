// Need to make this carousel

import TeamCard from "./teamCard.jsx"

export default function TeamCardList() {
    const person = ["Mirado RAFENOMAHENINTSOA", "Julien RAJERISON", "Ryan ANDRIAMAHERY"]
    const image = ["../assets/Mirado-150x150.webp", "../assets/Julien-150x150.webp", "../assets/ryan-min-150x150.webp"]
    const description = ["Data and Business Intelligence Specialist 5+", "Lead Développeur | Fondateur de l’association Techzara Madagascar", "Développeur back end | Cofondateur et Directeur des opérations de HEI"]

    return (
        <div className="flex justify-around flex-wrap w-full gap-x-5 gap-y-5 px-10">
            {person.map((name, index) => (
                <TeamCard key={index} description={description[index]} image={image[index]} name={name} />
            ))}
        </div>
    )
}
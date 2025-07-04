// Need to make this carousel

import { useEffect, useState } from "react"
import TeamCard from "./teamCard.jsx"

export default function TeamCarousel() {
    const person =
        [
            "Mirado RAFENOMAHENINTSOA",
            "Julien RAJERISON", "Ryan ANDRIAMAHERY",
            "Jean Aimé Maxa",
            "Parison Ravalomanda",

        ]

    const image =
        [
            "../assets/Mirado-150x150.webp",
            "../assets/Julien-150x150.webp",
            "../assets/ryan-min-150x150.webp",
            "../assets/Jean-Aime-Maxa-modified-150x150.jpg",
            "../assets/Parison-e1716502987165-150x150.png"
        ]

    const description =
        [
            "Data and Business Intelligence Specialist 5+",
            "Lead Développeur | Fondateur de l’association Techzara Madagascar",
            "Développeur back end | Cofondateur et Directeur des opérations de HEI",
            "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
            "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)",

        ]

    const [currentCard, setCurrentCard] = useState(0)

    const [cardList, setCardList] = useState([currentCard, (currentCard + 1) % person.length, (currentCard + 2) % person.length])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((currentCard + 1) % person.length)
            setCardList([currentCard, (currentCard + 1) % person.length, (currentCard + 2) % person.length])
        }, 5000)
        return () => clearInterval(interval)
    })

    return (
        <div className="flex justify-center flex-wrap w-full 2xl:w-4/5 gap-x-5 gap-y-5 px-10">
            {cardList.map((number, index) => (
                <TeamCard key={index} description={description[number]} image={image[number]} name={person[number]} />
            ))}
        </div>
    )
}
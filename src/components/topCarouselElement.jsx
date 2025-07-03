// Need to make the carousel for this element
// Need to change placeholders

import Button from './button.jsx';

export default function TopCarouselElement() {

    const centerQuote =
        [
            "Une infrastructure de qualité et un programme pédagogique qui répond aux besoins du marché pour l'employabilité de nos étudiants",
            "Quote2",
            "Quote3"
        ]


    return (
        <section className='section--top flex py-36 h-250 justify-center items-center'>
            <div className='text-2xl flex  text-white items-center gap-y-20 flex-col text-center max-w-4/5'>
                <p className='text-7xl font-times-new-roman'>Haute école d'informatique</p>
                <p>{centerQuote[0]}</p>
                <div className='flex w-full justify-around gap-3 flex-wrap'>
                    <Button title={"Inscrivez-vous ici"} attributes={"text-xl font-bold px-11 py-5 bg-white text-blue-950"} />
                    <Button title={"Emploi du temps"} attributes={"text-xl font-bold px-11 py-5 bg-yellow-500"} />
                    <Button title={"Programme pédagogique"} attributes={"text-xl font-bold px-11 py-5 bg-blue-950 text-white"} />
                </div>
                <p>Habilitation MESupRES, suivant l'arrêté n°31309/2023</p>
            </div>
        </section>
    )
}
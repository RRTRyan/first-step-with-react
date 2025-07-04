import Button from './Button.jsx';

export default function TopCarouselElement({number}) {

    const Quote =
        [
            "Une infrastructure de qualité et un programme pédagogique qui répond aux besoins du marché pour l'employabilité de nos étudiants",
            "«L’éducation est l’arme la plus puissante pour changer le monde» selon Nelson Mandela. «L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar» selon HEI. C’est notre mission.",
            "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants."
        ];

    const BackgroundImage = 
        [
            "src/assets/hei-banner-1.webp",
            "src/assets/hei-banner-2.webp",
            "src/assets/hei-banner-3.webp"
        ];

    return (
        <section className='flex py-36 h-250 justify-center items-center relative'>
            <img src={BackgroundImage[number]} alt="" className='w-full h-full brightness-50 absolute object-cover top-0 -z-10'/>
            <div className='text-2xl flex  text-white items-center gap-y-20 flex-col text-center max-w-3/5 w-3/5'>
                <p className='text-7xl font-times-new-roman'>Haute école d'informatique</p>
                <p>{Quote[number]}</p>
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
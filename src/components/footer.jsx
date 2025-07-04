import './../css/index.css'
function Footer () {
    return (
        <>
            <footer className="bg-blue-950 m-auto flex flex-wrap justify-around items-center h-60 w-full">
                <div className='m-auto'>
                    <img src="src/assets/Logo-e1662790239183.png" alt="logo HEI" className=' size-15'/>
                    <p className=' text-gray-400 text-center'>Formation habilitée par l’Etat suivant le système LMD</p>
                    <p className=' text-gray-400 text-center'>Habilitation MESupRes n°31309/2023</p>
                </div>
                <div className='m-auto'>
                    <h1 className='text-white font-bold'>Adresse</h1>
                    <p className=' text-gray-400'>II J 161 R Ambodivoanjo </p>
                    <p className=' text-gray-400'>Ivandry Antananarivo</p>
                    <p className=' text-gray-400'>101, Madagascar</p>
                </div>
                <div className='m-auto'>
                    <h1 className='text-white font-bold'>Navigation</h1>
                    <p className='text-amber-400'>Accueil</p>
                    <p className='text-white hover:text-amber-400'>Actualité</p>
                    <p className='text-white hover:text-amber-400'>Bourde d'étude</p>
                    <p className='text-white hover:text-amber-400'>Inscription</p>
                </div>
                <div className='m-auto'>
                    <h1 className='text-white font-bold'>Médias sociaux</h1>
                </div>
            </footer>
        </>
    )
}
export default Footer
import './../css/index.css'
import Button from './Button.jsx'

function Footer() {
    return (
        <>
            <div className='bg-blue-950 m-auto py-5 justify-around items-center w-full flex'>
                <footer className="flex flex-wrap justify-around items-center sm:w-3/5 w-4/5 gap-4">
                    <div className='flex flex-col gap-3 text-balance'>
                        <img src="src/assets/Logo-e1662790239183.png" alt="logo HEI" className='w-25' />
                        <p className='text-gray-400'>Formation habilitée par l’Etat suivant le système LMD</p>
                        <p className='text-gray-400'>Habilitation MESupRes n°31309/2023</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-2xl font-bold'>Adresse</h1>
                        <p className=' text-gray-400 font-semibold'>II J 161 R Ambodivoanjo </p>
                        <p className=' text-gray-400 font-semibold'>Ivandry Antananarivo</p>
                        <p className=' text-gray-400 font-semibold'>101, Madagascar</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-2xl font-bold'>Navigation</h1>
                        <p className='text-amber-400 font-semibold'>Accueil</p>
                        <p className='text-white hover:text-amber-400 font-semibold'>Actualité</p>
                        <p className='text-white hover:text-amber-400 font-semibold'>Bourde d'étude</p>
                        <p className='text-white hover:text-amber-400 font-semibold'>Inscription</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-2xl font-bold'>Médias sociaux</h1>
                        <div className='flex w-full justify-around'>
                            <Button title={<i class="fa-brands fa-facebook"></i>} attributes={"text-2xl text-center text-white bg-amber-400 w-1/4 aspect-square rounded-full"}/>
                            <Button title={<i class="fa-brands fa-linkedin"></i>} attributes={"text-2xl text-center text-white bg-amber-400 w-1/4 aspect-square rounded-full"}/>
                            <Button title={<i class="fa-brands fa-instagram"></i>} attributes={"text-2xl text-center text-white bg-amber-400 w-1/4 aspect-square rounded-full"}/>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer
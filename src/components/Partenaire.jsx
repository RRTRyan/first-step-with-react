import './../css/index.css'
const srcLogo=["src/assets/bp-logo-full-1024x331.webp","src/assets/logo_emit.png" ,"src/assets/logo-etech.png",
    "src/assets/LOGO-NEXTA-768x431.webp","src/assets/logo-kante-company-1.png","src/assets/Logo-Numer-vf.png",
    "src/assets/PN_Logo_baseline_color_ENG.png",
    "src/assets/YIF_LOGO_512x512_BL_on_WH-1.webp","src/assets/Yooz-2023-Logo-2-768x253.webp"

]
function Partenaire () {
    return (
        <>
            <section className='m-full w-full flex flex-col min-h-40 py-10 px-40 justify-center items-center gap-10 mb-5 h-full'>
                <h1 className='font-bold text-5xl text-center text-blue-950 font-times-new-roman'>Nos partenaires</h1>
                <p className='text-center w-full 2xl:max-w-3/5 leading-8'>L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
                <div className=' 2xl:w-4/5 w-full flex justify-around flex-wrap gap-7 items-center'>
                    {srcLogo.map((Logo,index) => (
                        <img  key={index} src={Logo} alt="logo de partners" className='min-w-20 w-3/25 h-full'/>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Partenaire
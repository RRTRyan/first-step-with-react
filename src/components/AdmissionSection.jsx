import AdmissionCard from "./AdmissionCard.jsx";
import Button from "./Button.jsx";

export default function AdmissionSection() {
    return (
        <div className="flex flex-col items-center bg-light-teal">
            <section className="max-w-3/5 py-10 flex gap-10 flex-col justify-around flex-wrap">
                <h2 className="text-5xl text-white font-bold font-times-new-roman text-center">Admission</h2>
                <p className="text-center text-balance text-gray-100 leading-8">Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.</p>
                <AdmissionCard />
                <div className="flex justify-center gap-4">
                    <Button title={"Inscrivez-vous ici"} attributes={"text-xl font-semibold px-5 py-3 bg-transparent text-white border-2 border-white transition ease-in-out hover:border-blue-950 hover:bg-blue-950 hover:ease-in-out hover:transition"}/>
                    <Button title={"Résultat concours"} attributes={"text-xl font-semibold px-5 py-3 bg-blue-950 text-white border-2 border-blue-950 transition ease-in-out hover:border-white hover:bg-white hover:text-blue-950 hover:ease-in-out hover:transition"}/>
                </div>
            </section>
        </div>
    )
}
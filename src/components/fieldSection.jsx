import FieldCard from "./fieldCard.jsx";

export default function FieldSection() {
    return (
        <div className="flex flex-col items-center bg-gray-100">
            <section className="max-w-3/5 py-10 flex gap-10 flex-col justify-around flex-wrap">
                <h2 className="text-5xl text-blue-950 font-bold font-times-new-roman text-center">Domaines</h2>
                <p className="text-center">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
                <FieldCard />
            </section>
        </div>
    )
}
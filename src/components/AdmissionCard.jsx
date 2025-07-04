export default function AdmissionCard() {
    const number = ["01", "02", "03"]
    const subject = ["Dépôt de dossiers :", "Test de niveau :", "Inscription définitive"];
    const cardDesc = ["pour les bacheliers de toutes séries sans limite d’âge", "composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D", "(si test réussi)"];
    const cardAttribute = ["flex flex-col gap-5 p-5 w-1/3 h-60 min-w-80 min-w-30  bg-orange-100", "flex flex-col gap-5 p-5 w-1/3 h-60 min-w-80  bg-orange-200", "flex flex-col gap-5 p-5 w-1/3 h-60 min-w-80  bg-orange-300"]
    


    return (
        <div className="flex flex-wrap justify-center">
            {number.map((num, index) => (
                <div key={index} className={cardAttribute[index]}>
                    <h2 className="text-white text-5xl font-bold">{num}</h2>
                    <p className="text-black text-lg"><span className="font-bold">{subject[index]}</span> {cardDesc[index]}</p>                
                </div>
            ))}
        </div>
    )
}
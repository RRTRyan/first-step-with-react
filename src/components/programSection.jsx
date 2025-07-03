import ProgramDistributionCard from "./programDistributionCard.jsx";
import ProgramImageCard from "./programImageCard.jsx";
import Button from "./button.jsx";

export default function ProgramSection() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="max-w-3/5 flex flex-col py-10 gap-10">
                <div className="flex justify-around flex-wrap items-center gap-x-20">
                    <img src="src/assets/Program-img.webp" alt="" className="max-w-1/3 min-w-80" />
                    <div className="flex flex-col justify-center max-w-1/2 min-w-64 gap-10">
                        <h2 className="text-5xl text-blue-950 font-bold font-times-new-roman text-start">Le programme pédagogique</h2>
                        <p className="leading-8 text-balance">Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
                        <Button title={"Notre Programme"} attributes={"text-xl font-semibold px-5 max-w-fit py-2 bg-transparent text-blue-950 border-2 border-blue-950 transition ease-in-out hover:text-white hover:bg-blue-950 hover:ease-in-out hover:transition"} />
                    </div>
                </div>
                <ProgramDistributionCard />
                <ProgramImageCard />
            </section>
        </div>
    )
}
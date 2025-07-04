import Button from "./Button"

export default function Navbar() {
    return (
        <nav className="w-full py-5 h-26  bg-blue-950 text-white font-bold text-xl flex justify-center">
            <div className="max-w-4/5 min-w-2/3 h-full flex justify-between items-center">
                <img src="src/assets/Logo_HEI_navbar.png" alt="Logo HEI" className="h-full w-auto aspect-auto" />
                <div className="flex gap-5 h-full items-center mx-5">
                    <p className="text-yellow-500">Acceuil</p>
                    <p className="transition ease-in-out hover:text-yellow-500 hover:ease-in-out hover:transition">Actualités</p>
                    <p className="transition ease-in-out hover:text-yellow-500 hover:ease-in-out hover:transition">Bourses d'études</p>
                    <p className="transition ease-in-out hover:text-yellow-500 hover:ease-in-out hover:transition">Inscription</p>
                    <Button title={"Intranet"} attributes={"px-4 py-2 bg-yellow-500 transition ease-in-out hover:text-blue-950 hover:ease-in-out hover:transition"} />
                </div>
            </div>
        </nav>
    )
}
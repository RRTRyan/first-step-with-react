import AboutText from "./AboutText"

export default function AboutSection() {
    return (
        <div className="flex justify-center items-center">
            <section className="max-w-2/3 py-24 flex justify-around flex-wrap">
                <img src="src/assets/A-propos-left-1.webp" alt="" className="max-w-3/7 min-w-80 max-h-180 h-full aspect-square" />
                <AboutText />
            </section>
        </div>
    )
}
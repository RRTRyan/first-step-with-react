export default function TeamCard({ name, image, description }) {
    const imagehref = `src/assets/${image}`

    return (
        <div className="h-90 min-w-80 w-1/4 max-w-1/4 p-5 flex flex-col gap-3 items-center justify-around bg-white rounded-2xl">
            <div className="w-fit h-fit aspect-square p-1.5 rounded-full bg-slate-100 flex items-center justify-center">
                <img src={imagehref} alt="Photo" className="rounded-full w-full h-full object-cover" />
            </div>
            <p className="text-blue-950 font-bold text-2xl text-center font-times-new-roman">{name}</p>
            <p className="text-gray-600 font-thin text-center">{description}</p>
        </div>
    )
}
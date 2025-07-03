export default function ProgramImageCard() {
    const images = ["src/assets/Mask-group-1.webp", "src/assets/Mask-group-2.webp", "src/assets/Mask-group-3.webp"];

    return (
        <div className="w-full flex flex-wrap justify-around gap-3">
            {images.map((image , index) => (
                <img key={index} src={image} alt="" className="w-4/13 min-w-80 aspect-square" />
            ))}
        </div>
    )
}
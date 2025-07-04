export default function TechnoImage() {
    const images = [
        "src/assets/Java-150x150.png",
        "src/assets/JS-150x150.png",
        "src/assets/python-150x150.png",
        "src/assets/C-150x150.png",
        "src/assets/TS-150x150.png",
        "src/assets/docker-300x77.png",
        "src/assets/next.png",
        "src/assets/aws.png",
        "src/assets/serverless.png",
        "src/assets/react.png",
        "src/assets/openapi.png",
    ];
    
    return (
        <div className="flex flex-wrap gap-x-20 justify-around items-center w-full">
            {images.map((image, index) => (
                <img key={index} src={image} alt="" className="max-w-1/6 min-w-20 h-full scale-80 sm:scale-75"/>
            ))}
        </div>
    )
}
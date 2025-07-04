import { useEffect, useState } from 'react';
import TopCarouselElement from "./topCarouselElement";

export default function TopCarousel({ pageCount }) {

    let [pageNumber, setNumber] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((pageNumber + 1) % pageCount)
        }, 7000);
        return () => clearInterval(interval)
    })
    return <TopCarouselElement number={pageNumber} />
}
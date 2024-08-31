import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { useGlobalContext } from './ShopContext'
import { GrCaretNext } from 'react-icons/gr'
import { GrCaretPrevious } from 'react-icons/gr'

const FlashSales = () => {
    const [endCountdownDate, setEndCountdownDate] = useState(
        new Date('oct 16, 2024 00:00:00').getTime()
    )
    const [distance, setDistance] = useState(
        endCountdownDate - new Date().getTime()
    )
    const [days, setDays] = useState(0)
    const [hrs, setHrs] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)

    const { allProducts, isLoading, error } = useGlobalContext()

    const flashProducts = allProducts.slice(5, 14)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const newDistance = endCountdownDate - now

            setDistance(newDistance)
            setDays(Math.floor(newDistance / (1000 * 60 * 60 * 24)))
            setHrs(
                Math.floor(
                    (newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
            )
            setMins(Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60)))
            setSecs(Math.floor((newDistance % (1000 * 60)) / 1000))
        }, 1000)

        return () => clearInterval(interval)
    }, [endCountdownDate])

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <div className="flex justify-between md:justify-normal relative md:gap-40 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <p className="text-orange font-bold ">Today's</p>
                    </div>
                    <p className="md:text-3xl text-2xl font-bold">
                        Flash Sales
                    </p>
                </div>
                <div className="flex items-end gap-3">
                    <div>
                        <p className="text-sm">Days</p>
                        <p className="font-bold text-xl md:text-2xl">{days}</p>
                    </div>
                    <p className="font-bold text-lg text-orange md:text-xl">
                        :
                    </p>
                    <div>
                        <p className="text-sm">Hrs</p>
                        <p className="font-bold text-xl md:text-2xl">{hrs}</p>
                    </div>
                    <p className="font-bold text-lg text-orange md:text-xl">
                        :
                    </p>
                    <div>
                        <p className="text-sm">Mins</p>
                        <p className="font-bold text-xl md:text-2xl">{mins}</p>
                    </div>
                    <p className="font-bold text-lg text-orange md:text-xl">
                        :
                    </p>
                    <div>
                        <p className="text-sm">Secs</p>
                        <p className="font-bold text-xl md:text-2xl">{secs}</p>
                    </div>
                </div>
                <div className="md:flex gap-20 absolute top-5 right-20 hidden ">
                    <div
                        onClick={slideLeft}
                        className="px-2 py-2 bg-gray-200 rounded-full"
                    >
                        <GrCaretPrevious className="text-xl" />
                    </div>
                    <div
                        onClick={slideRight}
                        className="px-2 py-2 bg-gray-200 rounded-full"
                    >
                        <GrCaretNext className="text-xl" />
                    </div>
                </div>
            </div>

            <div
                id="slider"
                className="flex md:flex-row flex-col items-center gap-5 my-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
                {flashProducts.map((item, i) => {
                    return (
                        <div key={i}>
                            <ItemCard
                                key={i}
                                name={item.title}
                                reviews={item.reviews.length}
                                price={item.price}
                                thumbnail={item.thumbnail}
                                discount={item.discountPercentage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FlashSales

import React from 'react'
import { useState, useEffect } from 'react'
import speaker from '../assets/speakerJBL.png'
const ProductBanner = () => {
    const [days, setDays] = useState(0)
    const [hrs, setHrs] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)
    const [endCountdownDate, setEndCountdownDate] = useState(
        new Date('nov 16, 2024 00:00:00').getTime()
    )
    const [distance, setDistance] = useState(
        endCountdownDate - new Date().getTime()
    )
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
    return (
        <article className="md:flex bg-black text-white p-10 mb-10">
            <div className="md:w-1/2">
                <h4 className="text-green-500 font-bold mb-4">Categories</h4>
                <h2 className="md:text-6xl text-3xl mb-4">
                    Enhance Your Music Experience
                </h2>
                <time className="flex items-end gap-3 mb-5">
                    <div className="border border-gray-500 h-16 bg-white text-black w-16 flex flex-col rounded-full justify-center items-center">
                        <p className="font-bold text-xl md:text-2xl">{days}</p>
                        <p className="text-sm">Days</p>
                    </div>

                    <div className="border border-gray-500 h-16 bg-white text-black w-16 flex flex-col rounded-full justify-center items-center">
                        <p className="font-bold text-xl md:text-2xl">{hrs}</p>
                        <p className="text-sm">Hrs</p>
                    </div>

                    <div className="border border-gray-500 h-16 bg-white text-black w-16 flex flex-col rounded-full justify-center items-center">
                        <p className="font-bold text-xl md:text-2xl">{mins}</p>
                        <p className="text-sm">Mins</p>
                    </div>

                    <div className="border border-gray-500 h-16 bg-white text-black w-16 flex flex-col rounded-full justify-center items-center">
                        <p className="font-bold text-xl md:text-2xl">{secs}</p>
                        <p className="text-sm">Secs</p>
                    </div>
                </time>
                <button className="bg-green-500 text-white px-5 py-2 rounded-md">
                    Buy Now!
                </button>
            </div>
            <div className="md:w-1/2 relative flex justify-center items-center">
                <img src={speaker} alt="speaker of jbl" />
            </div>
        </article>
    )
}

export default ProductBanner

import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './ShopContext'
export const Carousel = () => {
    const [currentDisplay, setCurrentDisplay] = useState(0)
    const { bannerList } = useGlobalContext()

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentDisplay < bannerList.length - 1) {
                setCurrentDisplay(currentDisplay + 1)
            } else {
                setCurrentDisplay(0)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [currentDisplay])

    return (
        <div className="border relative border-green-500 md:h-80 h-40 overflow-hidden md:w-full m-10 md:mr-0">
            <div className="bg-black h-full w-full opacity-40 absolute top-0 left-0"></div>
            <img
                className="object-cover object-center h-full w-full"
                src={bannerList[currentDisplay].img}
                alt="banner image"
            />
            <div className="absolute bottom-5 left-1/2 flex gap-2 -translate-x-1/2">
                {bannerList.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`h-2 w-2  ${
                                item.id === currentDisplay
                                    ? 'bg-white'
                                    : 'bg-gray-500'
                            } rounded-full`}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}

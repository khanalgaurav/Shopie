import React from 'react'
import CategoryCard from './CategoryCard'
import { useGlobalContext } from './ShopContext'
import { GrCaretNext } from 'react-icons/gr'
import { GrCaretPrevious } from 'react-icons/gr'
import { useEffect } from 'react'
const BrowseByCategory = () => {
    const { categories } = useGlobalContext()
    const slideLeft = () => {
        let slider = document.getElementById('slider-category')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider-category')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    useEffect(() => {
        const slider = document.getElementById('slider-category')

        const handleWheel = (e) => {
            e.preventDefault() // Prevent default scrolling behavior
            slider.scrollLeft += e.deltaY * 2 // Adjust the multiplier for sensitivity
        }

        slider.addEventListener('wheel', handleWheel, { passive: false })

        // Clean up the event listener on component unmount
        return () => {
            slider.removeEventListener('wheel', handleWheel)
        }
    }, [])
    const category = categories.slice(0, 8)
    return (
        <div className="relative border-b border-gray-300 py-10 m-5">
            <div className="flex justify-between md:justify-normal relative md:gap-40 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <p className="text-orange font-bold ">Categories</p>
                    </div>
                    <p className="md:text-3xl text-2xl font-bold">
                        Browse By Categories
                    </p>
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
                id="slider-category"
                className="flex md:flex-row flex-col items-center gap-7 my-8 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
                {category.map((item, i) => {
                    return (
                        <div key={i}>
                            <CategoryCard
                                icon={item.slice(0, 1).toUpperCase()}
                                title={item}
                            />
                        </div>
                    )
                })}
                {/* <CategoryCard icon="E" title="Electronics" /> */}
            </div>
        </div>
    )
}

export default BrowseByCategory

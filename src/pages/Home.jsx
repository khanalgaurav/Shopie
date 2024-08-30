import React from 'react'
import CategoriesMenu from '../components/CategoriesMenu'
import { Carousel } from '../components/Carousel'
import FlashSales from '../components/FlashSales'

const Home = () => {
    return (
        <div className="md:mx-32 mx-5">
            <div className="md:flex">
                <CategoriesMenu />
                <Carousel />
            </div>
            <FlashSales />
        </div>
    )
}

export default Home

import React from 'react'
import CategoriesMenu from '../components/CategoriesMenu'
import { Carousel } from '../components/Carousel'
import FlashSales from '../components/FlashSales'
import BrowseByCategory from '../components/BrowseByCategory'

const Home = () => {
    return (
        <div className="md:mx-32 mx-5">
            <div className="md:flex">
                <CategoriesMenu />
                <Carousel />
            </div>
            <FlashSales />
            <BrowseByCategory />
        </div>
    )
}

export default Home

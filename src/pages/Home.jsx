import React from 'react'
import CategoriesMenu from '../components/CategoriesMenu'
import { Carousel } from '../components/Carousel'
import FlashSales from '../components/FlashSales'
import BrowseByCategory from '../components/BrowseByCategory'
import BestSellingProducts from '../components/BestSellingProducts'
import ProductBanner from '../components/ProductBanner'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'
import Features from '../components/Features'

const Home = () => {
    return (
        <div className="md:mx-32 mx-5">
            <div className="md:flex">
                <CategoriesMenu />
                <Carousel />
            </div>
            <FlashSales />
            <BrowseByCategory />
            <BestSellingProducts />
            <ProductBanner />
            <OurProducts />
            <NewArrival />
            <Features />
        </div>
    )
}

export default Home

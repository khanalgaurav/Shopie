import React from 'react'
import CategoriesMenu from '../components/CategoriesMenu'
import { Carousel } from '../components/Carousel'

const Home = () => {
  return (
    <div className='md:mx-32'>
      <div className='md:flex'>
        <CategoriesMenu/>
        <Carousel/>
      </div>
    </div>
  )
}

export default Home
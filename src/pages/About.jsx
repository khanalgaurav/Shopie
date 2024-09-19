import React from 'react'
import sideImage from '../assets/about-side-image.png'
import store from '../assets/icon_shop.png'
import shoppingBag from '../assets/Icon-Shopping-bag.png'
import moneyBag from '../assets/Icon-Moneybag.png'
import { PiCurrencyCircleDollarLight } from 'react-icons/pi'
import EmployeeCard from '../components/EmployeeCard'
import employee from '../assets/employee'
import { GrCaretNext } from 'react-icons/gr'
import { GrCaretPrevious } from 'react-icons/gr'

const About = () => {
    const slideLeft = () => {
        let slider = document.getElementById('slider-employee')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider-employee')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div className="md:mx-32 mx-10">
            <h5 className="text-gray-500 mt-10">
                Home / <span className="text-black">About</span>
            </h5>
            <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-4 items-center md:my-10">
                <article className="md:w-1/2 md:pr-32">
                    <h1 className="font-bold text-6xl md:text-7xl py-7">
                        Our Story
                    </h1>
                    <p className=" my-7 text-lg">
                        Launced in 2015, Exclusive is South Asia’s premier
                        online shopping makterplace with an active presense in
                        Nepal. Supported by wide range of tailored marketing,
                        data and service solutions, Exclusive has 10,500 sallers
                        and 300 brands and serves 3 millioons customers across
                        the region.
                    </p>
                    <p className="text-lg">
                        Exclusive has more than 1 Million products to offer,
                        growing at a very fast. Exclusive offers a diverse
                        assotment in categories ranging from consumer. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, cumque.
                    </p>
                </article>
                <div className="md:w-1/2 flex justify-end">
                    <img className="md:w-[600px]" src={sideImage} alt="" />
                </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-10 md:gap-0 md:my-32 my-24 justify-between">
                <div className="flex flex-col justify-center items-center border border-gray-400 rounded-md p-7 hover:bg-orange hover:text-white md:h-60 md:w-64 w-full h-full">
                    <div>
                        <img
                            className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                            src={store}
                        ></img>
                    </div>
                    <h1 className="font-bold text-3xl mt-5 mb-1">10.5k</h1>
                    <p className="text-sm">Sallers active our site</p>
                </div>

                <div className="flex flex-col justify-center items-center border border-gray-400 rounded-md p-7 hover:bg-orange hover:text-white md:h-60 md:w-64 w-full h-full">
                    <div className="bg-black rounded-full p-2 border-[15px] border-gray-300">
                        <PiCurrencyCircleDollarLight className="text-white text-4xl" />
                    </div>
                    <h1 className="font-bold text-3xl mt-5 mb-1">33k</h1>
                    <p className="text-sm">Monthly Product Sale</p>
                </div>

                <div className="flex flex-col justify-center items-center border border-gray-400 rounded-md p-7 hover:bg-orange hover:text-white md:h-60 md:w-64 w-full h-full">
                    <div>
                        <img
                            className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                            src={shoppingBag}
                        ></img>
                    </div>
                    <h1 className="font-bold text-3xl mt-5 mb-1">45.5k</h1>
                    <p className="text-sm">Customer active in our site</p>
                </div>

                <div className="flex flex-col justify-center items-center border border-gray-400 rounded-md p-7 hover:bg-orange hover:text-white md:h-60 md:w-64 w-full h-full">
                    <div>
                        <img
                            className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                            src={moneyBag}
                        ></img>
                    </div>
                    <h1 className="font-bold text-3xl mt-5 mb-1">25k</h1>
                    <p className="text-sm">Anual gross sale in our site</p>
                </div>
            </div>
            <header className="flex justify-between md:justify-normal relative md:gap-40 items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <h5 className="text-orange font-bold ">Team Shopie</h5>
                    </div>
                    <h1 className="md:text-3xl text-2xl font-bold">
                        Staff Members({employee.length})
                    </h1>
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
            </header>
            <div
                id="slider-employee"
                className="flex md:flex-row flex-col justify-between items-center gap-10 mt-10 mb-20 overflow-x-scroll scroll-smooth scrollbar-hide"
            >
                {employee.map((item, i) => {
                    return (
                        <EmployeeCard
                            key={i}
                            name={item.name}
                            image={item.img}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default About

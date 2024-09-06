import React, { useState } from 'react'
import truck from '../assets/delivery icon.png'
import headphone from '../assets/customer-service.png'
import shield from '../assets/Icon-secure.png'
import { FaArrowUpLong } from 'react-icons/fa6'

import ScrollToTop from 'react-scroll-to-top'

const Features = () => {
    return (
        <section className="flex md:flex-row flex-col gap-4 relative justify-center md:justify-center md:gap-20 items-center p-5 mb-20">
            <div className="w-fit flex flex-col justify-center items-center">
                <div>
                    <img
                        className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                        src={truck}
                    ></img>
                </div>
                <h1 className="font-bold mt-5 mb-1">FREE AND FAST DELIVERY</h1>
                <p className="text-sm">
                    Free delivery for all the orders over $140
                </p>
            </div>

            <div className="w-fit flex flex-col justify-center items-center">
                <div>
                    <img
                        className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                        src={headphone}
                    ></img>
                </div>
                <h1 className="font-bold mt-5 mb-1">24/7 CUSTOMER SERVICE</h1>
                <p className="text-sm">Friendly 24/7 customer support</p>
            </div>

            <div className="w-fit flex flex-col justify-center items-center">
                <div>
                    <img
                        className="bg-black rounded-full p-2 border-[15px] border-gray-300"
                        src={shield}
                    ></img>
                </div>
                <h1 className="font-bold mt-5 mb-1">MONEY BACK GUARANTEE</h1>
                <p className="text-sm">Return money within 30days</p>
            </div>
            <ScrollToTop
                className="animate-bounce flex justify-center items-center !rounded-full !h-12 !w-12"
                component={<FaArrowUpLong />}
                smooth
            />
        </section>
    )
}

export default Features

import React from 'react'
import playstation from '../assets/ps5.png'
import perfume from '../assets/perfume.png'
import speakers from '../assets/speakers.png'
import women from '../assets/attractive-woman-wearing-hat-posing-black.png'

const NewArrival = () => {
    return (
        <section className="my-20">
            <header className="flex justify-between md:justify-normal relative md:gap-40 items-center my-10">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-4 rounded-md bg-orange"></div>
                        <h5 className="text-orange font-bold ">Featured</h5>
                    </div>
                    <h1 className="md:text-3xl text-2xl font-bold">
                        New Arrival
                    </h1>
                </div>
            </header>
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 justify-between mb-10">
                <div className="relative bg-black md:w-[48%] flex justify-center">
                    <img className="" src={playstation} alt="ps5" />
                    <div className="absolute bottom-28 left-10 text-white h-10 md:w-60">
                        <h1 className="text-2xl font-bold mb-3">
                            Play Station 5
                        </h1>
                        <p className="text-sm mb-3">
                            Black and white version of Playstation is comming
                            out on sale
                        </p>
                        <button className="underline">Shop Now</button>
                    </div>
                </div>
                <div className="flex flex-col md:gap-0 gap-5 justify-between md:w-1/2">
                    <div className="bg-black flex justify-end md:h-[48%] relative">
                        <img
                            className=""
                            src={women}
                            alt="attractive woman wearing hat posing black"
                        />
                        <div className="absolute bottom-28 left-10 text-white h-10 md:w-60">
                            <h1 className="text-2xl font-bold mb-3">
                                Women's Collection
                            </h1>
                            <p className="text-sm mb-3">
                                Featured woman collections that give you another
                                vibe.
                            </p>
                            <button className="underline">Shop Now</button>
                        </div>
                        {/* womens collection */}
                    </div>
                    <div className="flex justify-between md:h-[48%]">
                        <div className="bg-black w-[48%] flex justify-center relative p-5">
                            <img src={speakers} alt="speakers" />
                            <div className="absolute bottom-28 left-10 text-white h-10 md:w-60">
                                <h1 className="text-2xl font-bold mb-3">
                                    Speakers
                                </h1>
                                <p className="text-sm mb-3">
                                    Amazon wireless speakers
                                </p>
                                <button className="underline">Shop Now</button>
                            </div>
                        </div>
                        <div className="w-[48%] bg-black flex justify-center relative p-5">
                            <img className="" src={perfume} alt="perfume" />
                            <div className="absolute bottom-28 left-10 text-white h-10 md:w-60">
                                <h1 className="text-2xl font-bold mb-3">
                                    Perfume
                                </h1>
                                <p className="text-sm mb-3">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <button className="underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrival

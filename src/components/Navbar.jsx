import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className="border-b border-gray-300 md:pt-8 flex items-center py-2 md:pb-3 overflow-hidden">
            <div className="flex md:mx-32 justify-between items-center px-1 w-screen">
                <NavLink to={'/'}>
                    <div>
                        <p className="md:text-3xl font-bold text-2xl">SHOPIE</p>
                    </div>
                </NavLink>
                <div className={` `}>
                    <ul
                        className={`${
                            toggleMenu ? 'w-1/2 md:w-auto' : 'w-0 md:w-auto'
                        } transition-all ease-in-out duration-500 overflow-hidden gap-10 md:flex fixed onClick={handleMenu} top-0 right-0 bg-orange md:bg-white h-screen md:h-auto md:static md:text-lg text-xl md:p-0 md:m-0 z-10`}
                    >
                        <div onClick={handleMenu} className="flex justify-end">
                            <RxCross2 className="text-5xl md:hidden" />
                        </div>
                        <NavLink
                            onClick={handleMenu}
                            to={'/'}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? 'text-black md:text-orange'
                                        : 'text-white md:text-black'
                                }`
                            }
                        >
                            <li className="md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]">
                                Home
                            </li>
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            to={'/contact'}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? 'text-black md:text-orange'
                                        : 'text-white md:text-black'
                                }`
                            }
                        >
                            <li className="md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]">
                                Contact
                            </li>
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            to={'/about'}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? 'text-black md:text-orange'
                                        : 'text-white md:text-black'
                                }`
                            }
                        >
                            <li className="md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]">
                                About
                            </li>
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            to={'/login'}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? 'text-black md:text-orange'
                                        : 'text-white md:text-black'
                                }`
                            }
                        >
                            <li className="md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]">
                                Signin
                            </li>
                        </NavLink>
                        <div className="md:hidden flex mt-10 justify-around text-white text-5xl gap-3 items-center">
                            <NavLink onClick={handleMenu} to={'/wishlist'}>
                                <CiHeart />
                            </NavLink>
                            <NavLink onClick={handleMenu} to={'/cart'}>
                                <IoCartOutline />
                            </NavLink>
                        </div>
                    </ul>
                </div>

                <div className="md:flex justify-around gap-5 items-center">
                    <div className="flex bg-[#f5f5f5] p-2">
                        <input
                            className="bg-transparent w-56 focus:outline-none"
                            type="search"
                            placeholder="What are you looking for ?"
                        />
                        <CiSearch className="text-2xl" />
                    </div>
                    <div className="md:flex hidden text-3xl gap-3 items-center">
                        <NavLink to={'/wishlist'}>
                            <CiHeart />
                        </NavLink>
                        <NavLink to={'/cart'}>
                            <IoCartOutline />
                        </NavLink>
                    </div>
                </div>
                <div onClick={handleMenu} className="block md:hidden">
                    <IoIosMenu className="text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

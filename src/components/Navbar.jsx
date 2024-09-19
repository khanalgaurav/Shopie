import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { IoIosLocate, IoIosMenu } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { FiUser } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'
import { IoIosStarOutline } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { TbLogout2 } from 'react-icons/tb'
import { useGlobalContext } from './ShopContext'
import { useItemContext } from './ItemsContext'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { setIsLoggedIn, isLoggedIn, userName } = useGlobalContext()
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    const [showUserDropdown, setShowUserDropdown] = useState(false)
    const { cartItems, wishListItems } = useItemContext()
    return (
        <nav className="border-b border-gray-300 md:pt-8 flex items-center py-2 md:pb-3 overflow-hidden">
            <div className="flex md:mx-32 justify-between items-center px-1 w-screen">
                <NavLink to={'/'}>
                    <div>
                        <h1 className="md:text-3xl font-bold text-2xl">
                            SHOPIE
                        </h1>
                    </div>
                </NavLink>
                <section>
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
                            <li
                                className={`${
                                    isLoggedIn ? 'hidden' : 'block'
                                } md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]`}
                            >
                                Signin
                            </li>
                        </NavLink>

                        <NavLink
                            onClick={handleMenu}
                            to={'/user/account'}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? 'text-black md:text-orange'
                                        : 'text-white md:text-black'
                                }`
                            }
                        >
                            <li
                                className={`${
                                    isLoggedIn ? 'block' : 'hidden'
                                } md:border-none border-b-2 text-center pt-6 border-[#f5f5f5]`}
                            >
                                {userName}
                            </li>
                        </NavLink>

                        <div className="md:hidden flex mt-10 justify-around text-white text-5xl gap-3 items-center">
                            <NavLink onClick={handleMenu} to={'/wishlist'}>
                                <div className="relative">
                                    <CiHeart />
                                    <p className="bg-white text-orange absolute top-0 -right-1 w-6 h-6 flex justify-center items-center rounded-full text-lg ">
                                        {wishListItems.length}
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink onClick={handleMenu} to={'/cart'}>
                                <div className="relative">
                                    <IoCartOutline />
                                    <p className="bg-white text-orange absolute top-0 -right-1 w-6 h-6 flex justify-center items-center rounded-full text-lg ">
                                        {cartItems.length}
                                    </p>
                                </div>
                            </NavLink>
                            <FiUser
                                className={`${isLoggedIn ? 'block' : 'hidden'}`}
                                onClick={() =>
                                    setShowUserDropdown(!showUserDropdown)
                                }
                            />
                            <ul
                                className={`${
                                    showUserDropdown ? 'block' : 'hidden'
                                } absolute text-sm bg-black/30 backdrop-blur-lg text-white bottom-14 right-0 p-4 rounded-md z-10`}
                            >
                                <Link to={'/user/account'}>
                                    <li
                                        onClick={() => {
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            ),
                                                handleMenu()
                                        }}
                                        className="flex items-center my-4 hover:cursor-pointer hover:text-black gap-4"
                                    >
                                        <FiUser /> Manage My Account
                                    </li>
                                </Link>
                                <Link to={'/user/order'}>
                                    <li
                                        onClick={() => {
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            ),
                                                handleMenu()
                                        }}
                                        className="flex items-center my-4 hover:cursor-pointer hover:text-black gap-4"
                                    >
                                        <FiShoppingBag /> My Order
                                    </li>
                                </Link>
                                <Link to={'/user/cancellations'}>
                                    <li
                                        onClick={() => {
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            ),
                                                handleMenu()
                                        }}
                                        className="flex items-center my-4 hover:cursor-pointer hover:text-black gap-4"
                                    >
                                        <MdOutlineCancel /> My Cancellations
                                    </li>
                                </Link>
                                <Link to={'/user/reviews'}>
                                    <li
                                        onClick={() => {
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            ),
                                                handleMenu()
                                        }}
                                        className="flex items-center my-4 hover:cursor-pointer hover:text-black gap-4"
                                    >
                                        <IoIosStarOutline /> My Reviews
                                    </li>
                                </Link>
                                <Link to={'/login'}>
                                    <li
                                        onClick={() => {
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            ),
                                                handleMenu()
                                        }}
                                        className="flex items-center my-4 hover:cursor-pointer hover:text-black gap-4"
                                    >
                                        <TbLogout2 /> Logout
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </ul>
                </section>

                <section className="md:flex justify-around gap-5 items-center">
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
                            <div className="relative">
                                <CiHeart />
                                <p className="bg-red-500 absolute top-0 -right-1 w-4 h-4 flex justify-center items-center rounded-full text-xs ">
                                    {wishListItems.length}
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/cart'}>
                            <div className="relative">
                                <IoCartOutline />
                                <p className="bg-red-500 absolute top-0 -right-1 w-4 h-4 flex justify-center items-center rounded-full text-xs ">
                                    {cartItems.length}
                                </p>
                            </div>
                        </NavLink>
                        <FiUser
                            className={`${isLoggedIn ? 'block' : 'hidden'}`}
                            onClick={() =>
                                setShowUserDropdown(!showUserDropdown)
                            }
                        />
                        <ul
                            className={`${
                                showUserDropdown ? 'block' : 'hidden'
                            } absolute text-lg bg-black/30 backdrop-blur-lg text-white top-[120px] right-32 p-4 rounded-md z-10`}
                        >
                            <Link to={'/user/account'}>
                                <li
                                    onClick={() =>
                                        setShowUserDropdown(!showUserDropdown)
                                    }
                                    className="flex items-center my-1 hover:cursor-pointer hover:text-orange gap-4"
                                >
                                    <FiUser /> Manage My Account
                                </li>
                            </Link>
                            <Link to={'/user/order'}>
                                <li
                                    onClick={() =>
                                        setShowUserDropdown(!showUserDropdown)
                                    }
                                    className="flex items-center my-1 hover:cursor-pointer hover:text-orange gap-4"
                                >
                                    <FiShoppingBag /> My Order
                                </li>
                            </Link>
                            <Link to={'/user/cancellations'}>
                                <li
                                    onClick={() =>
                                        setShowUserDropdown(!showUserDropdown)
                                    }
                                    className="flex items-center my-1 hover:cursor-pointer hover:text-orange gap-4"
                                >
                                    <MdOutlineCancel /> My Cancellations
                                </li>
                            </Link>
                            <Link to={'/user/reviews'}>
                                <li
                                    onClick={() =>
                                        setShowUserDropdown(!showUserDropdown)
                                    }
                                    className="flex items-center my-1 hover:cursor-pointer hover:text-orange gap-4"
                                >
                                    <IoIosStarOutline /> My Reviews
                                </li>
                            </Link>
                            <Link to={'/login'}>
                                <li
                                    onClick={() => {
                                        setIsLoggedIn(false),
                                            setShowUserDropdown(
                                                !showUserDropdown
                                            )
                                    }}
                                    className="flex items-center my-1 hover:cursor-pointer hover:text-orange gap-4"
                                >
                                    <TbLogout2 /> Logout
                                </li>
                            </Link>
                        </ul>
                    </div>
                </section>
                <div onClick={handleMenu} className="block md:hidden">
                    <IoIosMenu className="text-4xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

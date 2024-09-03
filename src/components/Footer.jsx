import React from 'react'
import { LuSend, LuSendHorizonal } from 'react-icons/lu'
import { FaLink, FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { FaLinkedin } from 'react-icons/fa'
import Qr from '/qr.png'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
    return (
        <footer className="bg-black text-white px-2 pt-1 flex flex-col justify-center items-center text-center md:text-left text">
            <div className=" md:flex md:justify-between md:py-10 md:w-screen md:px-32">
                <article className="mb-10 text-lg">
                    <NavLink to={'/'}>
                        <h1 className="font-bold mb-5 text-4xl">SHOPIE</h1>
                    </NavLink>
                    <h3 className="underline text-2xl">Subscribe</h3>
                    <p>Get 10% Off For your First Order</p>
                    <div className="flex items-center gap-2 justify-center border mt-1">
                        <input
                            className="bg-transparent focus:outline-none mt-3"
                            type="text"
                            placeholder="Enter your Email"
                        />
                        <LuSendHorizonal className="text-2xl" />
                    </div>
                </article>

                <article className="mb-5 w-60">
                    <h3 className="text-xl font-bold text-blue-500">Support</h3>
                    <ul>
                        <li className="text-lg mt-1">
                            Budhanilkantha-12, Kapan, Kathmandu, Nepal
                        </li>
                        <li className="text-lg mt-1">shopie@gmail.com</li>
                        <li className="text-lg mt-1">+977 01-12345678</li>
                    </ul>
                </article>

                <article className="mb-5">
                    <h3 className="text-xl font-bold text-blue-500">Account</h3>
                    <ul>
                        <NavLink to={'/user/account'}>
                            <li className="underline text-lg mt-1">
                                My Account
                            </li>
                        </NavLink>
                        <NavLink to={'/login'}>
                            <li className="underline text-lg mt-1">
                                Login/Register
                            </li>
                        </NavLink>
                        <NavLink to={'/cart'}>
                            <li className="underline text-lg mt-1">Cart</li>
                        </NavLink>
                        <NavLink to={'/wishlist'}>
                            <li className="underline text-lg mt-1">Wishlist</li>
                        </NavLink>
                        <NavLink to={'/'}>
                            <li className="underline text-lg mt-1">Shop</li>
                        </NavLink>
                    </ul>
                </article>
                <article className="mb-5">
                    <h3 className="text-xl font-bold text-blue-500">
                        Quick Links
                    </h3>
                    <ul>
                        <li className="underline text-lg mt-1">
                            Privacy Policy
                        </li>
                        <li className="underline text-lg mt-1">
                            Terms & Conditions
                        </li>
                        <li className="underline text-lg mt-1">FAQ</li>
                        <li className="underline text-lg mt-1">Contacts</li>
                    </ul>
                </article>
                <article className="mb-5">
                    <h3 className="text-xl font-bold text-blue-500">
                        Download App
                    </h3>
                    <p>save $3 with App - New Users Only</p>
                    <p className="flex mt-2 justify-center">
                        <img
                            className="h-20 w-20"
                            src={Qr}
                            alt="QR code to download Shopie"
                        />
                    </p>
                    <ul className="flex justify-center gap-7 text-3xl mt-5">
                        <li>
                            <FaXTwitter />
                        </li>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <PiInstagramLogoFill />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                    </ul>
                </article>
            </div>
            <div className="py-5 text-gray-500">
                <p>&copy; Copyright Gaurav 2024, All rights reserved</p>
            </div>
        </footer>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoriesMenu = () => {
    return (
        <section className="md:border-r md:w-1/4 md:border-gray-300">
            <div className="pt-5 pr-5">
                <ul className="flex flex-wrap gap-3 justify-center border-red-500 md:block">
                    <NavLink to={'/category/beauty'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Beauty & Fashion
                        </li>
                    </NavLink>
                    <NavLink to={'/category/fragrances'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Fragrance
                        </li>
                    </NavLink>
                    <NavLink to={'/category/furniture'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Furniture
                        </li>
                    </NavLink>
                    <NavLink to={'/category/groceries'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Groceries & Pets
                        </li>
                    </NavLink>
                    <NavLink to={'/nowheretogo'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Electronics & Appliances
                        </li>
                    </NavLink>
                    <NavLink to={'/nowheretogo'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Home & Lifestyle
                        </li>
                    </NavLink>
                    <NavLink to={'/nowheretogo'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Kids & Toys
                        </li>
                    </NavLink>
                    <NavLink to={'/nowheretogo'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Medicine
                        </li>
                    </NavLink>
                    <NavLink to={'/nowheretogo'}>
                        <li className="p-1.5 border border-gray-300 md:border-none hover:bg-orange hover:text-white">
                            Categories
                        </li>
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

export default CategoriesMenu

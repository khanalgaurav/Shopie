import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { PiLinkedinLogo } from 'react-icons/pi'
import { FiGithub } from 'react-icons/fi'

const EmployeeCard = ({ image, name, title }) => {
    return (
        <article className=" w-fit">
            <div className="h-[310px] rounded-lg overflow-hidden w-60">
                <img
                    src={image}
                    className="h-full  w-full object-cover"
                    alt=""
                />
            </div>
            <h1 className="text-2xl my-2">{name}</h1>
            <h2 className="text-lg my-2">{title}</h2>
            <div className="flex text-2xl gap-4 my-2">
                <FaXTwitter className="hover:animate-bounce cursor-pointer" />
                <PiLinkedinLogo className="hover:animate-bounce cursor-pointer" />
                <FiGithub className="hover:animate-bounce cursor-pointer" />
            </div>
        </article>
    )
}

export default EmployeeCard

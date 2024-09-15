import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className="md:mx-32 mx-10">
            <div className="my-10">
                <h1 className="text-gray-400">
                    Home / <span className="text-black">Contact</span>
                </h1>
            </div>
            <div className="flex md:flex-row flex-col gap-20 mt-10 md:mb-40 mb-24">
                <ContactCard />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact

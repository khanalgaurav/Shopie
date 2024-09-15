import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { LuMail } from 'react-icons/lu'

const ContactCard = () => {
    return (
        <div className="md:w-fit w-full p-6 shadow-xl border rounded-lg border-gray-200 shadow-gray-300">
            <div className="border-b border-black pb-10">
                <div className="flex justify-start gap-3 text-xl items-center mb-5">
                    <div className="p-2 bg-orange text-white rounded-full">
                        <FiPhone />
                    </div>
                    <p className="font-bold text-lg">Call To Us</p>
                </div>
                <p className="py-2">We are available 24/7, 7 days a week.</p>
                <p className="py-2">Phone: +977 9811112222</p>
            </div>
            <div className="mt-5">
                <div className="flex justify-start gap-3 text-xl items-center mb-5">
                    <div className="p-2 bg-orange text-white rounded-full">
                        <LuMail />
                    </div>
                    <p className="font-bold text-lg">Write To Us</p>
                </div>
                <p className="py-2">
                    Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="py-2">Emails: customer@Shopiestore.com</p>
                <p className="py-2">Emails: support@Shopiestore.com</p>
            </div>
        </div>
    )
}

export default ContactCard

import React from 'react'

const ContactForm = () => {
    return (
        <div className="p-10 shadow-xl border rounded-lg border-gray-200 shadow-gray-300 w-full">
            <form className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <label className="text-lg font-bold md:hidden">
                        Contact Form :{' '}
                    </label>

                    <input
                        className="bg-gray-200 focus:outline-none rounded-sm text-lg px-3 py-2 md:w-72"
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        className="bg-gray-200 focus:outline-none rounded-sm text-lg px-3 py-2 md:w-72"
                        type="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="bg-gray-200 focus:outline-none rounded-sm text-lg px-3 py-2 md:w-72"
                        type="text"
                        placeholder="Your Phone"
                    />
                </div>
                <div className="">
                    <textarea
                        className="focus:outline-none p-3 text-lg w-full bg-gray-200"
                        placeholder="Your Message"
                        rows={10}
                    />
                </div>
                <div className="flex justify-end w-full">
                    <button className="bg-orange px-7 text-white rounded-md py-3">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm

function ContactPage() {
    return ( <div className="h-screen bg-gray-800/20">
    <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
            <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
            <form className="flex flex-col items-center">
                <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div className="flex flex-col md:flex-row">
                        <input id="name" type="text"
                            className="my-2 py-2 px-4 rounded-md bg-deep text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Name" required/>
                        <input id="email" type="email"
                            className="my-2 py-2 px-4 rounded-md bg-deep text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Email" required/>
                    </div>
                    <input id="subject" type="text" placeholder="Subject"
                        className="my-2 py-2 px-4 rounded-md bg-deep text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" required/>
                    <textarea id="message" rows={5} placeholder="Say Something"
                        className="my-2 py-2 px-4 rounded-md bg-deep text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
                </div>
                <button
                    className="border-1 rounded-xl cursor-pointer text-md mt-5 py-2 px-4 bg-primary hover:bg-green-500 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600">
                    Send Message
                </button>
            </form>
        </div>
    </div>
</div>
    )
}

export default ContactPage

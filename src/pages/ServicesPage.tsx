import ServiceCardComponent from "../components/ServiceCardComponent"

function ServicesPage() {
    return (
        <div className=" flex flex-wrap gap-3 gap-x-12 items-center justify-around overflow-auto mt-[3vh] h-[80vh]">

    {/* <section id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"> */}


        <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose me
            </span>
            <h2
                className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
               I Can Build a Website That Your Customers Love
            </h2>
            {/* <p
                className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
               My templates allow for maximum customization. No technical skills required – our intuitive design tools
                let
                you get the job done easily.
            </p> */}
        </div>


        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
    <ServiceCardComponent 
    src="svg/frontend.svg"
    serviceName="Front-End Development" 
    serviceDetails="
    I build intuitive, responsive user interfaces using React and Tailwind CSS. With a focus on modular architecture and clean design, I turn complex interactions into smooth user experiences—optimized for performance and accessibility.
    "/>
    <ServiceCardComponent 
    src="svg/backend.svg"
    serviceName="Back-End Development"
        serviceDetails=" I craft scalable, secure back-end systems using Node.js and Express. From server architecture to database management with MongoDB, I ensure seamless data handling and reliable business logic across every route." />
    <ServiceCardComponent
    src="svg/api.svg"
    serviceName="API Design & Integration" serviceDetails=" Whether it’s RESTful endpoints or complex data flows, I design and integrate APIs that connect systems efficiently. I prioritize clarity, reusability, and maintainability—making sure front and back ends speak the same language.
    "/>
    <ServiceCardComponent 
    src="svg/tailwind.svg"
    serviceName="Tailwind CSS Development" serviceDetails=" I specialize in crafting sleek, responsive UIs with Tailwind CSS. By leveraging utility-first classes and custom configurations, I design scalable layouts that are consistent, maintainable, and lightning-fast—whether building from scratch or refining complex interfaces."/>
        </div>

    {/* </section> */}
        </div>
    )
}

export default ServicesPage
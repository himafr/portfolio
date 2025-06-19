import ServiceCardComponent from "../components/ServiceCardComponent"

function ServicesPage() {
    return (
        <div className=" flex flex-wrap gap-3 gap-x-12 items-center justify-around overflow-auto mt-[3vh] h-[80vh]">
           <ServiceCardComponent />
           <ServiceCardComponent />
           <ServiceCardComponent />
           <ServiceCardComponent />
        </div>
    )
}

export default ServicesPage

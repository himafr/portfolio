function FooterComponent() {
    return (
        <div className="fixed bottom-0 right-8 md:left-10 flex items-center">
           <div className="text-2xl font-bold inline mr-2"> &copy;</div>  Made By <i className="text-primary mr-2"> hema Sallem </i> {new Date().getFullYear()}
        </div>
    )
}

export default FooterComponent

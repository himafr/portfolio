import HeaderLink from "./HeaderLink"

function HeaderComponent() {
    return (
        <div className="flex justify-between items-center m-auto max-w-[1420px] md:mx-[235px] mx-0 mt-3">
        <img className="logo w-14 md:w-[120px]"  src="svg/logo_white_h.svg"  alt="" />
        <ul className="flex items-center">
          <HeaderLink icon="" name="home" to="/" />
          <HeaderLink icon="" name="services" to="/services" />
          <HeaderLink icon="" name="projects" to="/projects" />
          <HeaderLink icon="" name="contact" to="/contact" />
          <HeaderLink icon="" name="about" to="/about" />
        </ul>
           <div ><a href="https://github.com/himafr" target="_blank" ><img  className="w-4 md:w-6" src="/svg/github.svg" alt="GitHub" /> </a></div>
        </div>
    )
}

export default HeaderComponent

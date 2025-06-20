import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { Outlet } from "react-router-dom";
function LayoutPage() {
  return (
    <div>
       <div className="gradient-background">
        {/* <div className="gradient-sphere sphere-1"></div> */}
        <div className="gradient-sphere sphere-2"></div>
        {/* <div className="gradient-sphere sphere-3"></div> */}
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" id="particles-container"></div>
    </div>

    <div className="mx-[12px] md:mx-[30px] z-50 relative text-[10px] md:text-lg" >
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
    </div>
  );
}

export default LayoutPage;

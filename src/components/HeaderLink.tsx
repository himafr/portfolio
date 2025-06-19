import { NavLink } from "react-router-dom"
interface HeaderTypes{
    to:string,
    icon:string,
    name:string
}
function HeaderLink({to,icon,name}:HeaderTypes) {
    return (
        <li className="px-2 md:px-6">
        <img src={icon}/>
           <NavLink to={to} className="hover:border-b-2 hover:border-green-200 pb-2 ">  {name}</NavLink > 
        </li>
    )
}

export default HeaderLink

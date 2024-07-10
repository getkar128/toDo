import { NavLink } from "react-router-dom"
import { navMenu } from "../../constants"

const Navbar = () => {

    return (
        <nav className="">
            <div className="flex items-center gap-2">
                {navMenu.map((item, index) => (
                    <NavLink key={index} to={item.navigate} className={({ isActive }) => `${isActive && 'bg-dark-2'} text-sm px-3 py-1.5 rounded-md hover:bg-dark-2`}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
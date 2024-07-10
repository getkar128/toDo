import { Link } from "react-router-dom"
import Navbar from "./Navbar"


const Header = () => {

    return (
        <div className="sticky w-full top-0 z-10 bg-dark-1 py-3 border-b flex items-center px-4 gap-4">
            <div className="flex flex-1 items-center gap-4">
                <Link to={'/'} className="hidden lg:block text-2xl font-bold">
                    ToDo
                </Link>
                <Link to={'/'} className="lg:hidden block text-2xl font-bold">
                    TD
                </Link>
            </div>
            <Navbar />
        </div>
    )   
}

export default Header
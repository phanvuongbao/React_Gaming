import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io"

const Navbar = () => {
  return (
    <>
        <div className="bg-primary">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex gap-4 items-center text-white">
                        <img src={Logo} alt="Logo" className="w-16" />
                        <div>
                            <ul className="flex gap-6 items-center text-white">
                                <li>
                                    <a href="#" className="cursor-pointer">Release</a>
                                </li>
                                <li>
                                    <a href="#" className="cursor-pointer">Explore</a>
                                </li>
                                <li className="relative">
                                    <input type="search" name="search" 
                                    className="bg-gray-700/50 px-4 py-2 rounded-2xl" 
                                    placeholder="Search Game"/>
                                    <IoMdSearch className="absolute top-1/2
                                    -translate-y-1/2 right-3"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white">
                        <ul className="flex gap-4 items-center">
                            <li>
                                <a href="#"
                                className="bg-gray-700 inline-block px-4 py-2 rounded-2xl font-semibold">Login</a>
                            </li>
                            <li>
                                <a href="#" className="bg-gradient-to-r from-purple-700
                                to-blue-700 inline-block px-4 py-2 rounded-2xl font-semibold">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Navbar

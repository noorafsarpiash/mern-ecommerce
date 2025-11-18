import { logo } from "../assets/images/index.js"
import Container from "./Container.jsx"
import Searchinput from "./Searchinput.jsx"
import { MdOutlineMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { headerNavigatin } from "../constants/index.js";
import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="border-b-[1px] border-slate-300 sticky top-0 z-50 bg-white">
            <Container className="py-7 flex items-center justify-between gap-x-3 md:gap-x-7">
                <Link to={"/"}>
                    <img src={logo} alt="logo" className="w-20" />
                </Link>
                <Searchinput />
                <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">

                    {
                        headerNavigatin?.map((item) => (
                            <NavLink
                                key={item?.title}
                                to={item?.link}
                                className="hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden"
                            >

                                {item?.title}
                                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-primary -translate-x-[110%] group-hover:translate-x-0 hoverEffect" />
                            </NavLink>
                        ))
                    }

                    <Link to={"/cart"} className="text-2xl hover:text-primary hoverEffect relative group">
                        <IoMdCart />
                        <span className="absolute -right-2 -top-1 w-3.5 h-3.5 rounded-full text-[9px] bg-lightText group-hover:bg-primary text-white flex items-center justify-center hoverEffect">
                            0
                        </span>
                    </Link>
                    <Link to={"/signin"} className="text-xl hover:text-primary hoverEffect">
                        <FaUserAlt />

                    </Link>

                </div>

                <button className="text-2xl text-lightText hover:text-primary md:hidden hoverEffect">
                    <MdOutlineMenu />
                </button>


            </Container>
        </div>
    )
}

export default Header
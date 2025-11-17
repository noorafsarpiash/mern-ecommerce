import { logo } from "../assets/images/index.js"
import Container from "./Container.jsx"
import Searchinput from "./Searchinput.jsx"
import { MdOutlineMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { headerNavigatin } from "../constants/index.js";



const Header = () => {
    return (
        <div className="border-b-[1px] border-slate-300">
            <Container className="py-7 flex items-center justify-between gap-x-3 md:gap-x-7">
                <img src={logo} alt="logo" className="w-20" />
                <Searchinput />
                <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">

                    {
                        headerNavigatin?.map((item) => (
                            <p
                                key={item?.title}
                                className="hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden"
                            >

                                {item?.title}
                                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-primary -translate-x-[110%] group-hover:translate-x-0 hoverEffect" />
                            </p>
                        ))
                    }

                    <button className="text-2xl hover:text-primary hoverEffect relative group">
                        <IoMdCart />
                        <span className="absolute -right-2 -top-1 w-3.5 h-3.5 rounded-full text-[9px] bg-lightText group-hover:bg-primary text-white flex items-center justify-center hoverEffect">
                            0
                        </span>
                    </button>
                    <button className="text-xl hover:text-primary hoverEffect">
                        <FaUserAlt />

                    </button>

                </div>

                <button className="text-2xl text-lightText hover:text-primary md:hidden hoverEffect">
                    <MdOutlineMenu />
                </button>


            </Container>
        </div>
    )
}

export default Header
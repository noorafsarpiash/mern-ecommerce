import { logo } from "../assets/images/index.js"
import Container from "./Container.jsx"
import Searchinput from "./Searchinput.jsx"

const Header = () => {
    return (
        <div className="border-b-[1px] border-slate-300">
            <Container className="py-7 flex items-center justify-between gap-x-3 md:gap-x-7">
                <img src={logo} alt="logo" className="w-20" />
                <Searchinput />
                <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">
                    <p>navLinks</p>
                    <p>user</p>
                    <p>cart</p>
                </div>

            </Container>
        </div>
    )
}

export default Header
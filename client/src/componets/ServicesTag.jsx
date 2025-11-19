import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

import Container from "./Container";

export const services = [
    {
        title: "Free delivery",
        subtitle: "Free shipping on all order",
        icon: <TbTruckDelivery />,
    },
    {
        title: "Return",
        subtitle: "Contact us 24 hours a day",
        icon: <HiOutlineCurrencyDollar />,
    },
    {
        title: "Secure payment",
        subtitle: "100% secure payment",
        icon: <BiSupport />,
    },
    {
        title: "Payments",
        subtitle: "100% secure payment",
        icon: <MdOutlinePayment />,
    },
];



const ServicesTag = () => {
    return (
        <div className="bg-[#f4f4f4]">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center md:place-items-start  " >
                {
                    services?.map((item, index) => (
                        <div key={index} className="flex item-center gap-2">
                            <span className="text-5xl text-blue-600">  {item?.icon}</span>
                            <div>
                                <h3 className="text-base uppercase font-bold">{item?.title}</h3>
                                <p className="text-sm font-medium max-w-[160px] tracking-wide">{item?.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default ServicesTag
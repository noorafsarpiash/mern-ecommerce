import React from 'react'
import saleImgOne from "../assets/images/sale/contactUs.jpg"
import saleImgTwo from "../assets/images/sale/saleImgTwo.jpg"
import saleImgThree from "../assets/images/sale/saleImgThree.jpg"
import { Link } from 'react-router-dom'

const Sale = () => {
    return (
        <div className='w-full h-auto md:h-[550px] py-1 flex flex-col md:flex-row gap-10'>


            <div className="w-full md:w-1/2 h-[300px] md:h-full border border-gray-300 rounded-md overflow-hidden relative group">
                <img
                    src={saleImgOne}
                    alt="saleImgOne"
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out"
                />
                <div className='absolute w-full h-full top-0 left-0 bg-black/40 text-white/80 flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                        <p className='text-sm md:text-lg font-medium text-white'>10% sales ongoing on phone</p>
                        <p className='text-sm md:text-xl font-semibold'>Offers on limited time</p>
                        <Link className='bg-white/70 text-black px-8 py-3 rounded-md hover:bg-white duration-300 font-medium' to="/shop">Shop Now</Link>
                    </div>
                </div>
            </div>


            <div className="w-full md:w-1/2 h-[300px] flex flex-col justify-between  md:h-full bg-gray-200 gap-0">

                <div className='w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group'>
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out"

                        src={saleImgTwo} alt="" />
                    <div className='absolute w-full h-full top-0 left-0 bg-black/40 text-white/80 flex items-center justify-center'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-sm md:text-lg font-medium text-white'>10% sales ongoing on phone</p>
                            <p className='text-sm md:text-xl font-semibold'>Offers on limited time</p>
                            <Link className='bg-white/70 text-black px-8 py-3 rounded-md hover:bg-white duration-300 font-medium' to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={saleImgThree} alt="saleImgThree" />

                </div>

            </div>
        </div>
    )
}

export default Sale

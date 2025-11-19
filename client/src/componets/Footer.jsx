import React from 'react'
import Container from './Container'
import Title from './Title'
import SocialLink from './SocialLink'
import { Link } from 'react-router-dom'

const shopArray = [
    { title: "Accessories", link: "/shop" },
    { title: "Camera", link: "/shop" },
    { title: "Laptop", link: "/shop" },
    { title: "Smartphone", link: "/shop" },
    { title: "Watch", link: "/shop" },
];

const accountArray = [
    { title: "Profile", link: "/profile" },
    { title: "Orders", link: "/orders" },
    { title: "Address", link: "/addresses" },
    { title: "Account Details", link: "/profile" },
    { title: "Privacy", link: "/profile" },
]


const Footer = () => {
    return (
        <div className='w-full bg-[#1b1b1b] py-20 text-white'>
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                <div className='col-span-2'>
                    <div className='flex flex-col gap-6'>
                        <Title className="text-xl">More about Orebi Shop</Title>
                        <p className='text-base w-full lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ab qui facilis natus dolores quo.</p>
                        <SocialLink />
                    </div>

                </div>

                <div>
                    <Title className="text-xl mb-6">
                        Shop
                    </Title>
                    <div className='flex flex-col gap-2'>
                        {
                            shopArray?.map((item) => (
                                <Link
                                    key={item?.title}
                                    to={item?.link}
                                    className='text-base text-lightText hover:text-white hover:underline decoration-1[px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300'>
                                    {item?.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <Title className="text-xl mb-6">
                        Your Account
                    </Title>
                    <div className='flex flex-col gap-2'>
                        {
                            accountArray?.map((item) => (
                                <Link
                                    key={item?.title}
                                    to={item?.link}
                                    className='text-base text-lightText hover:text-white hover:underline decoration-1[px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300'>
                                    {item?.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
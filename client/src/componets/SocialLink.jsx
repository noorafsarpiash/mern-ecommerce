import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
const linkData = [
    {
        icon: <FaGithub />, href: "#"
    },
    {
        icon: <FaLinkedin />, href: "#"
    },
    {
        icon: <FaTwitter />, href: "#"
    },
    {
        icon: <FaInstagram />, href: "#"
    },
    {
        icon: <FaFacebook />, href: "#"
    }
]

const SocialLink = () => {
    return (
        <div className='text-xl text-white/50 flex items-center gap-x-2'>
            {linkData?.map((item, index) => (
                <a
                    className='border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer'
                    href={item?.href}
                    target='blank'
                    key={index}>{item?.icon}</a>
            ))}
        </div>
    )
}

export default SocialLink
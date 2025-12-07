import React, { useState } from 'react'
import Title from '../components/Title'
import { IoMdCloudUpload, IoMdAdd } from "react-icons/io";
const Add = () => {
    const [FormData, setFormData] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        discount: "",
        _type: "",
        category: "",
        offer: false,
        available: true,
        badge: false,
        tags: [],
        image1: null,
        image2: null

    });
    return (
        <form>
            <Title>
                Upload products to Database
            </Title>
            <div className='flex'>
                <div className='text-gray-500 border-2 border-dashed border-gray-500 px-4 py-2 hover:border-black duration-300 ease-out cursor-pointer rounded-md'>
                    <IoMdCloudUpload className='text-5xl' />
                    <input type="file" hidden />
                </div>
            </div>
        </form>
    )
}

export default Add
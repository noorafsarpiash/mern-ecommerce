import React, { useState } from 'react'
import Title from '../components/Title'
import Input, { Label } from '../components/ui/input'
import { IoIosArrowDown, IoMdArrowDown, IoMdCloudUpload } from "react-icons/io";

const Add = () => {

    const [formData, setFormData] = useState({
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

    const handleImageChange = (e) => {
        const { id, files } = e.target;
        setFormData({
            ...formData,
            [id]: files[0]
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    return (
        <form className="flex flex-col gap-4 w-full max-w-[900px] pb-60">
            <Title>Upload products to Database</Title>

            {/* Image Uploads */}
            <div className="flex flex-wrap items-center gap-5">
                {["image1", "image2"].map((imageId) => (
                    <label key={imageId}>
                        <div className="text-gray-500 border-2 border-dashed border-gray-500 px-6 py-4 hover:border-black duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center">
                            {formData[imageId] ? (
                                <img
                                    src={URL.createObjectURL(formData[imageId])}
                                    alt="preview"
                                    className="w-24 h-24 object-cover rounded-md mb-2"
                                />
                            ) : (
                                <IoMdCloudUpload className="text-5xl" />
                            )}

                            <input
                                type="file"
                                id={imageId}
                                onChange={handleImageChange}
                                hidden
                            />
                            <p>{formData[imageId] ? "Change" : "Upload"}</p>
                        </div>
                    </label>
                ))}
            </div>

            {/* Product Name */}
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="name">Product brand</Label>
                <Input
                    type="text"
                    placeholder="Type product name here..."
                    name="brand"
                    onChange={handleChange}
                    className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none"
                />
            </div>

            {/* Description */}
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="description">Product description</Label>
                <textarea
                    placeholder="Type product description..."
                    name="description"
                    rows={4}
                    onChange={handleChange}
                    className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none resize-none"
                />
            </div>
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="brand">Product brand</Label>
                <Input
                    type="text"
                    placeholder="Type product brand here..."
                    name="brand"
                    onChange={handleChange}
                    className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none"
                />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                <div className="flex flex-col w-full gap-1">
                    <Label htmlFor="price">Product price</Label>
                    <Input
                        type="number"
                        placeholder="Enter price"
                        name="price"
                        onChange={handleChange}
                        className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none"
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <Label htmlFor="discount">Product discount percentage</Label>
                    <Input
                        type="number"
                        placeholder="discount percentage % "
                        name="discount"
                        onChange={handleChange}
                        className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none"
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                <div className="flex flex-col w-full gap-1 ">
                    <Label htmlFor="_type">Product type</Label>
                    <select name="_type" onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-[150px]'>

                        <option value="">Select type</option>
                        <option value="new_arrivals">Newe Arrivals</option>
                        <option value="best_sellers">Best Sellers</option>
                        <option value="special_offers">Most Popular</option>
                        <option value="promotions">Promotions</option>

                    </select>
                    {/* <IoIosArrowDown className='text-3xl absolute top-0 right-0' /> */}
                </div>
                <div className="flex flex-col w-full gap-1 ">
                    <Label htmlFor="category">Product category</Label>
                    <select name="category" onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-[150px]'>

                        <option value="">Select type</option>
                        <option value="new_arrivals">Men</option>
                        <option value="best_sellers">Women</option>
                        <option value="special_offers">Kids</option>
                        <option value="promotions">Accessories</option>
                        <option value="Others">Others</option>

                    </select>
                    {/* <IoIosArrowDown className='text-3xl absolute top-0 right-0' /> */}
                </div>
                <div className="flex flex-col w-full gap-1 ">
                    <Label htmlFor="offer">Product type</Label>
                    <select name="offer" onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-[150px]'>

                        <option value="false">False</option>
                        <option value="true">True</option>

                    </select>
                    {/* <IoIosArrowDown className='text-3xl absolute top-0 right-0' /> */}
                </div>
            </div>
        </form>
    );
};

export default Add;

import React, { useState } from "react";
import Title from "../components/Title";
import Input, { Label } from "../components/ui/input";
import SmallLoader from "../components/SmallLoader";
import toast from "react-hot-toast";
import { IoMdAdd, IoMdCloudUpload } from "react-icons/io";
import axios from "axios";
import { serverUrl } from '../../config.js';
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";


const Add = ({ token }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        discountedPercentage: "",
        _type: "",
        category: "",
        offer: false,
        isAvailable: true,
        badge: false,
        tags: [],
        image1: null,
        image2: null,
    });

    const handleImageChange = (e) => {
        const { id, files } = e.target;
        setFormData({
            ...formData,
            [id]: files[0],
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleUploadProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            setLoading(true);
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value instanceof File) {
                    data.append(key, value);
                } else {
                    data.append(key, value);
                }
            })

            const response = await axios.post(serverUrl + "/api/product/add",
                data, {
                headers: {
                    token,
                    "Content-Type": "multipart/form-data"
                }
            })

            const responseData = await response?.data;

            if (responseData?.success) {
                toast.success(responseData?.message);
                navigate("/list");

            } else {
                toast.error(responseData?.message);
            }





        } catch (error) {
            console.log("Product data uploading error", error);
            toast.error(error?.message);

        }
        finally {
            setLoading(false);
        }
        // upload product to database
    };

    return (
        <form
            onSubmit={handleUploadProduct}
            className="flex flex-col gap-4 w-full max-w-[900px] pb-60"
        >
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
                                disabled={loading}

                                hidden
                            />
                            <p>{formData[imageId] ? "Change" : "Upload"}</p>
                        </div>
                    </label>
                ))}
            </div>

            {/* Product Brand */}
            <div className="flex flex-col w-full gap-1">
                <Label htmlFor="brand">Product brand</Label>
                <Input
                    type="text"
                    placeholder="Type product name here..."
                    name="name"
                    disabled={loading}
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

            {/* Price & Discount */}
            <div className="flex flex-col md:flex-row items-center gap-2">
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
                    <Label htmlFor="discountedPercentage">Discount (%)</Label>
                    <Input
                        type="number"
                        placeholder="discount percentage %"
                        name="discountedPercentage"
                        onChange={handleChange}
                        className="w-full border border-gray-500 rounded-md px-4 py-2 outline-none"
                    />
                </div>
            </div>

            {/* Select Fields */}
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex flex-col w-full gap-1 ">
                    <Label>Product type</Label>
                    <select
                        name="_type"
                        onChange={handleChange}
                        className="border px-4 py-2 border-gray-500 rounded-md max-w-[150px]"
                    >
                        <option value="">Select type</option>
                        <option value="new_arrivals">New Arrivals</option>
                        <option value="best_sellers">Best Sellers</option>
                        <option value="special_offers">Most Popular</option>
                        <option value="promotions">Promotions</option>
                    </select>
                </div>

                <div className="flex flex-col w-full gap-1 ">
                    <Label>Category</Label>
                    <select
                        name="category"
                        onChange={handleChange}
                        className="border px-4 py-2 border-gray-500 rounded-md max-w-[150px]"
                    >
                        <option value="">Select type</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="flex flex-col w-full gap-1 ">
                    <Label>Offer</Label>
                    <select
                        name="offer"
                        onChange={handleChange}
                        className="border px-4 py-2 border-gray-500 rounded-md max-w-[150px]"
                    >
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>

                <div className="flex flex-col w-full gap-1 ">
                    <Label>Available</Label>
                    <select
                        name="isAvailable"
                        onChange={handleChange}
                        className="border px-4 py-2 border-gray-500 rounded-md max-w-[150px]"
                    >
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <div className="flex flex-col w-full gap-1 ">
                    <Label>Badge</Label>
                    <select
                        name="badge"
                        onChange={handleChange}
                        className="border px-4 py-2 border-gray-500 rounded-md max-w-[150px]"
                    >
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-1 items-start">
                <Label>Tags</Label>
                <div>
                    {["Fashion", "Electronics", "Sports", "Accessories", "Others"].map(
                        (tag) => (
                            <div key={tag} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={tag.toLowerCase()}
                                    name="tags"
                                    value={tag}
                                    className="cursor-pointer"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                tags: [...prevData.tags, tag],
                                            }));
                                        } else {
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                tags: prevData.tags.filter((item) => item !== tag),
                                            }));
                                        }
                                    }}
                                />
                                <p>{tag}</p>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <button
                disabled={loading}
                type="submit"
                className="bg-black/80 font-semibold flex items-center py-2 justify-center tracking-wide hover:bg-black duration-300 ease-in-out rounded-md disabled:bg-gray-400 gap-2 disabled:cursor-not-allowed text-white uppercase w-32"
            >
                Add {loading ? <FaSpinner className="animate-spin" />
                    : <IoMdAdd className="text-2xl" />}
            </button>
        </form>
    );
};

export default Add;

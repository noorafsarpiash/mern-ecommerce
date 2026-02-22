import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { serverUrl } from '../../config'
import { toast } from 'react-hot-toast'
import Title from '../components/Title'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import PriceFomat from '../components/PriceFomat'
import { IoMdClose } from 'react-icons/io'

const List = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProductList = async () => {
        try {
            setLoading(true)
            const response = await axios.get(serverUrl + "/api/product/list")
            const data = response?.data;
            if (data?.success) {
                setList(data?.products)
            } else {
                toast.error(data?.message)
            }

        } catch (error) {
            console.log("Product list fetching Error", error);
            toast.error(error?.message)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductList();
    }, [])

    return (
        <div>
            {
                loading ? (<Loader />) : (
                    <> <div className='flex items-center justify-between'>
                        <Title>Product List</Title>
                        <Link to={"/add"} className='text-sm font-medium hover:text-blue-600 duration cursor-pointer'>Add Product +</Link>
                    </div>
                        {
                            list?.length > 0 ? (
                                <div className='flex flex-col gap-2 mt-2'>
                                    <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5'>
                                        <b>Image</b>
                                        <b>Name</b>
                                        <b className='hidden md:inline-block'>Category</b>
                                        <b>Price</b>
                                        <b className='text-center'>Action</b>
                                        <b className='text-center'>Edit</b>
                                    </div>
                                    {list?.map((item) => (<div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ' key={item?._id


                                    }>
                                        <img src={item?.images[0]} alt={item?.name} className='w-16 h-20 bg-white rounded-sm object-cover' />

                                        <p className='font-semibold line-clamp-1'>{item?.name}  </p>
                                        <p className='hidden md:inline-block font font-medium'>{item?.category}</p>

                                        <PriceFomat className="text-green-600" amount={item?.price} />
                                        <div className='flex items-center justify-center gap-2'>
                                            <IoMdClose className='text-lg cursor-pointer hover:text-red-600 duration-300 ease-in-out' />
                                        </div>
                                        <div className='flex items-center justify-center gap-2'>
                                            <Link to={"/add"} className='hover:text-green-600 duration-300 ease-in-out '>Edit</Link>
                                        </div>
                                    </div>))}
                                </div>

                            ) : (
                                <div className='mt-2'>
                                    <p className='mb-4 text-red-600 font-medium tracking-wide'>You have no products in your Database</p>
                                    <Link to={"/add"} className='bg-black/80 text-white py-2 px-4 rounded-md hover:bg-black duration-300 ease-in-out' >Add products</Link>

                                </div>
                            )
                        }



                    </>
                )
            }

        </div>
    )
}

export default List
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { serverUrl } from '../../config'
import { toast } from 'react-hot-toast'
import Title from '../components/Title'
import Loader from './Loader'
import { Link } from 'react-router-dom'

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
                                <div>Products available</div>

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
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { serverUrl } from '../../config'
import axios from 'axios'
import Loader from './Loader'
import Title from '../components/Title'
import { IoMdAdd, IoMdClose } from 'react-icons/io'
const Users = ({ token }) => {
    const [usersList, setUsersList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)


    const getUserList = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(serverUrl + "/api/user/users", {
                headers: {
                    token,
                    "Content-Type": "application/json"
                }
            })
            const data = response?.data;
            if (data?.success) {
                setUsersList(data?.users)
            } else {
                toast.error(data?.message)
            }
        } catch (error) {
            console.log("Users list fetching error", error?.message)
            toast.error(error?.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUserList()
    }, [])

    return (
        <div>
            {
                isLoading ?
                    (<Loader />) : (
                        <div>
                            <div>
                                <Title> Users</Title>
                                <button className='flex items-center gap-1 bg-black/80 text-white px-6 text-sm font-medium py-2 rounded-md hover:bg-black duration-300 transition-colors'>Add user </button>

                            </div>

                            {
                                usersList?.length > 0 ?
                                    (<div className='max-w-3xl flex flex-col gap-2 mt-2'>
                                        <div className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5' >
                                            <b className='hidden md:inline-block'>Name</b>
                                            <b>Email</b>
                                            <b className='text-center'>Action</b>
                                            <b className='text-center'>Edit</b>
                                        </div>

                                        {
                                            usersList?.map((item) => (
                                                <div className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5'
                                                    key={item?._id}
                                                >
                                                    <p className='hidden md:inline-block font-semibold' >{item?.name}</p>
                                                    <p className='font-medium' >{item?.email}</p>
                                                    <IoMdClose className='text-l  w-full cursor-pointer hover:text-red-600 duration-300 ease-in-out' />
                                                    <button className='text-base cursor-pointer hover:text-green-600 duration-300 ease-out'>Edit</button>

                                                </div>
                                            ))
                                        }

                                    </div>)

                                    : (<div
                                        className='mt-2'
                                    >
                                        <p className='mb-4'>You have no user in your Database</p>


                                        {/* <button className=' bg-black/80 text-white px-6 text-sm font-medium py-2 rounded-md hover:bg-black duration-300 transition-colors'>Add user </button> */}


                                    </div>)
                            }

                        </div>
                    )}

        </div>
    )
}

export default Users
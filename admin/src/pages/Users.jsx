import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { serverUrl } from '../../config'
import axios from 'axios'
import Loader from './Loader'
import { IoMdTrash } from "react-icons/io";

import Title from '../components/Title'
import { IoMdAdd, IoMdClose } from 'react-icons/io'
import NewUserForm from '../components/NewUserForm'
const Users = ({ token }) => {
    const [usersList, setUsersList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [loadingUserId, setLoadingUserId] = useState(null);
    let [isOpen, setIsOpen] = useState(false)

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


    const handleRemoveUser = async (userId) => {
        const confirmRemoval = window.confirm("Are you sure you want to remove this user?");
        if (!confirmRemoval) return;

        setLoadingUserId(userId);

        try {
            const response = await axios.delete(`${serverUrl}/api/user/remove/${userId}`, {
                headers: {
                    token
                }
            });

            const data = response.data;

            if (data.success) {
                toast.success(data.message);
                getUserList(); // Refresh list
            } else {
                toast.error(data.message || "Failed to remove user");
            }
        } catch (error) {
            console.log("User removal error", error);
            toast.error(error?.message || "Something went wrong");
        } finally {
            setLoadingUserId(null);
        }
    };

    const openLoginForm = () => {
        setIsOpen(true);
    }

    const closeLoginForm = () => {
        setIsOpen(false);
    }

    return (
        <div>
            {
                isLoading ?
                    (<Loader />) : (
                        <div>
                            {/* Title and Add User Button */}
                            <div className='flex items-center justify-between max-w-3xl'>
                                <Title> Users</Title>
                                <button onClick={openLoginForm} className='flex items-center gap-1 bg-black/80 text-white px-6 text-sm font-medium py-2 rounded-md hover:bg-black duration-300 transition-colors'>Add user </button>
                            </div>

                            {/* Users List Table Structure */}
                            {
                                usersList?.length > 0 ?
                                    (<div className='max-w-3xl flex flex-col gap-1 mt-4'>

                                        {/* TABLE HEADER (Corrected Grid & Alignment) */}
                                        <div className='grid grid-cols-[1.5fr_2.5fr_1fr_0.5fr_0.5fr] items-center py-2 px-3 border-b border-t bg-gray-50 text-sm font-bold' >
                                            <b className='hidden md:inline-flex'>Name</b>
                                            <b className=''>Email</b>
                                            <b className='hidden md:inline-flex text-center'>Admin</b>
                                            <b className='text-center'>Action</b>
                                            <b className='text-center'>Edit</b>
                                        </div>

                                        {/* TABLE ROWS (Corrected Grid & Alignment) */}
                                        {
                                            usersList?.map((item) => (
                                                <div className='grid grid-cols-[1.5fr_2.5fr_1fr_0.5fr_0.5fr] items-center py-1 px-3 border-b text-sm gap-2'
                                                    key={item?._id}
                                                >
                                                    {/* Name (Left Aligned) */}
                                                    <p className='font-semibold text-left  hidden md:inline-flex' >{item?.name}</p>

                                                    {/* Email (Left Aligned) */}
                                                    <p className='font-normal text-left' >{item?.email}</p>

                                                    {/* Admin (Left Aligned, like in the first screenshot) */}
                                                    <p className={item?.isAdmin ?
                                                        "font-semibold text-left hidden md:inline-flex" : "font-normal text-left hidden md:inline-flex"}>{item?.isAdmin ? "Admin" : "User"}</p>

                                                    {/* Action (Center Aligned for Icon) */}
                                                    <div className='w-full flex justify-center'>
                                                        {/* Note: I changed the trash icon color class based on the screenshot */}
                                                        <IoMdTrash
                                                            onClick={() => handleRemoveUser(item?._id)}
                                                            className='text-black/60 text-2xl cursor-pointer hover:text-red-600 duration-300 ease-out'
                                                        />


                                                    </div>

                                                    {/* Edit (Center Aligned for Button) */}
                                                    <button
                                                        onClick={() => {
                                                            setSelectedUser(item);
                                                            setIsOpen(true);
                                                        }}
                                                        className="text-base cursor-pointer hover:text-green-600 duration-300 ease-out text-center"
                                                    >
                                                        Edit
                                                    </button>

                                                </div>
                                            ))
                                        }

                                    </div>)

                                    : (<div
                                        className='mt-2'
                                    >
                                        <p className='mb-4'>You have no user in your Database</p>
                                    </div>)
                            }

                        </div>
                    )}

            <NewUserForm isOpen={isOpen} setIsOpen={setIsOpen} close={closeLoginForm} getUserList={getUserList} setSelectedUser={setSelectedUser} />

        </div>
    )
}

export default Users
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Input, { Label } from './ui/input';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import serverUrl from '../utils/serverUrl';
const NewUserForm = ({ isOpen, setIsOpen, close, getUserList, setSelectedUser, selectedUser }) => {

    // function open() {
    //     setIsOpen(true);
    // }
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',

    })


    useEffect(() => {
        if (selectedUser) {
            setFormData({
                name: selectedUser?.name || '',
                email: selectedUser?.email || '',
                password: selectedUser?.password || '',
            })

        } else {
            setFormData({
                name: '',
                email: '',
                password: '',
            })


        }
    }, [selectedUser])


    const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            [name]: value

        }))

    }


    const handleAddOrUpdateUser = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (selectedUser) {
                response = await axios.put(`${serverUrl}/api/user/update/${selectedUser._id}`, formData, {

                })
            } else {
                response = await axios.post(`${serverUrl}/api/user/register`, formData,)

            }

        } catch (error) {
            console.log("User save error", error)
            toast.error(error?.response?.data?.message || "An error occured")
        }
    }




    return (
        <>
            {/* <Button
                onClick={open}
                className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white"
            >
                Open dialog
            </Button> */}

            {
                isOpen &&
                <div className="fixed w-full min-h-screen bg-black/70 top-0 left-0">
                    <Dialog
                        open={isOpen}
                        className="relative z-10 focus:outline-none"
                        onClose={() => setIsOpen(false)}>

                        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                            <div className='flex min-h-full items-center justify-center p-4 '>
                                <DialogPanel className="w-full max-w-xl rounded-lg px-10 py-5 bg-white shadow-md shadow-orange-200 border border-gray-300 text-black">

                                    <div className='flex items-center justify-between'>
                                        <DialogTitle className="text-lg text-center items-center font-medium text-gray-900">
                                            {
                                                selectedUser ? "Edit User" : "Add New User"
                                            }
                                        </DialogTitle>
                                        <IoMdClose onClick={() => setIsOpen(false)} className='text-lg hover:text-red-600 duration-300 cursor-pointer' />
                                    </div>

                                    <div className='mt-3'>
                                        <form onSubmit={handleAddOrUpdateUser} className='flex flex-col gap-5'>
                                            <div className='flex flex-col gap-2'>
                                                <Label>Enter name</Label>
                                                <Input id="name" type="text" name="name" placeholder="Enter name"
                                                    value={formData.name}
                                                    onChange={handleChange} />

                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label>Enter email</Label>
                                                <Input id="email" type="email" name="email" placeholder="Enter email"
                                                    value={formData.email}
                                                    onChange={handleChange} />

                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label>Enter password</Label>
                                                <div className='relative'>
                                                    <Input
                                                        id="password"
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        placeholder="Enter password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                    <span
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500'
                                                    >
                                                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                                    </span>
                                                </div>
                                            </div>
                                            <button type="submit" className='bg-black/80 text-white py-2 px-6  hover:bg-black divide-neutral-600 rounded-full'>Submit</button>
                                        </form>

                                    </div>


                                </DialogPanel>
                            </div>
                        </div>

                    </Dialog>
                </div>
            }
        </>
    );
};

export default NewUserForm;



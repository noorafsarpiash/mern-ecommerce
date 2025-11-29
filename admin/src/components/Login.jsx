import React from 'react'
import { logo } from '../assets/images'
import Title from './Title'

const Login = ({ setToken }) => {
    return (
        <div className='flex flex-col gap-2 bg-gray-300 min-h-screen items-center justify-center'>

            <div className='bg-white p-2 rounded-md'>
                <img src={logo} alt="logo" />
            </div>
            <div className='bg-white p-5 min-w-96 shadow-xl rounded-lg'>

                <Title className={"text-xl font-bold"}>Admin Panel</Title>
                <form className='flex flex-col gap-4 mt-4'>
                    <div>
                        <p className='text-sm font-semibold'>Email Address</p>
                        <input type="email" placeholder='Enter your email' className='border border-gray-400 w-full py-1 px-4 mt-1 rounded-md' required />
                    </div>
                    <div>
                        <p className='text-sm font-semibold'>Password</p>
                        <input type="password" placeholder='Enter your password' className='border border-gray-400 w-full py-1 px-4 mt-1 rounded-md' required />
                    </div>
                    <button className='bg-black/80 text-white py-2 rounded-md hover:bg-black duration-300 transition-colors'>Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login
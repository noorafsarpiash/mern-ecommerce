import React from 'react'
import { FaList } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";


import { IoMdAdd } from "react-icons/io";

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col gap-4 mt-2 pl-6'>
        <NavLink className="flex items-center justify-center md:justify-normal gap-3 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300" to={"/add"}>
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
            <IoMdAdd />
          </span>
          <p className='hidden md:inline-flex font-semibold'>Add Items</p>
        </NavLink>
        <NavLink className="flex items-center justify-center md:justify-normal gap-3 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300" to={"/list"}>
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
            <FaList />
          </span>
          <p className='hidden md:inline-flex font-semibold'>Product Lists</p>
        </NavLink>
        <NavLink className="flex items-center justify-center md:justify-normal gap-3 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300" to={"/orders"}>
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
            <AiFillProduct />
          </span>
          <p className='hidden md:inline-flex font-semibold'>Orders</p>
        </NavLink>
        <NavLink className="flex items-center justify-center md:justify-normal gap-3 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300" to={"/users"}>
          <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
            <HiUsers />
          </span>
          <p className='hidden md:inline-flex font-semibold'>Users List</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
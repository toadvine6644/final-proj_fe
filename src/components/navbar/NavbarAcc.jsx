/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from '/avatar.png';
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";

const NavAccMenu = ({ visible, isMobile }) => {
    const { getUserEmail, logout,user } = useUserStore();
    if (!visible) {
        return null;
    }

    return (
        <div className={`flex flex-col items-center w-[160px] py-2 bg-gray-300 bg-opacity-30 border-[0.5px] border-white border-opacity-20 rounded ${isMobile ? 'absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md p-4' : 'absolute right-0 top-14'}`}>
            <div className='flex flex-col w-full'>
                <div className={`flex flex-row items-center w-full gap-3 px-3 group/item ${isMobile ? 'hidden' : ''}`}>
                    <img src={Avatar} className='w-6 rounded-md' />
                    <p className='text-sm text-white group-hover/item:underline truncate'> <span className='text-white '>
                        {user?.name || "User Profile"}
                      </span></p>
                </div>
                <hr className={`h-px my-3 bg-gray-600 border-0 ${isMobile ? 'hidden' : ''}`} />
                <div className='flex flex-col items-center w-full gap-3 px-3 group/item py-3'>
                    <button
                        className='bg-gray-800 hover:bg-black text-white py-2 px-4 w-[90%] rounded-md flex items-center transition duration-300 ease-in-out '
                        onClick={logout}
                    >
                        <LogOut size={18} />
                        <span className={` ${isMobile ? 'sm:inline' : ''} ml-2`}>Log Out</span>
                    </button>
                    <Link to="/UserProfilePage" className='w-[90%]'>
                        <button
                            className='bg-gray-800 hover:bg-black text-white w-[100%] py-2 px-4 
                            rounded-md flex items-center transition duration-300 ease-in-out'
                        >
                            <User size={18} />
                            <span className={` ${isMobile ? 'sm:inline' : ''} ml-2`}>Profile</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavAccMenu;

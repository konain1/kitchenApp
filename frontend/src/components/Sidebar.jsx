import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSettings, MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


function Sidebar() {
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [members,setMembers] = useState([])
    const toggleDropdown = (index) => {
        if (dropdownIndex === index) {
            setDropdownIndex(null); // Close the dropdown if it's already open
        } else {
            setDropdownIndex(index); // Open the dropdown if it's closed
        }
    };

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {setMembers(data.users)}  )
            .catch((error) => console.error("Error fetching users:", error));
    }, [members]);


    return (
        <nav className='bg-gray-900 flex items-start p-4 rounded-lg md:w-[20%]'>
            <ul className='flex flex-col space-y-4 w-full'>
                <li>
                    <div className='text-white hover:text-green-500 flex items-center' onClick={() => toggleDropdown(1)}>
                        <span className='hidden md:inline px-2'>History</span>
                        <MdOutlineSettings className='inline' />
                    </div>
                    {dropdownIndex === 1 && (
                        <div className='dropdown-menu'>
                            {/* Dropdown options */}
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <div className='text-white hover:text-green-500 flex items-center' onClick={() => toggleDropdown(2)}>
                        <span className='hidden md:inline px-2'>Members</span>
                        <FaUsers className='inline' />
                    </div>
                    {dropdownIndex === 2 && (
                        <div className='dropdown-menu'>
                            {/* Dropdown options */}
                            <ul>
                               {members.map((member,index)=>{
                                return(
                                    <li key={index}>{member.username}</li>
                                )
                               })}
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <div className='text-white hover:text-green-500 flex items-center' onClick={() => toggleDropdown(3)}>
                        <span className='hidden md:inline px-2'>Groceries</span>
                        <MdOutlineLocalGroceryStore className='inline' />
                    </div>
                    {dropdownIndex === 3 && (
                        <div className='dropdown-menu'>
                            {/* Dropdown options */}
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <div className='text-white hover:text-green-500 flex items-center absolute bottom-0' onClick={() => toggleDropdown(4)}>
                        <span className='hidden md:inline px-'>Settings</span>
                        <MdOutlineSettings className='' />
                    </div>
                   
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

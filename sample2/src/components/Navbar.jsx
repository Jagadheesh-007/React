import {User2} from 'lucide-react'
import React from 'react'
import 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='w-full flex h-[4rem] text-lg text-white bg-blue-600 font-serif shadow-md shadow-black'>
                    <div className='w-[50%] flex items-center ml-12 justify-start'>Jagadheesh B</div>
                <div className='w-[50%] flex flex-row items-center pr-10 justify-end gap-10 list-none'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <User2 />
                </div>
            </div>
        </>
    )
}

export default Navbar
import { User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='w-full flex h-[4rem] text-lg text-white bg-lime-500 font-serif shadow-md shadow-black'>
                <div className='w-[50%] flex flex-row h-full items-center ml-10 justify-start text-xl'><div className="w-30 h-30 p-3 rounded-sm shadow shadow-black bg-lime-500">Jagadheesh B</div></div>

                    <ul className='w-[50%] flex flex-row items-center pr-10 justify-end gap-10 list-none'>
                    <li><Link to={'/'} className='hover:bg-lime-400 shadow-black p-3 rounded-md hover:border-b-4 focus:'>Home</Link></li>
                    <li><Link to={'/projects'} className='hover:bg-lime-400 p-3 rounded-md hover:border-b-4'>Projects</Link></li>
                    <li><Link to={'/contact'} className='hover:bg-lime-400 p-3 rounded-md hover:border-b-4'>Contact</Link></li>
                    <li><Link to={'/contact'} ><User2 className='hover:bg-lime-400 rounded-full hover:border-b-4'/></Link></li>
                    </ul>
            </div>
        </>
    )
}

export default Navbar
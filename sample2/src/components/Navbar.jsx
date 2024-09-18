import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-full flex h-[4rem] text-white bg-green-500 border rounded-2xl font-serif shadow-lg'>
                    <div className='w-[50%] flex items-center ml-12 justify-start'>Jagadheesh B</div>
                <div className='w-[50%] flex flex-row items-center pr-10 justify-end gap-10 list-none'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </div>
            </div>
        </>
    )
}

export default Navbar
import Nav from '../components/Navbar'
import React from 'react'
import Img from '../assets/img/prof1.jpg'
const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row h-screen w-full">
        <div className="flex items-center justify-end h-full w-1/2">
      <div className="w-[70%] p-4 rounded-md shadow  bg-slate-50 font-serif text-2">Hello! I'm a B.Tech student passionate about full-stack development and technology. I'm currently working on various projects that involve web development, system design, and backend development. I have experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js), as well as languages like C, Java, HTML, CSS, and JavaScript.
      </div></div>
        <div className="flex items-center justify-start w-1/2">
        <div className="">
        <img src={Img} className='ml-10 rounded-full h-[30%] w-[30%]'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
import Nav from '../components/Navbar'
import React from 'react'
import Img from '../assets/img/prof1.jpg'
const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col h-[91vh] w-screen">
        <div className="flex justify-between items-center h-[90vh] w-full">
          <div className="flex items-center justify-end w-1/2 ">
            <h2 className="w-[70%] font-serif text-xl m-10 bg-slate-50 rounded-md p-7 text-justify shadow-md shadow-slate-500">Hello! I'm Jagadheesh.B B.Tech student passionate about full-stack development and technology. I'm currently working on various projects that involve web development, system design, and backend development. I have experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js), as well as languages like C, Java, HTML, CSS, and JavaScript.</h2>
          </div>
          <div className="flex items-center justify-around w-1/2">
            <img src={Img} className='ml-10 h-[30%] w-[30%] rounded' />
          </div>
        </div>
        <div className="bg-black mt-24 h-[4rem] flex justify-center items-center sticky ">
          <ul className='flex flex-row gap-3 text-purple-600 font-serif'>
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Unstop</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
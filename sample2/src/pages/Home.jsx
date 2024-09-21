import Nav from '../components/Navbar'
import React from 'react'
import Img from '../assets/img/prof1.jpg'
const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex h-[91vh] w-screen">
        <div className="flex h-[90vh] w-full">
          
          <div className="flex flex-col items-center justify-center w-1/2 gap-10">
          <div className="w-[70%] bg-lime-500 p-4 rounded-md text-white font-serif text-xl shadow-md shadow-green-900"><h1>About Me!</h1></div>
            <h2 className="w-[70%] font-serif text-xl bg-slate-50 rounded-md p-7 text-justify shadow-md shadow-slate-500">Hello! I'm Jagadheesh.B B.Tech student passionate about full-stack development and technology. I'm currently working on various projects that involve web development, system design, and backend development. I have experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js), as well as languages like C, Java, HTML, CSS, and JavaScript.</h2>        
            <ul className='flex flex-row gap-3 text-purple-600 font-serif'>
            <li><a href='https://github.com/Jagadheesh-007' target='_blank'>GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/jagadheesh-b-195381277/' target='_blank'>Linkedin</a></li>
            <li><a href='https://github.com/Jagadheesh-007' target='_blank'>Unstop</a></li>
          </ul>
          </div>
          <div className="flex items-center justify-around w-1/2">
            <img src={Img} className='h-[40%] w-[35%] rounded-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
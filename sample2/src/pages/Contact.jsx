import React from 'react'
import { useEffect, useState} from 'react'
import Nav from '../components/Navbar'
import { CircleX } from 'lucide-react'
const Contact = () => {
  const [visible,setvisible] = useState(false)
  return (
    <>
    <Nav/>
    
     {
        visible && (<>
        <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
          <div className="h-100 w-[30%] pb-10 flex flex-col justify-center items-center bg-white rounded-md shadow-md">
          <div className="w-full flex justify-end align-top"><button onClick={()=>setvisible(!visible)}><CircleX className='bg-red-600 rounded-full text-white'/></button></div>
          <form onSubmit={()=>setvisible(!visible)} className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
          <h1 className="text-lime-600 font-serif text-2xl font-medium">Register Form</h1>
            <input type="text" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-lime-500 shadow-inner" placeholder="Name" />
            <input type="email" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-lime-500 shadow-inner" placeholder="Email" />
            <input type="phone" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-lime-500 shadow-inner" placeholder="phone" />
            <input type="password" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-lime-500 shadow-inner" placeholder="password" />
            <button type="submit" className="h-12 bg-lime-600 rounded-md w-full text-white p-2 font-serif" >Register</button>
          </form>
          </div>
        </div>
        </>
        )
}
<div className="h-[80vh] w-screen flex justify-center items-center -z-10">
<button
  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-lime-500 rounded-md group" onClick={()=>setvisible(!visible)}
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-lime-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-lime-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-lime-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Click Me!</span
  >
</button>

</div>
      </>
  )
}

export default Contact;
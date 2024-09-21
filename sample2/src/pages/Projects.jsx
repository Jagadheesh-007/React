import React from 'react'
import Nav from '../components/Navbar'
const Projects = () => {
  return (
    <>
    <Nav/>
    <div className="h-[90vh] w-full">
      <div className="mt-5 h-[30%] w-full justify-around flex gap-4">
        <div className="h-full w-[10%] bg-slate-50 hover:bg-slate-200">Hello</div>
        <div className="h-full w-[10%] bg-slate-50 shadow shadow-black">Hello</div>
        <div className="h-full w-[10%] bg-slate-50 shadow shadow-black">Hello</div>
        <div className="h-full w-[10%] bg-slate-50 shadow shadow-black">Hello</div>
        <div className="h-full w-[10%] bg-slate-50 shadow shadow-black">Hello</div>
      </div>
    </div>
    </>
  )
}

export default Projects
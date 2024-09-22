import React from 'react'
import Nav from '../components/Navbar'
import { useEffect, useState } from 'react'
import {getprojects} from '../services/api'
const Projects = () => {
  const [projectdata, setdata] = useState(null)
  const fetchdata = async () => {
    try {
      const {data} = await getprojects()
      setdata(data)
    } catch (error) {
      console.warn(error)
    }
  }
  useEffect(()=>{
    fetchdata()
  },[])
  console.log(projectdata)
  if(!projectdata)
    return "No data available"
  return (
    <>
    <Nav/>
    <div className="h-screen w-screen flex gap-3 align-middle justify-center flex-row flex-wrap m-5">
      {
      projectdata.map((data,id)=>(
        <div className="h-[300px] w-[300px] shadow shadow-black flex align-top flex-col font-serif">
         <h1 className='h-[10%] w-[100%] flex gap-4 font-bold justify-center'>{data.title}</h1>
         <img className='h-[40%] m-1 shadow-md flex justify-center' src={data.img}/>
         <p className='h-[50%] flex align-middle justify-center'>{data.desc}</p> 
         </div>
      ))
      }
      </div>
    </>
  )
}

export default Projects
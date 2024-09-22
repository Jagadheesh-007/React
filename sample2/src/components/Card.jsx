import React from 'react'
const Card = ({title,desc,img,pid}) => {
  return (
    <>
    <div className='h-[300px] w-[300px] flex flex-row shadow-md shadow-black'>
        <div className="h-[150px] w-full"><img src={img}/></div>
        <div className="h-[50px] w-full"><p>{title}</p></div>
        <div className="h-[100px] w-full"><p>{desc}</p></div>
    </div>
    </>
  )
}

export default Card
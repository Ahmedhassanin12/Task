import React from 'react'
import {AiOutlineEye, AiOutlineComment} from "react-icons/ai"
import {BsFillSignpost2Fill} from "react-icons/bs"
import {MdPages} from "react-icons/md"

const links = [
  { name: "Subscribe", icon: <AiOutlineEye color="blue" fontSize="1.5em"  /> , number: 750},
  { name: "Post", icon: <BsFillSignpost2Fill color="red" fontSize="1.5em"/> , number: 750},
  { name: "Pages", icon: <MdPages color="blue" fontSize="1.5em" />, number: 750 },
  { name: "Comments", icon: <AiOutlineComment color="green" fontSize="1.5em"/>, number: 750 },
  
];

const Hero = () => {
  return (
    <div className='flex flex-wrap gap-4 px-8'>
      {links.map((links, i) =>(
        <div key={i} className="info flex items-center justify-between w-[170px] h-12 mx-8 bg-white p-10 rounded-md">
           <div>
             <p className='text-gray font-bold mb-2'>{links.number}</p>
             <p className='font-semibold mr-6 text-[#8497a6]'>{links.name}</p>
           </div>
           <div className=''>
             {links.icon}
           </div>
        </div>
      ))}
    </div>
  )
}

export default Hero
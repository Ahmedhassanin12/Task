import React from 'react'
import {BsFacebook, BsTwitter, BsGoogle, BsYoutube} from "react-icons/bs"
const links = [
  { name: "FaceBook", icon: <BsFacebook color='#3b5998'/>, number: 234 },
  { name: "Twiter", icon: <BsTwitter color='#00acee' /> , number: 234},
  { name: "Google", icon: <BsGoogle color='#4285F4' /> , number: 234},
  { name: "Youtube", icon: <BsYoutube  color='	#FF0000'/> , number: 234},
  
];

const Top = () => {
  return (
    <div className='w-[280px] mt-2 bg-white  rounded-lg'>
        <div className='info flex justify-between px-4 py-4'>
           <h5 className='font-bold text-gray-400'>Top Referlas</h5>
           <p className='text-gray-400'>View All</p>
        </div>
        <div>
          {links.map(link => (
            <div key={link.name} className="flex justify-between items-center  px-4 py-4">
              <p className='flex items-center gap-3 font-semi-bold'>{link.icon} {link.name}</p>
              <p>{link.number}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Top
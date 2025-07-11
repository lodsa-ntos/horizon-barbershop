
import React from 'react'
import { FaStar } from "react-icons/fa";

function StarRating ({rating}) {

  const totalStars = 5;

  return (
    <div className='flex-1 flex items-center gap-1'>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-amber-500 group-hover:text-indigo-600 transition-all duration-500 shadow-[rgba(0,0,0,0.05)]' : 'text-gray-300 shadow-[rgba(0,0,0,0.05)]'}`}
        />
      ))}
    </div>
  )
}

export default StarRating

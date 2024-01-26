import React from 'react'
import star from '../../assets/star.png'

const Rating = () => {
  
  const estrelas = new Array(5).fill('valor')

  return (
    <div>
        <div className='flex'>
            {estrelas.map((item,index)=>{
                return <img key={index} src={star} alt="star" />
            })}
        </div>
        <div className=''>
            <p className='text-2xl font-medium'>5 star rating</p>
            <span className='text-1xl text-light-gray'>based on 1788 reviews</span>
        </div>
    </div>
  )
}

export default Rating
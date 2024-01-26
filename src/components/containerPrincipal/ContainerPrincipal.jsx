import React from 'react'
import foodImg from '../../assets/foodImg.png'
import arrow from '../../assets/arrow.png'
import play from '../../assets/play.png'
import Rating from '../rating/rating'
const ContainerPrincipal = () => {
  return (
    <div className='columns-2 mt-[50px] h-5/6 gap-0 px-[220px]'> 
        <div className='flex flex-col gap-[50px] justify-center mt-[100px]'>
            <div className='flex relative text-center justify-left gap-3 '>
                    <h1 className='text-9xl font-extrabold text-font-orange'>Fast</h1>
                    <div className='text-left text-heavy-gray'>
                        <p className='text-6xl font-bold'>Food</p>
                        <p className='text-6xl font-bold '>Delivery</p>
                    </div>
                    <img src={arrow} alt="arrow"  className='absolute top-[-120px] right-[250px]'/>
            </div>
            <div>
                <p className='text-2xl text-light-gray'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
            </div>

            <div className='flex gap-3 justify-left items-center'>
                <button className='rounded-[50px] h-[70px] w-[200px] text-2xl bg-heavy-gray text-white'>Order Now</button>
                <div className='flex items-center'>
                    <img src={play} alt="" className='mt-[35px] h-20' />
                    <p className='text-2xl font-medium'>Watch Video</p>
                </div>
            </div>
            <Rating />
        </div>
        <div className='flex justify-center items-center'>
            <img src={foodImg} alt="propaganda da comida" />
        </div>
    </div>
  )
}

export default ContainerPrincipal
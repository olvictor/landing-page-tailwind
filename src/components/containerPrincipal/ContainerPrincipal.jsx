import React from 'react'
import foodImg from '../../assets/foodImg.png'
import arrow from '../../assets/arrow.png'
import play from '../../assets/play.png'
import Rating from '../rating/rating'


const ContainerPrincipal = () => {
  return (
    <div className='flex mt-[50px] h-5/6 gap-0 px-[100px]'> 
        <div className='w-[70vh]'>        
            <div className='flex flex-col gap-[50px] justify-center mt-[100px] h-[70vh]'>
                <div className='flex relative text-center justify-left gap-3 '>
                        <h1 className='text-9xl font-extrabold text-font-orange'>Fast</h1>
                        <div className='text-left text-heavy-gray'>
                            <p className='text-6xl font-bold'>Food</p>
                            <p className='text-6xl font-bold '>Delivery</p>
                        </div>
                        <img src={arrow} alt="arrow"  className='absolute top-[-120px] right-[20px]'/>
                </div>
                <div>
                    <p className='text-2xl text-light-gray'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
                </div>

                <div className='flex gap-3 justify-left items-center'>
                    <button className='rounded-[50px] h-[70px] w-[200px] text-2xl bg-heavy-gray text-white hover:border-white hover:border-2'>Order Now</button>
                    <div className='flex items-center hover:cursor-pointer hover:scale-105 hover:underline'>
                        <img src={play} alt="" className='mt-[35px] h-20' />
                        <p className='text-2xl font-medium'>Watch Video</p>
                    </div>
                </div>
            <Rating />
            </div>
        </div>

        <div className='flex justify-center items-center h-[70vh] mt-[50px]  min-w-[50vh] bg-blue-700'>
            <img src={foodImg} alt="propaganda da comida " />
        </div>
    </div>
  )
}

export default ContainerPrincipal
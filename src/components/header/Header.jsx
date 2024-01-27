import React from 'react';
import logo from '../../assets/chef-hat.png';
import lupa from '../../assets/Vector.png';
import Cart from '../../assets/Cart.svg';

const Header = () => {
  return (
    <nav className='flex items-center justify-between  h-16 font-sans'>
      <div className='flex gap-x-[10px] items-center  w-[120px] h-16'>
       <img src={logo} alt="chef-hat" className='h-10 mb-[14px] self-center mb-[12px]'/>
       <h2 className='text-4xl font-black'>Foo</h2>
      </div>

      <ul className='flex gap-x-10 text-2xl font-medium'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
      <div className='w-80 h-14 flex relative drop-shadow-2xl'>
        <img src={lupa} alt="lupa" className='h-6 absolute left-10 top-4'/>
        <input type="text" placeholder='Search' className='rounded-3xl w-96 bg-bg-input-color appearance-none focus:outline-none pl-20 pr-36 text-xl placeholder-neutral-950'/>
        <span className='text-4xl absolute right-11 top-2 text-light-gray opacity-35 font-medium'>|</span>
        <div className='hover:cursor-pointer '>
          <img src={Cart} alt="Shopping cart" className='absolute right-4 top-[18px] '/>
          <div className='bg-red-700 h-[20px] w-[20px] absolute right-0 flex items-center justify-center rounded-[50%] text-zinc-50 shadow-lg'>
            <p className='text-xs mt-[2px]'>2</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
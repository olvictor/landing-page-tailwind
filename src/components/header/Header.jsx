import React, { useState } from 'react';
import logo from '../../assets/chef-hat.png';
import lupa from '../../assets/Vector.png';
import Cart from '../../assets/Cart.svg';

const Header = () => {
  const [menuAtivo,setMenuAtivo] = useState(false);

  return (
    <nav className='flex items-center justify-between  h-16 font-sans'>
      <div className='flex gap-x-[10px] items-center  w-[120px] h-16'>
       <img src={logo} alt="chef-hat" className='h-10 mb-[14px] self-center mb-[12px]'/>
       <h2 className='text-4xl font-black'>Foo</h2>
      </div>

      <ul className='animate-fadeIn flex gap-x-10 text-2xl font-medium hidden lg:flex'>
        <li className='hover:underline'><a href="#">Home</a></li>
        <li className='hover:underline'><a href="#">Menu</a></li>
        <li className='hover:underline'><a href="#">Contact</a></li>
        <li className='hover:underline'><a href="#">Shop</a></li>
      </ul>
      
      <div className='w-80 h-14 relative drop-shadow-2xl hidden xl:flex'>
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

      <div className='hover:cursor-pointer xl:hidden'>
        <img src={lupa} alt="lupa" />
      </div>
      <div class='flex-col relative'>
        <button class="lg:hidden focus:outline-none" id="menu-toggle" onClick={()=> setMenuAtivo(!menuAtivo)}>
          <svg class="w-8 h-8 border-2 border-black rounded-lg hover:scale-110 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`animate-slideInTop gap-x-10 text-2xl font-medium absolute left-[-50px] my-[10px] ${!menuAtivo ? 'hidden' : 'block'} z-10  lg:hidden` }>
          <li className='hover:underline'><a href="#">Home</a></li>
          <li className='hover:underline'><a href="#">Menu</a></li>
          <li className='hover:underline'><a href="#">Contact</a></li>
          <li className='hover:underline'><a href="#">Shop</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
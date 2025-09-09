import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BiCartAdd } from "react-icons/bi";
import Image from 'next/image';

import logo from "../../../../public/logo/logo.png"

const Navbar = () => {
    return (
        <div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px] mx-[10px]">
            <div className='flex xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap-reverse xl:justify-center lg:justify-center md:justify-center items-center'> 

               <div className='w-full xl:space-x-10 lg:space-x-6 md:space-x-4 space-x-3'>
                <Link href="/">Home</Link>
                <Link  href="/pages/shop">Shop</Link>
                <Link  href="/pages/blogs">Blogs</Link>
                <Link  href="/pages/contact">Contact</Link>
            </div>

            <div className='w-full flex justify-center'>

                 <Image
      src={logo}
      width={100}
      height={127}
      alt="Logo"
    />
                
            </div>



            <div className='flex gap-2 w-full  xl:justify-end lg:justify-end md:justify-end justify-center items-center gap-x-6'>
    
      <div  className=' flex items-center justify-between gap-x-1'>
        <h2>Login</h2>
        <RxAvatar /> 
    </div>
     <IoIosSearch />
     <BiCartAdd />



            </div>




            </div>
            
        </div>
    );
};

export default Navbar;
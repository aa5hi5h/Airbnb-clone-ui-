import logo from '@/assets/logo.png'
import { AlignJustify, Globe, Search, UserRound } from 'lucide-react'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-b-2 '>
            <div className=''>
            <Image src={logo} alt="logo" className='w-40' />
            </div>
            <div className=' flex justify-around items-center relative '>
                <input type="search" placeholder='' className=' border-2 px-4 py-2 w-[20rem] shadow-sm shadow-gray-300 outline-0 rounded-full '/>
                <div className='flex absolute gap-8 font-semibold -ml-12 items-center'>
                    <button className='w-full'>Place</button>
                    <button className='w-full px-4 border-x-2 border-neutral-400'>Time</button>
                    <button className=' text-neutral-400 pl-2 w-full'>Guest</button>
                    <div className='bg-red-400 rounded-full  -mr-14 p-1 flex justify-items-end'>
                        <Search color='white' />
                    </div>
                    
                </div>
                </div>
                <div className='flex   items-center gap-4 '>
                    <p className='py-2 px-4 rounded-full transition hover:bg-neutral-200'>Airbnb your home</p>
                    <Globe />
                    <div className='flex gap-2 px-2 py-2 hover:bg-neutral-300 transition rounded-full shadow-md items-center'>
                        <AlignJustify />
                        <UserRound size={28} className='bg-gray-300 hover:bg-white transition rounded-full' />
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar
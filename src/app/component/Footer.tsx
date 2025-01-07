import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className='bg-white shadow-inner shadow-black'>
 <h1 className='text-[#115528] font-[900] text-[25px] lg:pl-[97px] md:pl-[50px] sm:pl-[18px] pl-[52px] pt-4 uppercase'>Rolex® </h1>
 <div className=' lg:flex-row lg:justify-around md:flex-row md:justify-around sm:flex-row sm:justify-around flex flex-col sm:gap-4 items-center  bg-white max-w-screen-full py-6 gap-8'>
 {/* about QAFIX */}
 <div>
  <h1 className='text-blue-950 font-[600] text-[22px]'>About Rolex® </h1>
  <p className='text-[15px] font-[500] leading-[19px]'> ROLEX is an emerging technology <br /> startup founded with the goal of <br /> revolutionizing the world of web <br /> development and design.</p>
 </div>
 
 {/* LINKS */}
 <div>
    <h1 className='text-blue-950 font-[600] text-[22px]'> Quick Links</h1>
    <ul className='text-[17px] font-[500] leading-[23px]'>
    <li className='hover:underline'> <Link href='/'>Home</Link></li>
        <li className='hover:underline'> <Link href='/about'>About</Link></li>
        <li className='hover:underline'> <Link href='/Blog'>Blogs</Link></li>
        <li className='hover:underline'> <Link href='/contact'>Contact</Link></li>
    </ul>
 </div>

{/* privicy and policy */}
<div>
  <h1 className='text-blue-950 font-[600] text-[22px]'>Privicy </h1>
  <ul className='text-[17px] font-[500] leading-[23px]'>
    <li>Terms</li>
    <li>Services</li>
    <li>Management</li>
    <li>Transfers</li>
  </ul>
</div>

 
{/* contact */}
 <div>
        <h1 className='text-blue-950 font-[600] text-[22px]'>Contact US</h1>
        <ul className='text-[15px] font-[500] leading-[23px]'>
            <li className='text-blue-500'><Link href='https://www.facebook.com'>FACEBOOK</Link></li>
            <li className='text-blue-500'><Link href='https://www.linkedin.com'>LINKDIN</Link></li>
            <li className='text-blue-500'><Link href='https://github.com/Sabahat03-july'>GITHUB</Link></li>
            <li className='text-blue-500'><Link href='Sabahatsabahat@gmail.com'>EMAIL</Link></li>
        </ul>
    </div>

    
    </div>
    <h1 className='text-[15px] text-gray-600 lg:pl-[530px] md:pl-[330px] sm:pl-[230px] pl-[60px]'> PAKISTAN: Powerd by ROLEXgit config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
®  Creators</h1>
    </div>
    </>
  )
}

export default Footer
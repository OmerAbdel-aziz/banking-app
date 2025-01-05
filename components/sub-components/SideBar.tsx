import Image from 'next/image'
import React from 'react'
import Logo from "@/public/icons/Logo.png"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
 
 const sidebar = () => {
   return (
     <section className='sidebar '>
      <nav className='flex flex-col gap-2'>
        <Link href="/" className='sidebar-link mb-12'>
        <Image src={Logo} alt="logo" width={34} height={34} className='sidebar-logo' />
        <h1 className='sidebar-logo '>Horizon</h1>
        </Link>
        {sidebarLinks.map((link) => (
          <Link
            key={link.route}
            href={link.route}
            className='sidebar-link'
          >
            {link.label}
          </Link>
        ))}
      </nav>
     </section>
   )
 }
 
 export default sidebar
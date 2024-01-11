"use client"

import { UserButton } from "@clerk/nextjs"
import { Menu, Sparkles } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import MobileSidebar from "./mb-sidebar"
import SearchIinput from "./search-input"


const Navbar = () => {
  return (
		<div className=' h-16 fixed w-full z-50 flex justify-between items-center px-4 py-2 border-b border-primary/10 bg-secondary'>
			
      <div className='text-3xl font-bold flex items-center gap-x-4'>
				<MobileSidebar />
				<Link href='/'>
					<h1 className='hidden md:block  text-3xl'><span className='text-blue-500'>AZZA</span>gpt-4</h1>
				</Link>
        
				
			</div>
			<div className='flex items-center gap-x-4'>
        <div className='hidden md:block w-[300px]'>
          <SearchIinput />
        </div>
				<Button size={'sm'} variant={'black'}>
					Upgrade
					<Sparkles className='ml-2 h-4 w-4 fill-white' />
				</Button>
				<ModeToggle />
				<UserButton />
			</div>
		</div>
	)
}

export default Navbar

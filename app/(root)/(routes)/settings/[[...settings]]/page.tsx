import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

const Settingspage = () => {
  return (
    <div className='flex flex-col space-y-4 justify-center items-center h-full p-0 w-full bg-primary-foreground'>
      <h1 className='text-3xl font-bold flex'>Settings page</h1>
      <ModeToggle />
    </div>
  )
}

export default Settingspage

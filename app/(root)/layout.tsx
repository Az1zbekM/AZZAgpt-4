import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import React from 'react'

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className='h-full'>
        {/* navbar */}
        <Navbar />
        {/* sidebar */}
        <div className='w-20 h-full bg-secondary border-r border-gray-800 hidden md:flex mt-16 flex-col fixed inset-y-0'>
          <Sidebar />
        </div>
        {/* main content */}
        <main  className='md:pl-20 pt-16 h-full'>
             {children} 
        </main>
      
    </div>
  )
}

export default RootLayout

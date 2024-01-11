import React from 'react'

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="flex w-full h-full items-center justify-center bg-gray-900">
        {children}
    </div>
  )
}

export default AuthLayout

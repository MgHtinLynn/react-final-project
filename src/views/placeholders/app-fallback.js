import React from 'react'
import Logo from '../../logo.svg'

export default function AppFallback() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <img src={Logo} alt="" width="150px" />
    </div>
  )
}

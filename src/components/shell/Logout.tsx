"use client"

import { logOut } from '@/actions/auth/logout'
import { useRouter } from 'next/navigation'
import React from 'react'



function Logout() {
    const router = useRouter()
    const handleLogout = async () =>{
        await logOut()
        router.push("/")
    }
  return (
    <div className="w-full h-full" onClick={() => handleLogout()}>logOut</div>
  )
}

export default Logout
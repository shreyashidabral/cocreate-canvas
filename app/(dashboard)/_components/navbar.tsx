"use client"

import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-100 ">
      <div className="hidden lg:flex lg:flex-1">
        {/* Todo: Add Search */}
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Home from './icons/home'
import Search from './icons/search'
import NewThread from './icons/new-thread'
import Heart from './icons/heart'
import Avatar from './icons/avatar'

const BottomNav = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 sticky bottom-0 bg-brand lg:px-72 xl:px-96">
      <div>
        <Home />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <NewThread />
      </div>
      <div>
        <Heart />
      </div>
      <div>
        <Avatar />
      </div>
    </nav>
  )
}

export default BottomNav
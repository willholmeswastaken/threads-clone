'use client';

import React from 'react'
import Home from './icons/home'
import Search from './icons/search'
import NewThread from './icons/new-thread'
import Heart from './icons/heart'
import Avatar from './icons/avatar'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const BottomNav = () => {
  const path = usePathname();
  const icons = [
    {
      name: 'home',
      icon: (filled: boolean) => <Home filled={filled} />
    },
    {
      name: 'search',
      icon: (filled: boolean) => <Search />
    },
    {
      name: 'new thread',
      icon: (filled: boolean) => <NewThread />
    },
    {
      name: 'activity',
      icon: (filled: boolean) => <Heart filled={filled} />
    },
    {
      name: 'settings',
      icon: (filled: boolean) => <Avatar filled={filled} />
    }
  ]
  return (
    <nav className="w-full flex justify-between items-center p-6 sticky bottom-0 bg-brand">
      {
        icons.map(icon => {
          const active = path === `/${icon.name.toLowerCase()}`;
          return (
            <Link key={icon.name} href={`/${icon.name}`}>
              <div className={active ? 'text-white' : 'text-gray-500'}>
                {icon.icon(active)}
              </div>
            </Link>
          )
        })
      }
    </nav>
  )
}

export default BottomNav
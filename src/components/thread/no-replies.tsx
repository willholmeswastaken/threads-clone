import React from 'react'
import ReactionBar from './reaction-bar'
import Ellipsis from '../icons/ellipsis'
import Image from 'next/image'
import Verified from '../icons/verified'

const NoRepliesThread = () => {
    return (
        <div className="flex flex-row gap-x-4 w-full px-4">
            <div>
                <Image width={30} height={30} src='/me.png' alt="me" className='rounded-full mt-1' />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <div className="flex flex-row gap-x-2">
                    <span className="bold">devwillholmes</span>
                    <span className="text-blue-400 mt-1">
                        <Verified />
                    </span>
                </div>
                <p>Hello world</p>
                <ReactionBar />
            </div>
            <div className="flex items-start gap-x-2 text-sm">
                <span className='text-zinc-600'>2d</span>
                <span className="mt-[-2px]">
                    <Ellipsis />
                </span>
            </div>
        </div>
    )
}

export default NoRepliesThread
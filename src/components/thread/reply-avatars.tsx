import React from 'react'
import Image from 'next/image';

type ReplyAvatarsProps = {
    avatars: string[];
};

const ReplyAvatars = ({ avatars }: ReplyAvatarsProps) => {
    if (avatars.length === 0) return null;
    if (avatars.length === 1) return (
        <div className="flex items-center justify-center ml-2">
            <Image width={15} height={15} src={avatars[0] ?? '/me.png'} alt="me" className='rounded-full mr-1 border border-zinc-600' />
        </div>
    )
    if (avatars.length === 2) return (
        <div className="flex items-center justify-center">
            <Image width={15} height={15} src={avatars[0] ?? '/me.png'} alt="me" className='rounded-full mr-1 border border-zinc-600' />
            <Image width={15} height={15} src={avatars[1] ?? '/me.png'} alt="me" className='rounded-full mr-1 border border-zinc-600' />
        </div>
    )

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row">
                <Image width={15} height={15} src={avatars[0] ?? '/me.png'} alt="me" className='rounded-full mr-1 border border-zinc-600' />
                <div className="mt-[-6px]">
                    <Image width={18} height={18} src={avatars[1] ?? '/me.png'} alt="me" className='rounded-full border border-zinc-600' />
                </div>
            </div>
            <Image width={13} height={13} src={avatars[2] ?? '/me.png'} alt="me" className='rounded-full border border-zinc-600' />
        </div>
    )
}

export default ReplyAvatars
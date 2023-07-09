import React, { useMemo } from 'react'
import ReactionBar from './reaction-bar'
import Ellipsis from '../icons/ellipsis'
import Image from 'next/image'
import Verified from '../icons/verified'
import dayjs from 'dayjs'
import ReplyAvatars from './reply-avatars'

type ThreadProps = {
    username: string;
    avatarUrl: string;
    isVerified?: boolean;
    content: string;
    createdAt: string;
    likes: number;
    replies: number;
    isLiked?: boolean;
    reactionAvatarUrls?: string[];
}

// TODO:
// - Add ellipsis menu
// - Hookup reaction bar
// - Trailing line from avatar to associated reaction avatars


const Thread = ({
    username,
    avatarUrl,
    isVerified,
    content,
    createdAt,
    likes,
    replies,
    isLiked,
    reactionAvatarUrls = []
}: ThreadProps) => {
    const timeSinceCreation = useMemo(() => {
        const date = dayjs(createdAt);
        const diffInSeconds = date.diff(dayjs(), 'second');
        if (diffInSeconds > 60) {
            const diffInMinutes = date.diff(dayjs(), 'minute');
            if (diffInMinutes > 60) {
                const diffInHours = date.diff(dayjs(), 'hour');
                if (diffInHours > 24) {
                    const diffInDays = date.diff(dayjs(), 'day');
                    if (diffInDays > 7) {
                        const diffInWeeks = date.diff(dayjs(), 'week');
                        if (diffInWeeks > 4) {
                            const diffInMonths = date.diff(dayjs(), 'month');
                            if (diffInMonths > 12) {
                                const diffInYears = date.diff(dayjs(), 'year');
                                return `${diffInYears}y`;
                            }
                            return `${diffInMonths}m`;
                        }
                        return `${diffInWeeks}w`;
                    }
                    return `${diffInDays}d`;
                }
                return `${diffInHours}h`;
            }
            return `${diffInMinutes}m`;
        }
        return `${diffInSeconds}s`;
    }, [createdAt]);
    return (
        <div className="flex flex-col w-full p-4 border-b border-zinc-900">
            <div className="flex flex-row gap-x-4">
                <div className='flex flex-col'>
                    <Image width={30} height={30} src={avatarUrl} alt="me" className='rounded-full mt-1 border border-zinc-600' />
                    {reactionAvatarUrls.length > 0 && <div className="h-full bg-zinc-500 w-[1.5px] ml-[14px] mt-2"></div>}
                </div>
                <div className="flex flex-col gap-y-1 flex-1">
                    <div className="flex flex-row gap-x-2">
                        <span className="bold">{username}</span>
                        {
                            isVerified && (
                                <span className="text-blue-400 mt-1">
                                    <Verified />
                                </span>
                            )
                        }
                    </div>
                    <p className='text-sm'>{content}</p>
                    <ReactionBar isLiked={isLiked ?? false} />
                </div>
                <div className="flex items-start gap-x-2 text-sm">
                    <span className='text-zinc-600'>{timeSinceCreation}</span>
                    <span className="mt-[-2px]">
                        <Ellipsis />
                    </span>
                </div>
            </div>

            <div className="flex flex-row gap-x-2 text-zinc-600 items-center text-sm mt-2">
                <div className={`${reactionAvatarUrls.length === 0 ? 'mr-[2.3rem]' : ''} ${reactionAvatarUrls.length === 1 ? 'mr-[0.65rem]' : ''}`}>
                    <ReplyAvatars avatars={reactionAvatarUrls} />
                </div>
                {
                    replies > 0 && (
                        <span>{replies} repl{replies > 1 ? 'ies' : 'y'}</span>
                    )
                }
                {likes > 0 && replies > 0 && <span className='text-xs'>•</span>}
                {
                    likes > 0 && (
                        <span>{likes} like{likes > 1 ? 's' : ''}</span>
                    )
                }

            </div>
        </div>
    )
}

export default Thread
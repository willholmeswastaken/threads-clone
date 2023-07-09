import React, { useMemo } from 'react'
import ReactionBar from './reaction-bar'
import Ellipsis from '../icons/ellipsis'
import Image from 'next/image'
import Verified from '../icons/verified'
import dayjs from 'dayjs'

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

const Thread = ({
    username,
    avatarUrl,
    isVerified,
    content,
    createdAt,
    likes,
    replies,
    isLiked,
    reactionAvatarUrls
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
        <div className="flex flex-row gap-x-4 w-full px-4 border-b border-zinc-900 py-4">
            <div>
                <Image width={30} height={30} src={avatarUrl} alt="me" className='rounded-full mt-1' />
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
                <p>{content}</p>
                <ReactionBar isLiked={isLiked ?? false} />
            </div>
            <div className="flex items-start gap-x-2 text-sm">
                <span className='text-zinc-600'>{timeSinceCreation}</span>
                <span className="mt-[-2px]">
                    <Ellipsis />
                </span>
            </div>
        </div>
    )
}

export default Thread
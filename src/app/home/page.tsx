import Thread from '@/components/thread'
import dayjs from 'dayjs'

export default function Home() {
    return (
        <div className='flex flex-col gap-y-6 items-center justify-center'>
            {
                Array.from(Array(100).keys()).map((_, i) => (
                    <Thread
                        key={i}
                        username='devwillholmes'
                        isVerified
                        avatarUrl='/me.png'
                        content='Hello World'
                        isLiked
                        createdAt={dayjs().toISOString()}
                        likes={2}
                        replies={2}
                        reactionAvatarUrls={['/me.png', '/me.png', '/me.png']}
                    />
                ))
            }

        </div>
    )
}

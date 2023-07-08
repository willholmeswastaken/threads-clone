import NoRepliesThread from '@/components/thread/no-replies'
import Image from 'next/image'

export default function Home() {
    return (
        <div className='flex flex-col gap-y-6 items-center justify-center'>
            {
                Array.from(Array(100).keys()).map((_, i) => (
                    <NoRepliesThread key={i} />
                ))
            }

        </div>
    )
}

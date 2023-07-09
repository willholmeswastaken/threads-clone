import React from 'react'
import Heart from '../icons/heart'
import SpeechBubble from '../icons/speech-bubble'
import ReThread from '../icons/re-thread'
import Send from '../icons/send'

type ReactionBarProps = {
    isLiked: boolean;
};

const ReactionBar = ({ isLiked }: ReactionBarProps) => {
    return (
        <div className="flex flex-row gap-x-4 mt-2">
            <button type="button" className={isLiked ? 'text-red-500' : ''}>
                <Heart filled={isLiked} />
            </button>
            <div>
                <SpeechBubble />
            </div>
            <div>
                <ReThread />
            </div>
            <div>
                <Send />
            </div>
        </div>
    )
}

export default ReactionBar
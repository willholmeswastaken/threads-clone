import React from 'react'
import Heart from '../icons/heart'
import SpeechBubble from '../icons/speech-bubble'
import ReThread from '../icons/re-thread'
import Send from '../icons/send'

const ReactionBar = () => {
    return (
        <div className="flex flex-row gap-x-4 mt-1">
            <div>
                <Heart />
            </div>
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
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type BottomDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const BottomDrawer = ({ isOpen, onClose, children }: BottomDrawerProps) => {
    const [translateY, setTranslateY] = useState(0);
    const initialTouch = useRef(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        console.log('started');
        initialTouch.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchPos = event.touches[0].clientY;
        const diff = touchPos - initialTouch.current;
        setTranslateY(diff);
    };

    const handleTouchEnd = () => {
        if (translateY > 50) {
            onClose();
        }
        setTranslateY(0);
    };

    return (
        <div
            className={`fixed bottom-0 inset-x-0 transition-transform transform z-50 bg-zinc-900 p-4 h-1/2 overflow-auto`}
            style={{ transform: `translateY(${isOpen ? Math.max(translateY, 0) : initialTouch.current}px)` }}
        >
            <div className="flex justify-center pb-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                <div
                    className="cursor-pointer w-14 border-t-4 rounded-sm border-gray-400"
                />
            </div>
            {children}
        </div>
    );
};

export default BottomDrawer;

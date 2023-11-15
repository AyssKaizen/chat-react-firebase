'use client';
import React, { useRef, useState } from 'react';
import {sendMessage} from "next/dist/client/dev/error-overlay/websocket";

const InputSpotlightBorder = ({setValue, value, sendMessage}) => {
    const divRef = useRef<HTMLTextAreaElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <>
            <div className='relative w-full'>
                <textarea
                    onMouseMove={handleMouseMove}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && value !== '') {
                            sendMessage(event);
                        }
                    }}
                    autoComplete='off'
                    style={{resize: 'none'}}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                    value={value}
                    placeholder='Tapez votre message ici'
                    className={`h-32 w-full cursor-default rounded-md border border-slate-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none`}
                />
                <textarea
                    ref={divRef}
                    disabled
                    style={{
                        border: '1px solid #8678F9',
                        opacity,
                        WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                        resize: 'none',
                    }}
                    aria-hidden='true'
                    className={`pointer-events-none absolute left-0 top-0 z-10 h-32 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none`}
                />
            </div>
        </>
    );
};

export default InputSpotlightBorder;

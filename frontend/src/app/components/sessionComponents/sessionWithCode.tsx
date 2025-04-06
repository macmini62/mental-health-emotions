"use client";
import React, { useRef } from 'react';
import { useRouter } from "next/navigation";
import { MdKeyboard } from 'react-icons/md';

const SessionWithCode = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleJoinMeet = () => {

    }

    return (
        <div className="w-1/2 flex items-center gap-8">
          <div className="flex items-center gap-2 w-3/4 border-2 border-black rounded-md px-3">
            <MdKeyboard className="h-8 w-8 text-black" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your code or link"
              className="h-16 w-full outline-none px-4"
            />
          </div>
          <button
            onClick={handleJoinMeet}
            className="w-1/4 h-10 bg-blue-600 rounded-md text-white active:bg-white active:text-blue-600 active:border-2 active:border-blue-600"
            >
              Join
          </button>
        </div>
    )
}

export default SessionWithCode;

import { ChevronRight } from "lucide-react";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { cn } from "../../lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";


export default function InfoStrip() {

    const [strip, setStrip] = useState(true)

    const closeInfoStrip = () => {
        setStrip(!strip);

        setTimeout(() => {
            setStrip(true);
        }, 20000);
    }

    return (
        <div className={`info-strip bg-black flex items-center justify-between px-7 ${strip ? '' : 'hidden'}`}>
            <div></div>
            <div>
            <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                    className={cn(`
              inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#40ffdc] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent
            `)}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    odit?
                </span>
                {/* <button class="relative inline-flex items-center mx-4 justify-center p-[1.5px] overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#40e9ff] group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative transition-all ease-in duration-500 bg-black px-5 text-white dark:bg-gray-900 rounded-md ">
              Join Now
            </span>
          </button> */}
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
            </div>
            <div className='flex items-center justify-end text-xl cursor-pointer'
                onClick={closeInfoStrip}
        >
            <FontAwesomeIcon icon={faXmark} className='text-white' />
        </div>

        </div>
    );
}
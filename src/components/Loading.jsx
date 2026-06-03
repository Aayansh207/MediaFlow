import React from 'react'

const Loading = () => {
    return (
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18%] relative h-80 rounded-xl overflow-hidden animate-pulse">
            <div className="h-full w-full bg-neutral-300 dark:bg-neutral-800" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="flex-1 space-y-2">
                    <div className="h-3 rounded bg-neutral-300 dark:bg-neutral-700 w-full"></div>
                    <div className="h-3 rounded bg-neutral-300 dark:bg-neutral-700 w-2/3"></div>
                </div>
                <div className="h-10 w-20 rounded-xl bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
        </div>
    )
}


export default Loading
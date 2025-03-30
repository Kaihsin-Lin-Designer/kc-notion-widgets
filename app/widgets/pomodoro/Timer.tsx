"use client"

import { useRef, useEffect, useState, useCallback } from "react"

interface TimerProps {
    foucsTime: number,
    breakTime: number,
    cycles: number,
}

const Timer:React.FC<TimerProps>= ({
    foucsTime, breakTime, cycles
}) => {

    const [shownSec, setShownSec] = useState<number>(foucsTime* 60)
    const [status, setStatus] = useState<"focus" | "break">("focus")
    const [isPause, setIsPause] = useState<boolean>(true)
    const [iteration, setIteration] = useState<number>(1)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    
    
    useEffect(() => {
        
    }, [foucsTime, breakTime, cycles])
    
    // pause/start
    const startContdown = () => {
        if(intervalRef.current) return
        intervalRef.current = setInterval(() => {
            setShownSec((prev) => prev -1)
        }, 50)
    }

    const pauseCountdown = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        } 
    }
    const resetCycles = useCallback(() => {
        setIteration(1)
        setIsPause(true)
        setStatus("focus")
        setShownSec(foucsTime*60)
    }, [foucsTime])

    const finishCycles = () => {
        alert("恭喜!!已完成循環")
    }
    useEffect(() => {
        if(isPause) {pauseCountdown()}
        else {startContdown()}
    }, [isPause])

    // change status and cycle
    useEffect(() => {
        if(shownSec < 0) {
            switch(status) {
                case "focus":
                    if(iteration == cycles) {
                        resetCycles()
                        finishCycles()
                        return
                    }
                    setStatus("break")
                    setShownSec(breakTime* 60)
                    return
                case "break":
                    setStatus("focus")
                    setShownSec(foucsTime* 60)
                    setIteration((prev) => prev + 1)
                    return
                default:
                    setStatus("focus")
                    setShownSec(foucsTime* 60)
                    return
            }
        }
    }, [shownSec, status, foucsTime, breakTime, cycles, iteration, resetCycles])

    
    return(
        <div>
            <div className="flex flex-col py-4">
                <p
                    className="text-neutral-400 mb-1"
                >
                    iteration: {iteration}
                </p>
                <span
                    className="text-4xl font-semibold"
                >
                    {timeFomat(shownSec)}
                </span>
                <span
                    className="text-neutral-400"
                >
                    {status}
                </span>
            </div>
            <button
                onClick={() => setIsPause(!isPause)}
            >
                {isPause? "Start" : "Pause"}
            </button>
        </div>
    )
}

export default Timer

const timeFomat = (sec: number): string => {
    const formatedMin = Math.floor(sec / 60)
    const formatedSec = (sec % 60).toString().padStart(2, "0")
    return `${formatedMin}:${formatedSec}`
}
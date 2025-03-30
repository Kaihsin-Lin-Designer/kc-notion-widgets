"use client"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Timer from "./Timer"

const Pomodoro = () => {
    return(
        <Suspense>
            <PomodoroApp />
        </Suspense>
    )
    
}

export default Pomodoro

const PomodoroApp = () => {
    const searchParams = useSearchParams()

    const widgetName: string = searchParams.get("widgetName") ?? "Pomodoro"
    const focusTime: number = safeParseInt(searchParams.get("focus"), 25)
    const breakTime = safeParseInt(searchParams.get("break"), 1)
    const cycles = safeParseInt(searchParams.get("cycles"), 1)


    return(
        <main
            className="border-l-2 border-neutral-400 px-4 py-2"
        >
            <p
                className="text-lg text-neutral-400"
            >
                {widgetName}
            </p>
            <Timer 
                foucsTime={focusTime}
                breakTime={breakTime}
                cycles={cycles}
            />
        </main>
    )
}

const safeParseInt = (value: string|null, fallback: number = 1): number  => {

    if(!value) {
        return fallback
    }

    const parsed = parseInt(value)

    return isNaN(parsed) ? fallback : parsed;
}

"use client"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const plus = (num: number): void => {
        setCount(count + num)
    }

    return(
        <div
            className="flex flex-col"
        >
            <span>{count}</span>
            <button
                onClick={() => plus(1)}
            >
                +1
            </button>
        </div>
    )
}

export default Counter
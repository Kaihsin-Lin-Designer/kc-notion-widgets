"use client"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

const Counter = () => {
    const searchParams = useSearchParams()

    const user = searchParams.get("user")

    const [count, setCount] = useState<number>(0)

    const plus = (num: number): void => {
        setCount(count + num)
    }

    return(
        <div
            className="flex flex-col"
        >
            <h1>{user} Plus Plus</h1>
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
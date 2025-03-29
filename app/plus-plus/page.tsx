"use client"
import Counter from "./Counter"
import { useSearchParams } from "next/navigation"

const PlusPlus = () => {
    const searchParams = useSearchParams()

    const user = searchParams.get("user")

    return(
        <main
            className="flex flex-col"
        >
            <h1>{user} Plus Plus</h1>
            <Counter />
        </main>
    )
}

export default PlusPlus
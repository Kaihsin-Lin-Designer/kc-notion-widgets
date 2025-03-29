"use client"
import Counter from "./Counter"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

const PlusPlus = () => {
    const searchParams = useSearchParams()

    const user = searchParams.get("user")



    return(
        <main
            className="flex flex-col"
        >
            <Suspense fallback={<SuspendFallback/>}>
                <h1>{user} Plus Plus</h1>
                <Counter />
            </Suspense>
            
        </main>
    )
}

const SuspendFallback = () => {
    return(
        <p>Loading...</p>
    )
}

export default PlusPlus
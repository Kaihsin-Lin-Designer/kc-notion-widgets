"use client"
import Counter from "./Counter"
import { Suspense } from 'react'

const PlusPlus = () => {

    return(
        <main
            className="flex flex-col p-4"
        >
            <Suspense fallback={<SuspendFallback/>}>
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
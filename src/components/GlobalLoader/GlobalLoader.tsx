'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import image from '@/../public/avatar.png'



export function GlobalLoader() {
    const isMutating = useIsMutating()
    const isFetching = useIsFetching()

    return isFetching || isMutating ? (
        <div className="w-full h-full">
            <img src={`${image}`} alt=""/>
        </div>
    ) : null
}
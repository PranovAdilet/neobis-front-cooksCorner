'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {PropsWithChildren, useMemo, useState} from 'react'
import {ToastContainer} from "react-toastify";

export function Providers({ children }: PropsWithChildren) {
    const client = useMemo(
        () => new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: 2
                }
            }
        }),
        []
    );

    return (
        <QueryClientProvider client={client}>
            <ToastContainer/>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

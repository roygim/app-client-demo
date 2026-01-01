'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import UserProvider from '../lib/context/user/user.provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider  } from '@chakra-ui/react'
import { system } from '../lib/chakra';
import { Toaster } from './ui/toaster';

const queryClient = new QueryClient()

function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <UserProvider>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider value={system}>
                    {children}
                    <Toaster />
                </ChakraProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </UserProvider>
    )
}

export default Providers
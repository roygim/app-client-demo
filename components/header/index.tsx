'use client'

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogoIcon } from '@/assets/logo';
import logoIconSvg from "@/public/images/logo-icon.svg";
import Image from 'next/image';
import { UserContext } from '@/lib/context/user/user.context';
import { UserContextValue } from '@/lib/context/user/user.type';
import useUsers from '@/lib/hooks/useUsers';

function Header() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const { user, isUserLogin, saveUser, removeUser } = useContext(UserContext) as UserContextValue
    const { loadUserMutation, logoutUserMutation } = useUsers()

    const {
        mutateAsync: loadUserAsync
    } = loadUserMutation()

    const {
        mutateAsync: logoutUserAsync
    } = logoutUserMutation()

    useEffect(() => {
        if (!mounted && !isUserLogin) {
            loadUser()
        }
        setMounted(true)
    }, [isUserLogin])

    const loadUser = async () => {
        try {
            const res = await loadUserAsync()
            if (res && res.success) {
                saveUser(res.data)
            }
        } catch (error) {
        }
    }

    const logoutUser = async () => {
        try {
            const res = await logoutUserAsync()

            if (res && res.success) {
                removeUser()
                router.push(`/`)
            }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    return (
        <nav className='flex justify-between items-center py-6'>
            <Link href='/'>
                {/* <LogoIcon /> */}
                <div className='flex items-center gap-2'>
                    <Image
                        src={logoIconSvg}
                        alt="Follow us on Twitter"
                        width={24}
                        height={24}
                    />
                    <span className='text-xl font-semibold capitalize'>
                        my app
                    </span>
                </div>
            </Link>
            {
                !isUserLogin ?
                    <Link href='/login' className='text-sm font-semibold'>
                        Sign In <span>&rarr;</span>
                    </Link>
                    :
                    <div className='flex items-center gap-2'>
                        <div className='text-sm font-semibold'>
                            Hi, <span className='capitalize'>{user?.firstName}</span>
                        </div>
                        <button
                            className='text-sm font-semibold'
                            onClick={logoutUser}
                        >
                            Logout
                            <span style={{ textDecoration: 'none' }}>&rarr;</span>
                        </button>
                    </div>
            }
        </nav>
    )
}

export default Header
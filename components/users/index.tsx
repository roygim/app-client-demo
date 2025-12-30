'use client'

import useUsers from '@/lib/hooks/useUsers'
import { User } from '@/lib/types'
import { cn } from '@/lib/utils/common.util'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'

function Users() {
    const { getUserQuery } = useUsers()

    const { data: users, isLoading, isSuccess, isError, error } = getUserQuery()

    const handleEditUserClick = (user: User) => {
        console.log('user', user);
    }

    const handleDeleteUserClick = (user: User) => {
        console.log('user', user);
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                Error occurred - {(error as Error).message}
            </div>
        )
    }

    if (isSuccess && (!users || users.length == 0)) {
        return (
            <div>
                No results
            </div>
        )
    }

    if (!users)
        return

    return (
        <div>
            <h1 className={cn("text-3xl font-bold mb-6", "underline")}>
                Users:
            </h1>
            <div className='overflow-x-auto'>
                <table className="w-full">
                    <thead>
                        <tr className="text-center font-semibold uppercase tracking-widest bg-background-secondary">
                            <th className='px-5 py-3 '>
                                id
                            </th>
                            <th className='px-5 py-3'>
                                name
                            </th>
                            <th className='px-5 py-3'>
                                email
                            </th>
                            <th className='px-5 py-3'>
                            </th>
                            <th className='px-5 py-3'>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index} className='text-center'>
                                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                                        {user.id}
                                    </td>
                                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                                        {`${user.firstName} ${user.lastName}`}
                                    </td>
                                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                                        {user.email}
                                    </td>
                                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleEditUserClick(user)
                                            }}
                                        >
                                            <FaRegEdit className='inline' />
                                        </button>
                                    </td>
                                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleDeleteUserClick(user)
                                            }}
                                        >
                                            <FaRegTrashAlt className='inline' />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
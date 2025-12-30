import { cn } from '@/lib/utils/common.util'

function Users() {
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
                                first name
                            </th>
                            <th className='px-5 py-3'>
                                last name
                            </th>
                            <th className='px-5 py-3'>
                                email
                            </th>
                            <th className='px-5 py-3'>
                            </th>
                            <th className='px-5 py-3'>
                            </th>
                            <th className='px-5 py-3'>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Users
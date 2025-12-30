import { cn } from '@/lib/utils/common.util'

function Users() {
    return (
        <div>
            <h1 className={cn("text-3xl font-bold mb-6", "underline", "text-success")}>
                Users:
            </h1>
            <div className='overflow-x-auto'>
                <table className="w-full">
                    <thead>
                        <tr className="text-center font-semibold  tracking-widest text-white text-clip">
                            <th className='px-5 py-3 uppercase'>
                                ID
                            </th>
                            <th className='px-5 py-3 uppercase'>
                                <p className='uppercase'>
                                    dfsdfsdf
                                </p>
                                first name
                            </th>
                            <th className='px-5 py-3'>
                                last name
                            </th>
                            <th className='px-5 py-3'>
                                email
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Users
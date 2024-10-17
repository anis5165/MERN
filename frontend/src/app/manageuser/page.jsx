import React from 'react'

const Manageuser = () => {
  return (
    <div className='lg:max-w-[80%] mx-auto py-10'>
        <div className='border rounded-xl shadow-lg p-8'>
            <h1 className='text-center font-bold text-3xl'>Manage User</h1>
            <hr />

            <table className='w-full'>
                <thead className='bg-violet-700 text-white'>
                    <tr>
                        <th className='p-2 border border-white'>ID</th>
                        <th className='p-2 border border-white'>NAME</th>
                        <th className='p-2 border border-white'>EMAIL</th>
                        <th className='p-2 border border-white'>Password</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default Manageuser
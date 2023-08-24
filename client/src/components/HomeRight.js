import '../index.css'

export const HomeRight = () => {
    return (
        <div className='h-screen w-7/12'>
            <div className='bg h-full w-full flex items-center justify-center relative rounded-l-full'>
                <button className='absolute top-6 w-28 right-6 bg-emerald-500 p-4 text-white font rounded-md hover:bg-emerald-400'>Contact</button>
            </div>
        </div>
    )
}
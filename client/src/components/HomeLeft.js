import '@fortawesome/fontawesome-free/css/all.min.css';
const Leaf = require('../assets/leaf.png');
const {useState,useEffect} = require('react');

export const HomeLeft = () => {
    const [showIcon, setShowIcon] = useState(false);
    const handleHover = () => {
        setShowIcon(!showIcon);
    }
    return (
        <div className='h-screen w-5/12 flex flex-col bg-gray-100 gap-y-10'>
            <div className='h-32 flex flex-row items-center ml-16 gap-x-3'>
                <img src={Leaf} alt='Leaf Img' className='h-10'/>
                <h1 className='text-3xl font-extrabold text-emerald-900 h-10'>Charity Sphere</h1>
            </div>
            <div className='relative'>
                <div className='p-7 absolute right-0 top-12 flex flex-col gap-y-6 w-9/12 text-left'>
                    <h1 className='text-4xl font-bold font'>New way to give back</h1>
                    <p className='text-sm font'>Revolutionizing cross-border charity donations to create a real impact, effortlessly.</p>
                    <button className={`mt-20 w-32 ${showIcon ? 'bg-emerald-500':'bg-emerald-600'} p-4 text-white font`} onMouseEnter={handleHover} onMouseLeave={handleHover}>Donate {showIcon && <i className='fas fa-arrow-right'></i>}</button>
                </div>
            </div>

        </div>
    )
}
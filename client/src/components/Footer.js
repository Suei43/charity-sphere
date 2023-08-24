import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css'
const Leaf = require('../assets/leaf.png');

export const Footer = () => {
    return(
        <div className='bg-emerald-600 w-full p-6 h-48 flex flex-col'>
            <div className='flex flex-row'>
                <div className='h-32 flex flex-col items-center gap-x-4 w-4/12 gap-y-2'>
                    <img src={Leaf} alt='Leaf Img'/>
                    <h1 className='text-3xl font-extrabold text-white'>Charity Sphere</h1>
                    <p className='text-white text-sm'>Reach out to us to add your organization!</p>
                </div>
                <div className='w-4/12 h-full'>

                </div>
                <div className='w-4/12 h-full flex flex-col items-center gap-y-3 justify-center'>
                    <h2 className='text-lg font-semibold text-white font'>Reach out to us</h2>
                    <div className='flex flex-row gap-x-5 w-full items-center justify-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-facebook'></i> 
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-twitter'></i> 
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className='fas fa-envelope'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-white text-sm text-center'>© 2023 Charity Sphere. All rights reserved.</p>
            </div>
        </div>
    )
};
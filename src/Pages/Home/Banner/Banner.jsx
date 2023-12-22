import { Link } from 'react-router-dom';
import img from '../../../assets/images/banner-techno.jpg'

const Banner = () => {
      return (
            <div>
                  <img src={img} alt="Banner_image" className='w-full h-[600px]' />
                  <button className='bg-orange-500 px-12 py-2 text-right font-medium absolute right-16 -mt-16'><div ><Link to="/login" className='flex gap-4'>Let's Explore <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg></Link></div>
                  </button>
            </div>
      );
};

export default Banner;
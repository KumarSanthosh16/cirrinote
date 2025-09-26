import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const StarIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 14'
      id='Star-2--Streamline-Core'
      height='14'
      width='14'
    >
      <desc>Star 2 Streamline Icon: https://streamlinehq.com</desc>
      <g id='star-2--reward-rating-rate-social-star-media-favorite-like-stars-spark'>
        <path
          id='Union'
          fill='#fff'
          fillRule='evenodd'
          d='M7.93488 0.654773C7.6174 -0.218303 6.38263 -0.218294 6.06515 0.654774L4.6224 4.62235 0.654818 6.06511c-0.873075 0.31748 -0.873066 1.55224 0.000002 1.86972L4.6224 9.37759l1.44275 3.96761c0.31748 0.873 1.55225 0.873 1.86973 0l1.44275 -3.96761 3.96757 -1.44276c0.8731 -0.31748 0.8731 -1.55224 0 -1.86972L9.37763 4.62235 7.93488 0.654773Z'
          clipRule='evenodd'
          strokeWidth='1'
        ></path>
      </g>
    </svg>
  );
};

const Header = () => {
  const ribbonRef = useRef<HTMLDivElement | null>(null);
  const [isTopZero, setIsTopZero] = useState(false);
  const ribbonHeightRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      ribbonHeightRef.current = ribbonRef.current?.offsetHeight ?? 0;
      setIsTopZero(window.scrollY >= ribbonHeightRef.current);
    };

    measure();

    const onScroll = () => {
      setIsTopZero(window.scrollY >= ribbonHeightRef.current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <>
      <div className='!overflow-x-hidden w-full relative hidden md:block'>
        <div className='ribbon-wrapper'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          ref={ribbonRef}
          className='ribbon py-2.5 bg-[#166E4E] flex gap-12 items-center overflow-x-hidden whitespace-nowrap'
        >
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Get one year FREE
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Only for limited users
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Join the launch event
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Get one year FREE
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Only for limited users
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Join the launch event
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Get one year FREE
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Only for limited users
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Join the launch event
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Get one year FREE
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Only for limited users
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Join the launch event
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Get one year FREE
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Only for limited users
          </p>
          <StarIcon />
          <p className='text-[14px] leading-[20px] font-medium text-white'>
            Join the launch event
          </p>
        </div>
        <div className='ribbon-wrapper-right'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header
        className={[
          'fixed inset-x-0 z-[9999] py-4 md:py-6 px-3 md:px-10 backdrop-blur-2xl flex justify-between items-center transition-[top] duration-200',
          isTopZero ? 'top-0' : 'top-0 md:top-10',
        ].join(' ')}
      >
        <img
          src='/cirrinote-logo.png'
          alt='Cirrinote'
          className='w-[130px] md:w-auto'
        />
        <div className='gap-16 text-white text-[14px] leading-[20px] font-medium hidden md:flex'>
          <a href='#notes' className='text-white'>
            About
          </a>
          <a href='#features'>Features</a>
          <a href='#contact'>FAQs</a>
          <a href='#contact'>Contact</a>
        </div>
        <div className='flex md:gap-2 items-center'>
          <button className='rounded-full bg-white group flex items-center p-1 w-39 cursor-pointer group relative transition-colors duration-200 scale-75 md:scale-100'>
            <span className='rounded-full bg-black w-fit h-full p-2 group-hover:!w-full z-0'>
              <ShoppingCart className='scale-100 group-hover:scale-90 text-[#00BB77] text-xl' />
            </span>
            <p className='text-black group-hover:text-white text-[18px] leading-[26px] font-medium absolute right-0 top-1/2 -translate-1/2 z-50'>
              Try Now
            </p>
          </button>
          <Menu className='block md:hidden' />
        </div>
      </header>
    </>
  );
};

export default Header;

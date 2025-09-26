import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const headRef = useRef<HTMLSpanElement>(null);
  const head2Ref = useRef<HTMLSpanElement>(null);
  const heroImg = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!headRef.current) return;
    gsap.fromTo(
      headRef.current,
      { autoAlpha: 0, x: 100 },
      { autoAlpha: 1, x: 0, duration: 1 }
    );
    if (!head2Ref.current) return;
    gsap.fromTo(
      head2Ref.current,
      { autoAlpha: 0, x: -100 },
      { autoAlpha: 1, x: 0, duration: 1 }
    );
    if (!heroImg.current) return;
    gsap.fromTo(
      heroImg.current,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <>
      <div className='h-screen bg-hero flex flex-col items-center justify-center pt-40 md:!pt-0 pb-20 overflow-x-hidden'>
        <h1 className=' pb-20 z-50 flex flex-col w-11/12 md:w-[70%] -mt-22'>
          <span
            ref={headRef}
            className='text-[48px] md:text-[80px] font-medium flex-start flex text-left'
          >
            Note Taking{' '}
          </span>
          <br className='hidden md:block' />
          <span
            ref={head2Ref}
            className='text-[48px] md:text-[80px] font-medium text-[#00BB77] md:justify-end flex'
          >
            Redefined
          </span>
        </h1>
        <div className='mx-auto relative md:!absolute bottom-8 scale-200 md:!scale-none left-20 md:!left-auto pt-10 md:!pt-0'>
          <img ref={heroImg} src='/octopus.png' alt='CirriNote' />
        </div>
      </div>
    </>
  );
};

export default Hero;

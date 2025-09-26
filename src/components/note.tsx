import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Note = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const noteImg = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { autoAlpha: 0, x: -200 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      if (text2Ref.current) {
        gsap.fromTo(
          text2Ref.current,
          { autoAlpha: 0, x: 200 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text2Ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      if (noteImg.current) {
        gsap.fromTo(
          noteImg.current,
          { autoAlpha: 0, y: -500 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'bounce.out',
            scrollTrigger: {
              trigger: noteImg.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      id='notes'
      ref={sectionRef}
      className='bg-[#ffffff00] h-screen md:h-[calc(100vh+9rem)] flex flex-col items-center justify-center -z-10 sticky top-0'
    >
      <p
        className='text-center text-[24px] md:text-[48px] leading-[28px] md:leading-[52px] font-medium text-white'
        ref={textRef}
      >
        An extraordinary note <br /> for{' '}
        <span className='text-[#00BB77]'> makers, creators..</span>
      </p>
      <img src='./feat-icon.png' alt='' className='py-16' ref={noteImg} />
      <p
        className='text-center  text-[20px] leading-[28px] font-medium text-white'
        ref={text2Ref}
      >
        Creators around the planet use this <br className='block md:hidden' />{' '}
        app <br className='hidden md:block' /> for creating{' '}
        <span className='text-[#00BB77]'> magic</span>
      </p>
    </div>
  );
};

export default Note;

import { ArrowUpRight } from 'lucide-react';

export const FeatureCard = () => {
  return (
    <div className='w-full aspect-square 2xl:aspect-[calc(100/10)/7] rounded-2xl border-2 border-transparent hover:border-[#00BB77] p-9 md:p-12 flex flex-col justify-end bg-[#1C1C1C] hover:bg-transparent group relative flex-[0_0_90%] md:flex-1'>
      <span className='text-transparent group-hover:!text-[#00BB77] absolute top-1/2 right-1/2 group-hover:top-10 group-hover:right-10 scale-0 group-hover:scale-260 transition-all duration-200'>
        <ArrowUpRight />
      </span>
      <p className='text-[32px] leading-[36px] font-medium text-white text-left scale-100 group-hover:scale-95 transition-all duration-200'>
        Feature <br /> Name
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className='py-[120px] md:py-[250px] px-10 bg-black' id='features'>
      <div className='flex flex-col gap-8 overflow-x-scroll md:overflow-auto'>
        <div className='flex flex-col gap-4'>
          <span className='rounded-full text-black text-[14px] leading-[20px] bg-[#00BB77] w-fit py-1.5 px-2.5'>
            Whats the best
          </span>
          <p className='text-[48px] md:text-[80px] leading-[58px] md:leading-[88px] font-medium text-white w-fit'>
            Key Features
          </p>
          <p className='text-[20px] md:text-[22px] leading-[28px] font-medium text-[#FFFFFF80] text-left'>
            We’re proud to announce with the features{' '}
            <br className='hidden md:block' /> that empower creatives every day.
          </p>
        </div>
        <div className='flex md:hidden gap-4 overflow-x-scroll'>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
        <div className='grid-cols-3 grid-rows-2 gap-4 hidden md:grid'>
          <FeatureCard />
          <div></div>
          <FeatureCard />
          <div></div>
          <FeatureCard />
          <div></div>
        </div>
        <div className='grid grid-cols-[1fr_0] md:grid-cols-[2fr_1fr] grid-rows-1 gap-4'>
          <p className='text-[24px] md:text-[48px] leading-[29px] md:leading-[52px] text-[#FFFFFF80] text-left my-auto'>
            Creative people worldwide rely <br className='hidden md:block' /> on
            this app to craft ideas <br className='hidden md:block' /> into{' '}
            <span className='text-[#00BB77]'>digital magic.</span>
          </p>
          <div className='hidden md:block'>
            <FeatureCard />
          </div>
          <div></div>
        </div>
        <div className='grid-cols-3 grid-rows-1 gap-4 hidden md:grid'>
          <FeatureCard />
          <FeatureCard />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Features;

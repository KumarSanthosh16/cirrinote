import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className='py-20 px-10 bg-[#1C1C1C] border-t-[#FFFFFF1A] border-t'
      id='contact'
    >
      <div className='grid grid-rows-[1fr_3fr_1fr_1fr] md:grid-cols-2 md:grid-rows-2 md:gap-10'>
        <img src='/cirrinote-logo.png' alt='Cirrinote' />
        <div className='flex gap-3 md:justify-end py-10 md:py-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            id='Linkedin-Logo--Streamline-Logos'
            height='24'
            width='24'
          >
            <desc>Linkedin Logo Streamline Icon: https://streamlinehq.com</desc>
            <path
              fill='#fff'
              fillRule='evenodd'
              d='M3.5 6a2.5 2.5 0 1 0 0 -5 2.5 2.5 0 0 0 0 5ZM6 23V8H1v15h5ZM8 8h4.5v1.946C13.216 9.005 14.746 8 17.5 8c4.33 0 5.5 4.32 5.5 7v8h-5v-8c0 -1 -0.5 -3 -2.5 -3 -1.42 0 -2.42 1.008 -3 1.951V23H8V8Z'
              clipRule='evenodd'
              strokeWidth='1'
            ></path>
          </svg>
          <Instagram />
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            id='X--Streamline-Simple-Icons'
            height={22}
            width={22}
          >
            <desc>
              {'\n    X Streamline Icon: https://streamlinehq.com\n  '}
            </desc>
            <title>{'X'}</title>
            <path
              d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
              fill='#ffffff'
              strokeWidth={1}
            />
          </svg>
        </div>
        <p className='text-left text-[#FFFFFF80]'>© CirriNote 2025</p>
        <p className='text-left md:text-right text-[#FFFFFF80]'>
          Crafted with passion by CreoWis
        </p>
      </div>
    </footer>
  );
};
export default Footer;

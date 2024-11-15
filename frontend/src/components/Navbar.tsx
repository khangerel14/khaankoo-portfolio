'use client';
import Home from '@/app/page';
import { Icon } from '@/images';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();

  const about = () => {
    router.push('/home');
  };
  const skills = () => {
    router.push('/skills');
  };
  const projects = () => {
    router.push('/projects');
  };
  const contactMe = () => {
    router.push('/contact');
  };
  return (
    <div className='my-5 text-xl'>
      <div className='flex mx-auto max-w-screen-xl justify-between items-center fixed inset-x-0 top-0 bg-white z-20 h-20'>
        <div className='flex gap-3 items-center font-bold'>
          <Icon />
          <button onClick={about}>Khaankoo</button>
        </div>
        <div className='flex gap-4 items-center font-medium'>
          <a
            className='hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition'
            onClick={about}
          >
            About
          </a>
          <a
            className='hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition'
            onClick={skills}
          >
            Skills
          </a>
          <a
            className='hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition'
            onClick={projects}
          >
            Projects
          </a>
          <a
            className='hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition'
            onClick={contactMe}
          >
            Contact me
          </a>
          <a
            className='hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition'
            href={
              'https://ecommerce-team-4.my.canva.site/original-size-gray-minimalist-clean-professional-cv-resume'
            }
          >
            Resume
          </a>
          <a
            className='transform p-1.5 px-3 rounded-full button-80'
            href={'https://github.com/khangerel14'}
          >
            Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

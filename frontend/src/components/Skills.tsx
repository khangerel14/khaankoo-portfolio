import Left from '@/utils/Left';
import Right from '@/utils/Right';

export const Skills = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-xl items-center my-24 mt-44 gap-20'>
      <div>
        <h1 className='text-4xl font-semibold'>Technology Stack</h1>
      </div>
      <div className='flex items-center gap-20 w-full'>
        <div className='w-1/2 h-fit rounded-2xl card flex flex-wrap justify-between'>
          <Left />
        </div>
        <div className='w-1/2 h-fit rounded-2xl card flex flex-wrap justify-between'>
          <Right />
        </div>
      </div>
    </div>
  );
};

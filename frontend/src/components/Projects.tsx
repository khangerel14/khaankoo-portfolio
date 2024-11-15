import { Ecommerce, Calculator, Expense, Fooddeli, Todo, Blog } from '@/images';

const imageComponents: Record<string, () => JSX.Element> = {
  Ecommerce: Ecommerce,
  'Expense-tracker': Expense,
  Todo: Todo,
  Fooddeli: Fooddeli,
  Calculator: Calculator,
  Blog: Blog,
};

const mockData = [
  {
    title: 'E-commerce',
    description:
      'It lets people buy your goods online and gives you a place to advertise your business. And it doesnt require customers to spend too much time.',
    tech: 'Typescript, Javascript, React.js, TailwindCSS, Auth0',
  },
  {
    title: 'Blog Post',
    description:
      'The biggest benefits of a blog are boosting your website SEO, reaching your target market, and developing trust with your audience. These blogging results give you a higher chance of conversions, and building a sustainable business.',
    tech: 'Javascript, React.js, TailwindCSS',
  },
  {
    title: 'Expense-tracker',
    description:
      'Savings is a guarantee. This website will help you calculate, record and track your money to build savings and save money.',
    tech: 'Javascript, React.js, TailwindCSS, Chart.js, daisy.ui, Auth0',
  },
  {
    title: 'Todo-list',
    description:
      'People tend to forget many things in their busy lives. but by using this website, you wont forget anything.',
    tech: 'Typescript, Javascript, React.js, TailwindCSS',
  },
  {
    title: 'Food-delivery',
    description:
      'Ordering food for delivery is very easy in todays busy world. And Food-delivery will help you Ewerytime, Ewerywhere.',
    tech: 'Typescript, Javascript, React.js, Google maps, TailwindCSS, Auth0',
  },
  {
    title: 'Calculator',
    description:
      'Using a calculator can save time, increase accuracy, improve efficiency, and simplify complex calculations. It is especially critical for financial planning and can enhance learning by allowing students to focus on the underlying concepts.',
    tech: 'HTML5, CSS, Javascript',
  },
];

export const Projects = () => {
  return (
    <div className='flex flex-col max-w-screen-xl mx-auto items-center my-40 gap-20'>
      <div>
        <h1 className='text-4xl font-semibold'>Projects</h1>
      </div>
      <div className='flex w-full items-center justify-between flex-wrap gap-10'>
        {mockData.map((e, index: any) => {
          return (
            <div
              className='w-[400px] h-60 bg-white rounded-xl drop-shadow-lg p-4 flex flex-col justify-between items-center hover:scale-110 transition ease-in-out duration-300 hover:border border-'
              key={index}
            >
              <h1 className='font-semibold text-2xl'>{e.title}</h1>
              <p>{e.description}</p>
              <p>{e.tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

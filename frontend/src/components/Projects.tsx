import { Ecommerce, Calculator, Expense, Fooddeli, Todo, Blog } from "@/images";

const imageComponents: Record<string, () => JSX.Element> = {
    Ecommerce: Ecommerce,
    "Expense-tracker": Expense,
    Todo: Todo,
    Fooddeli: Fooddeli,
    Calculator: Calculator,
    Blog: Blog
};

const mockData = [
    {
        url: 'Ecommerce',
        title: 'E-commerce',
        description: 'It lets people buy your goods online and gives you a place to advertise your business. And it doesnt require customers to spend too much time.',
        tech: 'Typescript, Javascript, React.js, TailwindCSS',
        link: 'https://e-commerce-team-4.vercel.app/?fbclid=IwZXh0bgNhZW0CMTAAAR0RPWODEDZLCTRFtU-D5tuOhrSp6GK4bJpsqvDIGKCL8pKbrZvLyzPBlSA_aem_Ab08_jqbZIc0fhuGmE5tyDXiEHd1ptb1Ht2tichh7yOcTF26fov2mEHca8ZLNK57I3udYyvdze7t6cwDKYXq7E5m'
    },
    {
        url: 'Blog',
        title: 'Blog Post',
        description: 'The biggest benefits of a blog are boosting your website SEO, reaching your target market, and developing trust with your audience. These blogging results give you a higher chance of conversions, meeting your business goals, and building a sustainable business.',
        tech: 'Javascript, React.js, TailwindCSS',
        link: 'https://blog-post-puce-one.vercel.app/'
    },
    {
        url: 'Expense-tracker',
        title: 'Expense-tracker',
        description: 'Savings is a guarantee. This website will help you calculate, record and track your money to build savings and save money.',
        tech: 'Javascript, React.js, TailwindCSS, Chart.js, daisy.ui',
        link: 'https://expense-track-v3.vercel.app/dashboard'
    },
    {
        url: 'Todo',
        title: 'Todo-list',
        description: 'People tend to forget many things in their busy lives. but by using this website, you wont forget anything.',
        tech: 'Typescript, Javascript, React.js, TailwindCSS',
        link: 'https://todo-react-one-nu.vercel.app/dashboard'
    },
    {
        url: 'Fooddeli',
        title: 'Food-delivery',
        description: 'Ordering food for delivery is very easy in todays busy world. And Food-delivery will help you Ewerytime, Ewerywhere.',
        tech: 'Typescript, Javascript, React.js, Google maps, TailwindCSS',
        link: 'https://food-delivery-blond-gamma.vercel.app/dashboard'
    },
    {
        url: 'Calculator',
        title: 'Calculator',
        description: 'Using a calculator can save time, increase accuracy, improve efficiency, and simplify complex calculations. It is especially critical for financial planning and can enhance learning by allowing students to focus on the underlying concepts.',
        tech: 'HTML5, CSS, Javascript',
        link: 'https://calculator-six-rho-19.vercel.app/'
    }
];

export const Projects = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center my-48 gap-32">
        <div>
            <h1 className="text-4xl font-semibold">Projects</h1>
        </div>
        <div className="flex w-full items-center justify-between flex-col gap-20">
            {
                mockData.map((e, index) => {
                    const ImageComponent = imageComponents[e.url];
                    return (
                        <div className="flex h-[400px] shadow-2xl rounded-lg" key={index}>
                            <a href={e.link} className="h-[470px]">
                                {ImageComponent && <ImageComponent />}
                            </a>
                            <div className="flex w-[470px] rounded-r-lg p-8 gap-5 flex-col justify-center" style={{background: e.title === 'Food-delivery' ? '#A7DCA5' : e.title === 'Todo-list' ? '#5865F2' : e.title === 'Expense-tracker' ? '#FFF8E7' : e.title === 'Blog Post' ? '#FBD5AB' : e.title === 'Calculator' ? '#FAAFBA' : e.title === 'E-commerce' ? '#C4B5E0' : ''}}>
                                <h1>{e.title}</h1>
                                <p>{e.description}</p>
                                <p>{e.tech}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  );
};

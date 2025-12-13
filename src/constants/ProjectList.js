import cafe from "../assets/projects/cafe.png";
import food from "../assets/projects/food.png";
import portfolio from "../assets/projects/portfolio.png";

export const ProjectList = [
    {
        id: 1,
        name: "Cafe website",
        description:
            "A modern and responsive cafe website built with HTML, CSS, and JavaScript, featuring an elegant design, interactive menu, and smooth navigation. It highlights front-end creativity with glowing buttons and a user-friendly layout.",
        img: cafe,
        
        tech: ["HTML", "CSS", "Javascript"],
        demo: "https://cafe-website-zeta.vercel.app/",
    },
    {
        id: 2,
        name: "Food-delivery website",
        description:
            "A responsive food delivery website built with React.js, featuring an attractive UI, dynamic menu display, and smooth cart functionality. It allows users to browse dishes, add items to the cart, and place orders easily — delivering a seamless and modern online food ordering experience.",
        img: food,
        
        tech: [
            "React.js",
            "Javascript",
            "css",
        ],
     
        demo: "https://food-delivery-react-bice.vercel.app/",
    },
    {
        id: 3,
        name: "personal portfolio",
        description:
            "A modern, dark-themed personal portfolio built with React.js and Tailwind CSS, showcasing my projects, skills, and contact section. Features smooth animations, responsive design, and clear navigation, providing an engaging and interactive user experience.",
        img: portfolio,
        
        tech: ["React.js", "Tailwind CSS"],
       
        demo: "https://portfolio-umber-nine-49.vercel.app/",
    },
];

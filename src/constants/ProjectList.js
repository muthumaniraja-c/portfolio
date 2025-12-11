import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import notion from "../assets/projects/notion.png";
import byte from "../assets/projects/byte.png";
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
       
        demo: "https://hire-quotient-notion-clone-aashish.vercel.app/",
    },
    {
        id: 4,
        name: "Discord UI",
        description:
            "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
        img: discord,
       
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/discord-clone",
        demo: "https://discord-aashish.vercel.app/",
    },
    {
        id: 5,
        name: "Whisper Wave",
        description:
            "The Whisper Wave built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: authorisation,
       
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "https://github.com/aashish-dhiman/Authorisation",
        demo: null,
    },
    {
        id: 6,
        name: "Keeper - Keep Your Notes",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: keeper,
      
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/Keeper-keep-your-notes",
        demo: "https://keeper-aashish.netlify.app/",
    },
];

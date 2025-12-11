import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const frontendSkills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", img: "https://th.bing.com/th/id/R.76984d489016bb78c8c347e661bb8e94?rik=v6h54jhMOjGWxg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a76492bd73a4af5c5d4fb9.png&ehk=CCD7CF%2fzwR7i%2bBDVkut8Jbuzx%2bibavojdYkrIJG2PIc%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Tailwind CSS", img: "https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png" },
];

const backendSkills = [
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253692/django-icon-icon-md.png" },
  { name: "Rest Api", img: "https://www.iexcel-technologies.com/wp-content/uploads/2020/03/rest-api-logo.png" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", img: "https://logonoid.com/images/postgresql-logo.png" },
];

const SkillIcon = ({ skill, color }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.15 }}
    >
      <img src={skill.img} alt={skill.name} className="w-10 h-10 mb-2" />
      {hover && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r ${color} text-white text-xs font-medium py-1 px-3 rounded-md shadow-lg pointer-events-none`}
        >
          {skill.name}
        </motion.div>
      )}
    </motion.div>
  );
};

const Skill = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const boxVariants = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -200 : 200 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 12, duration: 0.8 } },
  });

  return (
    <section id="skills" className="min-h-screen py-16 px-4 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto mt-16">
        {}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-2">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {}
          <motion.div
            variants={boxVariants("left")}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.7), 0 0 50px rgba(59,130,246,0.5)",
              transition: { type: "spring", stiffness: 120, damping: 12 },
            }}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Frontend Skills</h3>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {frontendSkills.map((skill, i) => (
                <SkillIcon key={i} skill={skill} color="from-blue-500 to-blue-700" />
              ))}
            </div>
          </motion.div>

          {}
          <motion.div
            variants={boxVariants("right")}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(16,185,129,0.7), 0 0 50px rgba(16,185,129,0.5)",
              transition: { type: "spring", stiffness: 120, damping: 12 },
            }}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Backend Skills</h3>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {backendSkills.map((skill, i) => (
                <SkillIcon key={i} skill={skill} color="from-green-400 to-green-600" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

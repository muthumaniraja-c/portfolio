import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className="sm:px-8 py-[80px]" id="projects">
            {}
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center mb-10"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Latest Projects
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>

            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {ProjectList.slice(0, 3).map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#1f1f1f] border border-gray-700 rounded-xl p-5 text-textWhite hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ease-in-out"
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            className="rounded-md mb-4 w-full h-48 object-cover"
                        />
                        <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-4">
                            {project.description}
                        </p>

                        {}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300"
                            >
                                Live Demo
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

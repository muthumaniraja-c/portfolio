import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
    const refHeading = useRef(null);
    const scrollRef = useRef(null);
    const inViewHeading = useInView(refHeading);
    
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    // Check scroll position
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-[80px] overflow-hidden" id="projects">
            {/* Section Heading */}
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-4 items-center justify-between mb-10 px-4 sm:px-8"
            >
                <div className="flex gap-4 items-center flex-grow">
                    <h3 className="text-textWhite text-2xl sm:text-3xl lg:text-5xl font-[800]">
                        Latest Projects
                    </h3>
                    <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite hidden sm:block"></div>
                </div>

                {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
                <div className="hidden sm:flex gap-2">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`p-3 rounded-full transition-all duration-300 ${
                            canScrollLeft
                                ? "bg-gray-800 text-white hover:bg-purple-700"
                                : "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`p-3 rounded-full transition-all duration-300 ${
                            canScrollRight
                                ? "bg-gray-800 text-white hover:bg-purple-700"
                                : "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </motion.div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 sm:gap-6 lg:gap-10 overflow-x-auto pb-8 px-4 sm:px-8 scroll-smooth snap-x snap-mandatory"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch", // Smooth scroll on iOS
                }}
            >
                {ProjectList.map((project, i) => (
                    <motion.div
                        key={project.id || i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="
                            w-[85vw]
                            sm:w-[calc(50vw-3rem)]
                            lg:w-[calc(33.33vw-4rem)]
                            flex-shrink-0
                            snap-center
                            bg-[#1f1f1f]
                            border border-gray-700
                            rounded-xl
                            p-4 sm:p-5
                            text-textWhite
                            hover:shadow-2xl
                            hover:shadow-purple-500/20
                            transition-all duration-500 ease-in-out
                        "
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            loading="lazy"
                            className="rounded-md mb-4 w-full h-40 sm:h-48 object-cover"
                        />
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">
                            {project.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-3 sm:line-clamp-4">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                            {project.tech.slice(0, 4).map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] sm:text-xs bg-gray-800 text-gray-300 px-2 sm:px-3 py-1 rounded-full border border-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="text-[10px] sm:text-xs text-gray-400 px-2 py-1">
                                    +{project.tech.length - 4} more
                                </span>
                            )}
                        </div>

                        {/* Demo Button */}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 sm:px-5 py-2 text-sm sm:text-base bg-purple-700 text-white rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300"
                            >
                                Live Demo
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center gap-1 mt-4 sm:hidden">
                <span className="text-gray-400 text-xs">← Swipe to see more →</span>
            </div>
        </section>
    );
};

export default Projects;
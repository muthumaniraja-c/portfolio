import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, Suspense, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Loading from "./Loading";

const HeroSection = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true });

    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (inViewContent) {
            controls.start({
                x: ["0%", "-100%"],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                },
            });
        }
    }, [controls, inViewContent]);

    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else if (inViewContent) {
            controls.start({
                x: ["0%", "-100%"],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                },
            });
        }
    }, [isHovered, controls, inViewContent]);

    return (
        <section
            className="w-full min-h-screen overflow-hidden flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-20 lg:py-16"
            id="intro"
        >
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 sm:gap-12 lg:gap-16 w-full max-w-[1200px]">

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-1 lg:order-2"
                >
                    <Suspense fallback={<Loading />}>
                        <motion.img
                            src="/images/heroImg.png"
                            alt="Profile"
                            loading="lazy"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full object-cover shadow-[0_0_60px_rgba(49,130,206,0.5)] hover:shadow-[0_0_100px_rgba(49,130,206,0.8)] transition-shadow duration-500"
                        />
                    </Suspense>
                </motion.div>

                {/* TEXT CONTENT */}
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full lg:max-w-[600px]"
                >
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-white text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[56px] font-[700] leading-[1.2] sm:leading-[1.25]"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-heading">Muthumaniraja</span>,{" "}
                        a <span className="text-heading">passionate</span>{" "}
                        Web Developer.
                    </motion.h1>

                    {/* FIXED MARQUEE */}
                    <div
                        className="relative w-full overflow-hidden mt-6 sm:mt-7 py-3"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            animate={controls}
                            className="flex whitespace-nowrap w-max"
                        >
                            {[1, 2, 3, 4].map((_, index) => (
                                <span
                                    key={index}
                                    className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-[600] text-transparent bg-clip-text px-8"
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
                                    }}
                                >
                                    🚀 I'm a Full Stack Python Developer — I build modern, responsive web apps 🚀
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 flex-row mt-10 sm:mt-12"
                    >
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={1000}
                            className="px-6 sm:px-10 md:px-10 py-4 sm:py-2 cursor-pointer rounded-full bg-white hover:bg-gray-200 text-black text-[18px] sm:text-[18px] md:text-[19px] font-[700] text-center transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Hire Me
                        </ScrollLink>

                        <a
                            href="/muthu resume-white.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="px-6 sm:px-10 md:px-10 py-4 sm:py-2 rounded-full bg-transparent border-2 border-white text-white text-[18px] sm:text-[18px] md:text-[19px] font-[600] text-center transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
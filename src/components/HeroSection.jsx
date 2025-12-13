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
                x: ["0%", "-50%"],
                transition: {
                    x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
                },
            });
        }
    }, [controls, inViewContent]);

    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else if (inViewContent) {
            controls.start({
                x: ["0%", "-50%"],
                transition: {
                    x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
                },
            });
        }
    }, [isHovered, controls, inViewContent]);

    return (
        <section
            className="
                w-full
                min-h-screen
                flex items-center justify-center
                px-4 sm:px-6 md:px-8 lg:px-12
                py-16 sm:py-20 lg:py-24
            "
            id="intro"
        >
            <div
                className="
                    flex
                    flex-col lg:flex-row
                    items-center
                    justify-center lg:justify-between
                    gap-6 sm:gap-8 lg:gap-12
                    w-full
                    max-w-[1200px]
                "
            >
                {/* ==================== */}
                {/* IMAGE SECTION        */}
                {/* ==================== */}
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
                            className="
                                w-[320px] h-[320px]
                                sm:w-[300px] sm:h-[300px]
                                md:w-[320px] md:h-[320px]
                                lg:w-[350px] lg:h-[350px]
                                xl:w-[400px] xl:h-[400px]
                                rounded-full
                                object-cover
                                shadow-[0_0_80px_rgba(49,130,206,0.6)]
                                hover:shadow-[0_0_120px_rgba(49,130,206,0.9)]
                                lg:shadow-[0_0_50px_rgba(49,130,206,0.5)]
                                lg:hover:shadow-[0_0_80px_rgba(49,130,206,0.8)]
                                transition-shadow duration-500
                            "
                        />
                    </Suspense>
                </motion.div>

                {/* ==================== */}
                {/* TEXT CONTENT         */}
                {/* ==================== */}
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
                        flex flex-col
                        items-center lg:items-start
                        text-center lg:text-left
                        order-2 lg:order-1
                        w-full
                        lg:max-w-[600px]
                    "
                >
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="
                            text-white
                            text-[36px]
                            sm:text-[32px]
                            md:text-[38px]
                            lg:text-[48px]
                            xl:text-[60px]
                            font-[800]
                            sm:font-[700]
                            leading-[1.2]
                            lg:leading-normal
                        "
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-heading">Muthumaniraja</span>,{" "}
                        a <span className="text-heading">passionate</span>{" "}
                        Web Developer.
                    </motion.h1>

                    {/* Marquee */}
                    <div
                        className="
                            relative
                            w-full
                            overflow-hidden
                            mt-6 sm:mt-4 lg:mt-3
                            py-3 sm:py-2
                        "
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            animate={controls}
                            className="flex whitespace-nowrap"
                        >
                            {[1, 2].map((_, index) => (
                                <span
                                    key={index}
                                    className="
                                        text-[22px]
                                        sm:text-[18px]
                                        md:text-[20px]
                                        lg:text-[24px]
                                        xl:text-[24px]
                                        font-[600]
                                        text-transparent
                                        bg-clip-text
                                        mx-4
                                    "
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
                        className="
                            flex
                            items-center
                            justify-center lg:justify-start
                            gap-5 sm:gap-4 lg:gap-4
                            flex-row
                            mt-10 sm:mt-8 lg:mt-8
                        "
                    >
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={1000}
                            className="
                                px-10 sm:px-6 lg:px-6
                                py-4 sm:py-3 lg:py-3
                                cursor-pointer
                                rounded-full
                                bg-white
                                hover:bg-gray-200
                                text-black
                                text-[20px] sm:text-[16px] lg:text-lg
                                font-[700]
                                text-center
                                transition-all duration-300
                                hover:scale-105
                                shadow-xl sm:shadow-lg
                            "
                        >
                            Hire Me
                        </ScrollLink>

                        <a
                            href="/muthu resume-white.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="
                                px-10 sm:px-6 lg:px-6
                                py-4 sm:py-3 lg:py-3
                                rounded-full
                                bg-transparent
                                border-[3px] sm:border-2 lg:border-2
                                border-white
                                text-white
                                text-[20px] sm:text-[16px] lg:text-lg
                                font-[700] sm:font-[600]
                                text-center
                                transition-all duration-300
                                hover:bg-white
                                hover:text-black
                                hover:scale-105
                            "
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
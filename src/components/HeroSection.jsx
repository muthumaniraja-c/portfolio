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
        x: ["100%", "-100%"],
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" },
        },
      });
    }
  }, [controls, inViewContent]);

  
  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["100%", "-100%"],
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" },
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section
      className="sm:px-8 min-h-screen h-screen overflow-hidden flex items-center justify-center pt-[110px] sm:pt-[120px]"
      id="intro"
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center gap-8 w-full max-w-[1200px]">
        {}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={inViewContent ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inViewContent ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white mb-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[700] lg:leading-normal"
          >
            Hi, I&apos;m <span className="text-heading">Muthumaniraja</span>, a{" "}
            <span className="text-heading">passionate</span> Software Developer.
          </motion.h1>

          {}
          <div
            className="relative w-full overflow-hidden mt-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.p
              animate={controls}
              className="text-lg md:text-2xl font-[600] text-transparent bg-clip-text whitespace-nowrap"
              style={{
                backgroundImage: "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
              }}
            >
              🚀 I’m a Full Stack Python Developer — I build modern, responsive web apps 🚀
            </motion.p>
          </div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inViewContent ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 flex-col sm:flex-row mt-8"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="px-6 py-3 cursor-pointer w-full sm:w-fit rounded-full bg-white hover:bg-gray-300 text-black text-lg font-[700] text-center transition-transform duration-300 hover:scale-105"
            >
              Hire Me
            </ScrollLink>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent border-white border-2 text-white text-center hover:bg-darkHover transition-transform duration-300 hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8, filter: "blur(6px)" }}
          animate={inViewContent ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-5 flex justify-center sm:justify-end w-full"
        >
          <Suspense fallback={<Loading />}>
            <motion.img
              src="/images/heroImg.png"
              alt="Profile"
              loading="lazy"
              className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]"
            />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

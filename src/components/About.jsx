import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";

const About = () => {
  const [tab, setTab] = useState("education"); 
  const [isPending, startTransition] = useTransition();
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading, { once: true });
  const inViewContent = useInView(refContent, { once: true });

  const selectTab = (nextTab) => {
    startTransition(() => setTab(nextTab));
  };

  const headingVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.8, filter: "blur(6px)" },
    hiddenRight: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="sm:px-8 py-[80px] overflow-hidden" id="about">
      {}
      <motion.div
        ref={refHeading}
        variants={headingVariants}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center mb-10"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          About Me
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>

      {}
      <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {}
        <motion.div
          ref={refContent}
          variants={contentVariants}
          initial="hiddenLeft"
          animate={inViewContent ? "visible" : "hiddenLeft"}
          transition={{ duration: 0.8 }}
          className="flex-1 md:max-w-[40%] sm:mt-10 flex justify-center md:justify-start"
        >
          <Suspense fallback={<Loading />}>
            <img
              src="/images/muthu.jpg"
              alt="about"
              loading="lazy"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
            />
          </Suspense>
        </motion.div>

        {}
        <motion.div
          ref={refContent}
          variants={contentVariants}
          initial="hiddenRight"
          animate={inViewContent ? "visible" : "hiddenRight"}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
            Hi! I’m <strong>Muthumaniraja</strong>, a Full Stack Python Developer
            passionate about creating web applications that are both functional
            and visually appealing. I specialize in <strong>Python,Django,React.js
            and MySQl</strong>.
            <br /><br />
            I love exploring new technologies and applying them to solve
            real-world problems. With a focus on clean code and smooth user
            experiences, I aim to deliver projects that make an impact.
            <br/> When I’m
            not coding, you’ll find me learning, experimenting, and finding
            inspiration for my next project.
          </p>

          {}
          <div className="flex flex-row justify-start gap-6 pl-4 mt-4">
            <TabbedComponent
              selectTab={() => selectTab("education")}
              active={tab === "education"}
            >
              Education
            </TabbedComponent>
            <TabbedComponent
              selectTab={() => selectTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabbedComponent>
          </div>

          {}
          <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
            {tab === "skills" ? (
              Skills?.map((skill, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={skillVariants}
                  className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                >
                  <img src={skill.img} alt={skill.description} />
                  <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                    {skill.description}
                  </span>
                </motion.div>
              ))
            ) : (
              <ul className="list-disc pl-2 space-y-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Coimbatore Institute Of Engineering And Technology
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite"></div>
                    <span>
                      <p>
                        Bachelor of Engineering in Electrical & Electronics
                        Engineering
                      </p>
                      <span>2021-2025</span>
                    </span>
                  </div>
                </motion.li>
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

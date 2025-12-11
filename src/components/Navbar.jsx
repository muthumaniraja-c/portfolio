import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { MenuItems } from "../constants/MenuItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-30 bg-bgDark shadow-md"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-between px-8 py-6 mx-auto bg-bgDark text-textWhite"
      >
        {}
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          className="min-w-[150px] cursor-pointer font-[700] text-lg sm:text-xl tracking-wide"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Muthu
          </motion.span>
        </ScrollLink>

        {}
        <motion.span
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-[22px] cursor-pointer"
          onClick={() => setMobileView(!mobileView)}
        >
          <SiEbox />
        </motion.span>

        {}
        <AnimatePresence>
          {mobileView && (
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -300 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 flex flex-col bg-bgDark w-full min-h-screen"
            >
              <div className="flex flex-col md:hidden bg-bgDark relative p-10">
                {}
                <motion.span
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[62px] right-12 text-[24px] cursor-pointer"
                  onClick={() => setMobileView(false)}
                >
                  <AiFillCloseCircle />
                </motion.span>

                {}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4 p-6 border-b-white border-b-2 text-[22px]"
                >
                  <a
                    href="www.linkedin.com/in/muthumaniraja"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://github.com/muthumaniraja-c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a href="mailto:muthumaniraja.c@gmail.com">
                    <HiMailOpen />
                  </a>
                </motion.div>

                {}
                <ul className="flex flex-col items-center justify-between p-5 gap-5 relative">
                  {MenuItems?.map((menuItem, index) => (
                    <motion.li
                      key={menuItem.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ScrollLink
                        to={menuItem.url}
                        smooth={true}
                        duration={800}
                        onClick={() => setMobileView(false)}
                        className="relative cursor-pointer text-[18px] font-[500] hover:text-accent transition-all after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {menuItem.name}
                      </ScrollLink>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow bg-black/40 backdrop-blur-sm w-full"
                onClick={() => setMobileView(false)}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {}
        <div className="hidden md:block -ml-8">
          <ul className="flex items-center justify-between gap-6 relative">
            {MenuItems?.map((menuItem, index) => (
              <motion.li
                key={menuItem.id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ScrollLink
                  to={menuItem.url}
                  smooth={true}
                  duration={800}
                  className="relative cursor-pointer text-[18px] font-[500] hover:text-accent after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {menuItem.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {}
        <div className="hidden md:flex items-center justify-between gap-4 text-[24px]">
          {[
            {
              href: "https://www.linkedin.com/in/muthumaniraja-c-514376238/",
              icon: <BsLinkedin />,
            },
            {
              href: "https://github.com/muthumaniraja-c",
              icon: <BsGithub />,
            },
            {
              href: "mailto:muthumaniraja.c@gmail.com",
              icon: <HiMailOpen />,
            },
          ].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

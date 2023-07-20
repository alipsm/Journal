import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import { dotin_nav_logo } from "@/public";
// import { ImageContainer } from "@/public";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
//lg:h-[12vh]
  return (
    <div className="w-full shadow-navbarShadow h-20  sticky top-0 z-50 bg-white px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link href="/assets/parsamanesh.pdf" target="_blank">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="px-4 py-2 rounded-md text-dotin text-[14px] border border-dotin hover:bg-hoverColor duration-300">
            ورود/ ثبت نام
          </motion.button>
        </Link>

        <div className=" hidden mdl:inline-flex items-center gap-7">
          <ul className="flex flex-row-reverse text-[14px] gap-7">
            <Link
              href="#home"
              className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}>
                خانه
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}>
                فواید
              </motion.li>
            </Link>

            <Link
              href="#experience"
              className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}>
                برایه توسعه دهندگان
              </motion.li>
            </Link>

            <Link
              href="#project"
              className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}>
                امنیت
              </motion.li>
            </Link>
          </ul>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 ,delay:1}}
            
            >
            <Image
              src={dotin_nav_logo}
              alt="dotin logo"
              className=" w-12 h-full"
            />
          </motion.div>
        </div>

        {/* Small Icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full  scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}>
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    href="#about"
                    className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}>
                      About
                    </motion.li>
                  </Link>

                  <Link
                    href="#experience"
                    className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}>
                      Experience
                    </motion.li>
                  </Link>

                  <Link
                    href="#project"
                    className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}>
                      Project
                    </motion.li>
                  </Link>

                  <Link
                    href="#contact"
                    className="font-medium text-dropdown hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: "easeIn",
                      }}>
                      Contact
                    </motion.li>
                  </Link>
                </ul>

                <Link href="/assets/parsamanesh.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                    Resume
                  </motion.button>
                </Link>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeIn" }}
                  className="flex items-center justify-center w-full gap-4">
                  <Link href="https://github.com/alipsm" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/ali-parsamanesh"
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </Link>
                </motion.div>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, ease: "easeIn" }}
                  href="mailto:parsamanesh.it@gmail.com">
                  <p className="text-sm w-72 tracking-widest text-textGreen text-center mt-4">
                    Send a message!
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

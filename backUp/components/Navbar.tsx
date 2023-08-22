import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { dotin_nav_logo } from "@/public";
import { useRouter } from "next/router";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  // Check the availability of the token
  const [isToken, setIsToken] = useState(false)
  useEffect(() => {
    setIsToken(localStorage.getItem("token")?true:false);
  }, [])
  

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

  // hidden nav bar in dashboard route
  const hiddenRoutes = ["/dashboard"];
  if (hiddenRoutes.concat(router.pathname)) return null;

  return (
    <div className="w-full shadow-navbarShadow h-20  sticky top-0 z-50 bg-white px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link href={isToken ? "/dashboard" : "/accountOperation/login"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="px-4 py-2 rounded-md text-dotin text-[14px] border border-dotin hover:bg-hoverColor duration-300">
            {isToken?"داشبورد":"ورود/ ثبت نام"}
          </motion.button>
        </Link>

        <div className=" hidden mdl:inline-flex items-center gap-7">
          <ul className="flex flex-row-reverse text-[14px] gap-7">
            <Link
              href="#home"
              className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link"
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
              className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link"
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
              className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link"
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
              className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link"
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
            transition={{ duration: 0.4, delay: 1 }}>
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
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-button cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-button inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-button inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-button inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-white bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full  scrollbarHide bg-white flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-button cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col justify-end items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="/home"
                    className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link text-center"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}>
                      خانه
                    </motion.li>
                  </Link>

                  <Link
                    href="#about"
                    className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link text-center"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}>
                      فواید
                    </motion.li>
                  </Link>

                  <Link
                    href="#experience"
                    className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link text-center"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}>
                      برایه توسعه دهندگان
                    </motion.li>
                  </Link>

                  <Link
                    href="#project"
                    className="font-medium text-dropdown hover:text-button cursor-pointer duration-300 nav-link text-center"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}>
                      امنیت
                    </motion.li>
                  </Link>
                </ul>

                <Link href="/accountOperation/login" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="px-4 py-2 rounded-md text-dotin text-[14px] border border-dotin hover:bg-hoverColor duration-300">
                    ورود/ ثبت نام
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

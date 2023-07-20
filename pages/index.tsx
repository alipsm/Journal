import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticlesConfig from "../config/particle-config";
import Head from "next/head";
import { dotin_nav_logo } from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <div id="particle-background" className="w-full h-4/5 overflow-hidden">
      <Head>
        <title>Journal|home</title>
      </Head>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        init={particlesInit}
        loaded={particlesLoaded}
        //@ts-ignore
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      />
      <div className="absolute top-0 left-0 w-screen h-screen bg-[#ffffffe1] z-10">

      </div>


      <div className="relative  w-full h-full flex flex-col-reverse md:flex-row-reverse z-20 justify-evenly items-center lg:px-[5%]">
        <div className="flex md:h-full w-full md:w-1/2 text-dropdown z-10 flex-col justify-center items-center md:items-end">
          <h1 className=" dir_rtl text-2xl md:text-4xl lg:text-6xl">
            فقط چند خط <span className="animate-ping delay_100">.</span>
            <span className="animate-ping delay_200">.</span>
            <span className="animate-ping delay_300">.</span>
          </h1>
          <br />
          <i className=" text-xs md:text-sm lg:text-base">فقط با نوشتن چند خط در روز میتونی معجزه رو احساس کنی</i>
          <br />
          <div className="">
          <Link href="/journal-info" target="_blank" className="mr-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-4 py-2 rounded-lg text-white bg-button text-xs md:text-sm lg:text-[16px] border border-dotin hover:bg-buttonHover duration-300">
                چرا ژورنال؟
              </motion.button>
            </Link>
            <Link href="/login" target="_blank" className="ml-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-4 py-2 rounded-lg text-white bg-button text-xs md:text-sm lg:text-[16px] border border-dotin hover:bg-buttonHover duration-300">
                نوشتن
              </motion.button>
            </Link>

          </div>
        </div>
        <div className="w-1/3  z-10 flex justify-center items-center lg:w-1/2">
          <Image
            src={dotin_nav_logo}
            alt="dotin logo"
            className=" relative z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

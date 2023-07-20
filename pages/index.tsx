import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticlesConfig from "../config/particle-config";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { dotin_nav_logo } from "@/public";
import Image from "next/image";

const Home = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <div id="particle-background" className="w-full h-4/5">
      <Head>
        <title>Journal|home</title>
      </Head>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      />

      <div className="relative px-[5%] w-full h-full flex flex-row-reverse z-20 justify-evenly items-center">
        <div className="flex h-full w-1/2 text-[#fff] z-10 justify-end items-center">
          [content]
        </div>
        <div className="w-1/2  z-10 flex justify-center items-center">
          <Image src={dotin_nav_logo} alt="dotin logo"  className=" relative z-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;

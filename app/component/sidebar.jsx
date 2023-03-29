import Image from "next/image";
import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SiFreecodecamp } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";

import styles from "./layout.module.css";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className=" bg-slate-200 w-full sm:w-1/3 sm:h-screen sm:fixed">
      <div className=" text-slate-900 flex flex-col items-center p-10">
        <Image
          priority
          src="/images/KHL.jpg"
          alt="KHL profile picture"
          width={300}
          height={300}
          className={styles.profileImg}
        />
        <h1 className="mt-8 mb-6">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <h3 className="mb-2 mt-8">Contact Me</h3>
        <div className="flex flex-row gap-6 text-2xl ">
          <a href="https://twitter.com/mrplayertw">
            <BsTwitter />
          </a>
          <a href="https://github.com/KaHeng-Lei">
            <BsGithub />
          </a>
          <a href="https://www.freecodecamp.org/KaHengLei">
            <SiFreecodecamp />
          </a>
          <a href="https://codepen.io/kaheng-lei">
            <FaCodepen />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

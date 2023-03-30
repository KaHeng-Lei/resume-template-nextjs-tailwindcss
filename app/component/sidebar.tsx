import Image from "next/image";
import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SiFreecodecamp } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";

import styles from "./layout.module.css";

type SidebarProps = {
  data: {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
  };
};

const Sidebar = ({ data }: SidebarProps) => {
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
          <a href={contactLinks[0]}>
            <BsTwitter />
          </a>
          <a href={contactLinks[1]}>
            <BsGithub />
          </a>
          <a href={contactLinks[2]}>
            <SiFreecodecamp />
          </a>
          <a href={contactLinks[3]}>
            <FaCodepen />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

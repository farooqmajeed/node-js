"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from "react";


export default function Home() {
  const [darkMode, setDarMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>

    
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-white"> developedByFM</h1>
          <ul className="flex items-center">
            <li>
              {" "}
              <BsFillMoonStarsFill className="cursor-pointer text-2xl  dark:text-white" onClick={() =>setDarMode(!darkMode)} />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  dark:text-white"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className=" text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            {" "}
            Farooq Majeed
          </h2>
          <h3 className="text-2xl py-2  md:text-3xl  dark:text-white"> Full Stack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-600  md:text-xl max-w-lg mx-auto  dark:text-white">
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=" relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} fill />
        </div>
      </section>

      {/* section-2 */}

      <section>
        <div>
          <h1 className="text-3xl py-1  dark:text-white"> Service I offer</h1>
          <p className="text-md py-2 leading-8 text-gray-600  dark:text-white ">
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js. Install tailwindcss and its peer dependencies via
            npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js. Install{" "}
            <span className="text-teal-500 "> Agencies </span> and its peer
            dependencies via npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js.
          </p>
          <p className="text-md py-2 leading-8 text-gray-600  dark:text-white">
            Install <span className="text-teal-500"> Agencies </span> and its
            peer dependencies via npm, and then run the init command to generate
            both tailwind.config.js and postcss.config.js.
          </p>
        </div>

        <div className="lg:flex gap-10">
          <div className=" shadow-lg p-10 rounded-sm text-center">
            <Image
              className="text-center "
              src={design}
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              {" "}
              Beautiful Designs
            </h3>
            <p className="py-  dark:text-white">
              Creating elegant design suited for your need following core design
              theory for web
            </p>
            <h4 className="py-4 text-teal-600 "> Design Tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-white "> Photoshop </p>
            <p className="text-gray-800 py-1  dark:text-white"> Adobe XD</p>
            <p className="text-gray-800 py-1  dark:text-white"> Figma</p>
          </div>
          <div className="text-center shadow-lg p-10">
            <Image
              className="text-center "
              src={code}
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              {" "}
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Creating elegant design suited for your need following core design
              theory for web
            </p>
            <h4 className="py-4 text-teal-600"> Design Tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-white "> Photoshop </p>
            <p className="text-gray-800 py-1  dark:text-white"> Adobe XD</p>
            <p className="text-gray-800 py-1  dark:text-white"> Figma</p>
          </div>
          <div className="text-center shadow-lg p-10">
            <Image
              className="text-center "
              src={consulting}
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              {" "}
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Creating elegant design suited for your need following core design
              theory for web
            </p>
            <h4 className="py-4 text-teal-600"> Design Tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-white"> Photoshop </p>
            <p className="text-gray-800 py-1  dark:text-white"> Adobe XD</p>
            <p className="text-gray-800 py-1  dark:text-white"> Figma</p>
          </div>
        </div>
      </section>
      {/* active */}
      <section>
        <div>
          <h3 className=" text-3xl py-2  leading-8 text-gray-600  dark:text-white">
            {" "}
            Portofolio
          </h3>
          <p className="text-md py-2 leading-8 text-gray-600  dark:text-white">
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js. Install tailwindcss and its peer dependencies via
            npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js. Install{" "}
            <span className="text-teal-500"> Agencies </span> and its peer
            dependencies via npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js.
          </p>
          <p className="text-md py-2 leading-8 text-gray-600  dark:text-white">
            Install <span className="text-teal-500"> Agencies </span> and its
            peer dependencies via npm, and then run the init command to generate
            both tailwind.config.js and postcss.config.js.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
      </section>
    </main>
    </div>
  );
}

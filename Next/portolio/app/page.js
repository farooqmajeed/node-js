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

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons"> developedByFM</h1>
          <ul className="flex items-center">
            <li>
              {" "}
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className=" text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            {" "}
            Farooq Majeed
          </h2>
          <h3 className="text-2xl py-2"> Full Stack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-600">
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=" relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} fill />
        </div>
      </section>

      {/* section-2 */}

      <section>
        <div>
          <h1 className="text-3xl py-1"> Service I offer</h1>
          <p className="text-md py-2 leading-8 text-gray-600 ">
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js. Install tailwindcss and its peer dependencies via
            npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js. Install{" "}
            <span className="text-teal-500"> Agencies </span> and its peer
            dependencies via npm, and then run the init command to generate both
            tailwind.config.js and postcss.config.js.
          </p>
          <p className="text-md py-2 leading-8 text-gray-600 ">
            Install <span className="text-teal-500"> Agencies </span> and its
            peer dependencies via npm, and then run the init command to generate
            both tailwind.config.js and postcss.config.js.
          </p>
        </div>

        <div>
          <div className="text-center shadow-lg">
            <Image src={design} width={100} height={100} /> 
            <h3 className="text-lg font-medium pt-8 pb-2"> Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant design suited for your need following core design theory for web
            </p>
            <h4 className="py-4 text-teal-600"> Design Tools I use</h4>
            <p className="text-gray-800 py-1 "> Photoshop </p>
            <p className="text-gray-800 py-1 "> Adobe XD</p>
            <p className="text-gray-800 py-1 "> Figma</p>
          </div>
        </div>
      </section>
    </main>
  );
}

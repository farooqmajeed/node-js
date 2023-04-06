import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

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
        <div  >
          <h2> Farooq Majeed</h2>
          <h3> Full Stack Developer</h3>
          <p>
            Install tailwindcss and its peer dependencies via npm, and then run
            the init command to generate both tailwind.config.js and
            postcss.config.js.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3">
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div>
        <div>

        </div>
      </section>
    </main>
  );
}

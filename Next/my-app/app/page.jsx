// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "./page.module.css";

import Movies from "./movie";

// const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log("res", res);

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}

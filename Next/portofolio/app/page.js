import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsFillMoonStartsFill } from 'react-icons/bs'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className='min-h-screen'>
    <nav>
      <h1> developed  by</h1>
      <ul>
        <li> <BsFillMoonStartsFill /></li>
        <li>
          <a href='#'> Resume</a>
        </li>
      </ul>
    </nav>
      </section>
    </main>
  )
}

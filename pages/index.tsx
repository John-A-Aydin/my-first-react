import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <img src="./images/background.jpg" className="flex justify-center overflow-hidden min-h-full min-w-full"></img>
      <h1 className="flex justify-center items-center text-6xl font-semibold absolute top-1/4 text-gray-950 font-mono">John Aydin</h1>
    </div>
  );
}


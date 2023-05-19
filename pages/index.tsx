import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'


const inter = Inter({ subsets: ['latin'] })

// function Profile() {
//   return (
//     <img
//       src="./Appa.png"
//       alt="WHERE ARE MY PICS"
//     />
//   );
// }
// function Pics(filePath: string) {
//   return (
//     <img
//       src={filePath}
//       alt="Not found"
//     />
//   );
// }
// function Title() {
//   function handleClick() {
//     window.open("./files/resume.pdf");
//   }
//   return (
//     <h1
//       onClick={handleClick}
//       className='flex w-screen justify-center items-center pt-5 pb-5 text-5xl font-semibold bg-gray-800'
//     >
//       John Alexander Aydin
//     </h1>
//   )
// }
function Socials(imgPath: string, link: string) {
  function handleClick() {
    window.open(link);
  }
  return (
    <img
      // className='pr-4'
      onClick={handleClick}
      src={imgPath}
      alt=""
    />
  )
}
function TitlePage() {
  return (
    <div className="w-full h-full flex justify-center">
      <img src="./images/background.jpg" className="flex justify-center overflow-hidden min-h-full min-w-full"></img>
      {/* <Image src="/images/background.jpg" alt="oops" fill={true}/> */}
      <h1 className="flex justify-center items-center text-6xl font-semibold absolute top-1/4 text-black font-mono">John Aydin</h1>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      {/* <div className="w-screen h-12 fixed top-0 flex justify-end bg-gray-800 border-gray-950">
            <h1 className="flex justify-end p-2 text-xl font-mono hover:text-gray-950">Projects</h1>
            <h1 className="flex justify-end p-2 text-xl font-mono hover:text-gray-950">Resume</h1>
            <h1 className="flex justify-end p-2 text-xl font-mono hover:text-gray-950">About</h1>
        </div> */}
      {/* <Navbar /> */}
      <img src="./images/background.jpg" className="flex justify-center overflow-hidden min-h-full min-w-full"></img>
      <h1 className="flex justify-center items-center text-6xl font-semibold absolute top-1/4 text-gray-950 font-mono">John Aydin</h1>
      {/* <Footer /> */}
      {/* <div className="w-screen fixed bottom-0 flex justify-end bg-gray-800 border-t border-gray-950">
          {Socials("./icons/github.png", "https://github.com/John-A-Aydin")}
          {Socials("./icons/linkedin.png", "https://www.linkedin.com/in/johnaaydin/")}
        </div> */}
    </div>
  );
}


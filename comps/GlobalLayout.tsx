import { ReactNode } from 'react'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

interface GlobalLayoutProps {
    children: ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps ) => {
    return (
        <div className="h-screen">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
  }

export default GlobalLayout;
import { ReactNode } from 'react'
import Navbar from '../comps/Navbar'

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
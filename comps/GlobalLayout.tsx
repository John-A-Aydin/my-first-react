import { ReactNode } from 'react'
import Footer from './Footer'

interface GlobalLayoutProps {
    children: ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps ) => {
    return (
        <>
            { children }
            <Footer />
        </>
    );
  }

export default GlobalLayout;
import { Navbar, Footer } from '../molecules';
import { LayoutProps } from '@/utils/interface';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={`flex flex-col ${inter.className}`}>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
    
export default Layout;
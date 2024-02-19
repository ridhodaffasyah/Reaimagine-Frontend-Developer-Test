import { Navbar, Footer } from '../molecules';
import { LayoutProps } from '@/utils/interface';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={`flex flex-col gap-2 ${inter.className}`}>
            <Navbar/>
            <main className='px-4'>
                {children}
            </main>
            <Footer />
        </div>
    );
};
    
export default Layout;
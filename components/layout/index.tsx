import { Navbar, Footer } from '../molecules';
import { LayoutProps } from '@/utils/interface';

const Layout = ({children}: LayoutProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <Navbar/>
            <main className='px-4'>
                {children}
            </main>
            <Footer />
        </div>
    );
};
    
export default Layout;
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex sticky top-0 items-center justify-between border-2 border-black w-full p-4'>
            <div>Logo</div>
            <ul className='flex gap-4'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div>Button</div>
        </nav>
    );
};
    
export default Navbar;
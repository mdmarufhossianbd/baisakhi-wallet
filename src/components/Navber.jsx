import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/image/logo (1).png';
const Navber = () => {
    const user = false
    const navLinks = [
        {
            title: "Home",
            to: '/',
        },
        {
            title: "About",
            to: '/about'
        },
    ]

    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            {/* Logo */}
            <div>
                <Link to={'/'}><img className='w-[200px]' src={logo} alt="Bashakhi Wallet Logo" /></Link>
            </div>
            {/* navlinks */}
            <div className='flex gap-5'>
                {navLinks.map(navlink => <NavLink key={navlink.to} to={navlink.to} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "bg-[#e3e3e3] px-5 py-2 rounded-md text-[#202020] hover:bg-[#b1b1b1]"
                }>{navlink.title}</NavLink>)}
            </div>
            {/* user auth */}
            <div>
                {user ? <div></div> : 
                <div className='flex gap-4'>
                    <Link to={'/register'} className='bg-[#ffaa00d7] px-5 py-2 rounded-full text-white font-medium hover:bg-[#ED056F]'>Register</Link>
                    <Link to={'/login'} className='bg-[#ED056F] px-5 py-2 rounded-full text-white font-medium hover:bg-[#ffaa00d7]'>Login</Link>
                </div>}
            </div>

        </div>
    );
};

export default Navber;
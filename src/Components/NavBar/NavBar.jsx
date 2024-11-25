import React, { useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1} from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav>
            <div className='md:hidden text-2xl p-6 bg-green-700' onClick={() => setOpen(!open)}>
                {
                    open === true? <IoClose></IoClose> : <HiMenuAlt1></HiMenuAlt1>
                }
                
            </div>
            <ul className={`${open? '': 'hidden'}
             md:flex absolute md:static p-6 bg-green-500`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
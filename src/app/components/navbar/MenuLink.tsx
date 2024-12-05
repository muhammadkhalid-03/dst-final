'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuLinkProps {
    type: string;
    onOpen?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ type, onOpen }) => {
    const pathname = usePathname();

    return (
        <div className={`flex ${type} justify-center items-center md:space-x-6 lg:space-x-8 justify-end`}>
            {[
                { name: 'Home', href: '/' },
                { name: 'Apple AI', href: '/appleAI' },
                { name: 'Features', href: '/features' },
                { name: 'Analysis', href: '/analysis' },
            ].map((item) => (
                    <Link key={item.name} href={item.href} onClick={onOpen} passHref>
                        <div className='relative group pb-2 flex flex-col items-center'>
                            <p className='text-white'>{item.name}</p>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                                    pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                                }`}
                            />
                        </div>
                    </Link>
            ))}
        </div>
    );
};

export default MenuLink;
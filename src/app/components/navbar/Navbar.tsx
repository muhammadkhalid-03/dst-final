'use client';
import Link from 'next/link';
import Image from 'next/image';
import MenuLink from './MenuLink';
import { useEffect, useRef, useState } from 'react';


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-navcover border-b z-50">
            <div className='container mx-auto flex item-center justify-between font-mono p-4'>
                <div className="flex items-center">
                    <Link href="/" className='flex flex-row items-center hover:cursor'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 md:size-14 lg:size-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center space-x-4 hidden md:flex">
                    <MenuLink type="flex-row"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
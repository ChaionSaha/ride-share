"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const params = useParams();

    useEffect(() => {
        console.log(params)
    }, [params]);

    return (
        <div className="relative">
            <div className="container py-10 pb-16 flex items-center justify-between">
                <div className="flex gap-x-5 items-center">
                    <button onClick={()=>setOpen(true)} className="font-manrope border rounded-lg p-2 lg:hidden">
                        <i className="bi bi-justify-left text-2xl"></i>
                    </button>
                    <Image src={logo} alt="logo" className="w-44 h-fit" />
                </div>
                <ul className="hidden lg:flex items-center gap-x-10 text-xl font-medium text-base-200">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About Us</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#faq">FAQ</Link>
                    </li>
                </ul>

                <Link
                    href=""
                    className="hidden lg:flex items-center gap-x-10 lg:text-xl text-lg font-medium text-base-200"
                >
                    Download App
                </Link>
            </div>
            <div className={`fixed lg:hidden h-[100vh] p-10 px-5 w-[100vw] top-0 left-0 border border-black z-[100] bg-white ${open ? 'translate-x-0' : 'translate-x-[-100%]'} duration-300`}>
                <div className="flex justify-between items-center">
                    <Image src={logo} alt="logo" className="w-44 h-fit" />
                    <button onClick={()=>setOpen(false)} className="font-manrope border rounded-lg p-2">
                        <i className="bi bi-x text-2xl"></i>
                    </button>
                </div>

                <ul className="flex flex-col gap-y-10 text-xl font-medium mt-20 text-base-200">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About Us</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="#faq">Download App</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

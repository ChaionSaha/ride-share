import { FacebookIcon, GoogleIcon, WhatsappIcon, YoutubeIcon } from "@/assets/icons";
import logo from "@/assets/logo.png";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
    return (
        <section className="mt-40 container flex flex-col lg:flex-row gap-y-10 justify-between py-10">
            <div className="lg:w-[30%]">
                <Image src={logo} alt="logo" className="w-52 h-fit" />
                <p className="my-10 leading-loose text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper
                    maximus volutpat. Cras et vestibulum lectus. Nulla turpis dui, euismod
                    rutrum tincidunt sit amet, pharetra id purus. Pellentesque non
                    interdum nisi. Aliquam vitae commodo ex.
                </p>

                <div className="">
                    <p className="font-bold">Contact with us</p>
                    <div className="flex font-manrope">
                        <Input
                            color="primary"
                            variant="bordered"
                            size="lg"
                            placeholder="Enter your email"
                            classNames={{
                                inputWrapper: "rounded rounded-e-none border-primary border",
                            }}
                        />
                        <Button
                            color="primary"
                            size="lg"
                            className="rounded rounded-s-none "
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>

            <div className="font-manrope text-lg font-medium">
                <ul className="flex flex-col gap-y-5">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About Us</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="#riders">Our Riders</Link>
                    </li>
                </ul>

                <ul className="mt-10 flex flex-col gap-y-5">
                    <li>
                        <Link href="">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link href="">Privacy Policy</Link>
                    </li>
                </ul>
            </div>

            <div className="font-manrope text-lg font-medium">
                <ul className="flex flex-col gap-y-5">
                    <li>
                        <p>Facebook</p>
                    </li>
                    <li>
                        <p>WhatsApp</p>
                    </li>
                    <li>
                        <p>Youtube</p>
                    </li>
                </ul>
            </div>

            <div className="font-manrope text-lg font-medium">
                <div className="flex flex-col gap-y-5">
                    <p>Contact Us</p>
                    <p>contact@rider-share.com</p>
                    <p>+8801753227645</p>
                </div>

                <div className="mt-20 flex items-center gap-x-3">
                    <div className="p-3 rounded-full bg-[#23272F]">
                        <FacebookIcon className='w-5 h-5' />
                    </div>
                    <div className="p-3 rounded-full bg-[#23272F]">
                        <WhatsappIcon className='w-5 h-5' />
                    </div>
                    <div className="p-3 rounded-full bg-[#23272F]">
                        <YoutubeIcon className='w-5 h-5' />
                    </div>
                    <div className="p-3 rounded-full bg-[#23272F]">
                        <GoogleIcon className='w-5 h-5' />
                    </div>
                </div>
            </div>
            <div className="lg:mt-20 py-5 text-sm">
                <p>© All rights reserved. Made by Createx Studio</p>
            </div>
        </section>
    );
};

export default FooterSection;

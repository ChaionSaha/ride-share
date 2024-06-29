import { MailIcon, TelephoneIcon } from "@/assets/icons";
import { Button } from "@nextui-org/react";

const ContactSection = () => {
    return (
        <section id="contact" className="container flex flex-col lg:flex-row h-fit justify-center gap-x-5 gap-y-10  mt-40">
            <div className="flex flex-col items-center">
                <div className="p-4 w-fit rounded-full bg-secondary">
                    <MailIcon className='w-10 h-10' />
                </div>
                <p className="my-5 w-[60%] text-center">
                    Please feel free to drop us a line. We will respond as soon as possible.
                </p>
                <Button
                    color="primary"
                    radius="sm"
                    size="lg"
                    className=" font-manrope"
                >
                    Send Email
                </Button>
            </div>
            <div className="w-[1px] h-[15vh] self-center bg-primary lg:block hidden"></div>
            <div className="flex flex-col items-center">
                <div className="p-4 w-fit rounded-full bg-secondary">
                    <TelephoneIcon className='w-10 h-10' />
                </div>
                <p className="my-5 w-[60%] text-center">
                    Please feel free to drop us a line. We will respond as soon as possible.
                </p>
                <Button
                    color="primary"
                    radius="sm"
                    size="lg"
                    className=" font-manrope"
                >
                    Call Us
                </Button>
            </div>
        </section>
    );
}

export default ContactSection;
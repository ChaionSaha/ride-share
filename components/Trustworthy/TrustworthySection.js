import trust_img_1 from "@/assets/trust-img-1.png";
import trust_img_2 from "@/assets/trust-img-2.png";
import trust_img_3 from "@/assets/trust-img-3.png";
import trust_img_4 from "@/assets/trust-img-4.png";
import trust_img_5 from "@/assets/trust-img-5.png";
import Image from "next/image";

const TrustworthySection = () => {
    return (
        <section className="container mt-40">
            <p className="text-3xl font-bold">We Are Trustworthy</p>
            <div className="mt-10 flex flex-col lg:flex-row gap-5">
                <Image src={trust_img_1} alt="trust-img-1" className="lg:h-[67vh]"/>
                <div className="flex flex-col gap-5 border-pink-700">
                    <Image src={trust_img_2} alt="trust-img-1"/>
                    <Image src={trust_img_3} alt="trust-img-1"/>
                </div>
                <div className="flex flex-col gap-5">
                    <Image src={trust_img_4} alt="trust-img-1"/>
                    <Image src={trust_img_5} alt="trust-img-1"/>
                </div>
            </div>
        </section>
    );
};

export default TrustworthySection;

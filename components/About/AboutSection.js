import hero_1 from '@/assets/hero-img-1.png';
import hero_2 from '@/assets/hero-img-2.png';
import hero_3 from '@/assets/hero-img-3.png';
import rating from '@/assets/rating.png';
import star from '@/assets/star.png';
import Image from 'next/image';
import Counter from './Counter';

const AboutSection = () => {
    return (
        <section id='about' className="flex flex-col lg:flex-row gap-x-16 justify-between container">
            <div className="lg:w-[50%] self-center">
                <p className="text-3xl font-bold">About Ride Share</p>
                <p className="mt-7 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper
                    maximus volutpat. Cras et vestibulum lectus. Nulla turpis dui, euismod
                    rutrum tincidunt sit amet, pharetra id purus. Pellentesque non
                    interdum nisi. Aliquam vitae commodo ex. Donec nec nulla a nisl
                    hendrerit maximus eget vel urna. Nulla consectetur varius tincidunt.
                    In ac augue quam. Donec mollis justo nulla, vitae tempus ligula
                    aliquet at. Aliquam erat volutpat. Nunc sed tellus eu justo dapibus
                    maximus. Phasellus sit amet nunc magna. In fringilla enim leo,
                    imperdiet bibendum tellus commodo ultricies. In vitae diam velit. Sed
                    mollis risus at lacus sagittis, sit amet tincidunt tortor tempor.
                    Curabitur sagittis leo vitae ante pharetra efficitur sed quis sapien.
                </p>

                <div className="flex mt-10 items-center text-lg gap-x-5 font-bold">
                    <p>Rating</p>
                    <div className="flex gap-x-2">
                        <p className='h-fit'>4.8</p>
                        <Image src={star} alt='star' className='w-fit h-full'/>
                    </div>
                </div>
                <Image src={rating} alt='star' className='w-fit h-4'/>
                
                <div className="flex flex-col lg:flex-row gap-y-5 justify-between item-center mt-20">
                    <Counter number={"50,246"} text={"Total Customer"}/>
                    <Counter number={"450"} text={"Customers: Per Week"}/>
                    <Counter number={"1225"} text={"Customers: Per Month"}/>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 justify-end">
                <div className="flex flex-col gap-y-5 mt-20">
                    <Image src={hero_1} alt='hero 1' className='w-full lg:w-fit h-fit'/>
                    <Image src={hero_2} alt='hero 1' className='w-full lg:w-fit h-fit'/>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Image src={hero_3} alt='hero 1' className='w-full lg:w-fit h-fit'/>
                    <Image src={hero_2} alt='hero 1' className='w-full lg:w-fit h-fit'/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

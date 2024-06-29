import appImg from '@/assets/app-img.png';
import appStore from '@/assets/app-store.png';
import playStore from '@/assets/play-store.png';
import rating from '@/assets/rating.png';
import star from '@/assets/star.png';
import Image from 'next/image';

const EnjoyRideSection = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-16 mt-40 justify-between container">
            <div className="lg:w-[50%] self-center">
                <p className="text-3xl font-bold">Enjoy Your Ride</p>
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
                        <Image src={star} alt='star' className='w-fit h-full' />
                    </div>
                </div>
                <Image src={rating} alt='star' className='w-fit h-4' />

                <div className="mt-20 flex items-center gap-x-5">
                    <button>
                        <Image src={appStore} alt='App Store' className='w-40'/>
                    </button>
                    <button>
                        <Image src={playStore} alt='Play Store' className='w-40'/>
                    </button>
                </div>
            </div>

            <div className="flex gap-x-5 lg:justify-end">
                <Image src={appImg} alt='App Image'className='w-[80%]'/>
            </div>
        </section>
    );
}

export default EnjoyRideSection;
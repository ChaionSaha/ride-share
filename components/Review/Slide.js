import reviewIcon from '@/assets/review-img.png';
import Image from 'next/image';

const Slide = ({ name, review, img }) => {
    return (
        <div className='px-4'>
            <Image src={reviewIcon} alt='Review Icon' />
            <p className='my-14 leading-loose'>
                {review}
            </p>
            <div className="flex items-center gap-x-4">
                <div className="relative h-12 w-12">
                    <Image src={img} alt={name} className='rounded-full' fill />
                </div>
                <p className='leading-tight font-bold text-lg'>{name}</p>
            </div>
        </div>
    );
}

export default Slide;
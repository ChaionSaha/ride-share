import Image from "next/image";

const Rider = ({ img, name, position }) => {
    return (
        <div className="flex flex-col text-center font-manrope">
            <div className="relative h-[45vh]">
                <Image src={img} alt={name} fill  className="object-cover"/>
            </div>
            <p className="text-2xl mt-5">{name}</p>
            <p>{position}</p>
        </div>
    );
}

export default Rider;
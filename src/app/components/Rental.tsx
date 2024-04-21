import { Heart, Star } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface RentalProp {
    title: string;
    image: StaticImageData;
    price: string;
    distance: string,
    date: string,
    review: string
}

const Rental: React.FC<RentalProp> = ({ title, image, price, date,distance,review }) => {
    return (
        <div className="">
        <div className="w-[20rem] cursor-pointer h-[24rem] relative mb-4 ">
            <div className="h-[16rem] relative flex items-center">
                <div className="absolute  right-0 top-2 bg-neutral-600 rounded-full p-1">
                    <Heart className="" color="white" size={24} />
                </div>
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image className="object-cover w-full h-full" src={image} alt="house" />
                </div>
            </div>
            <div className="absolute right-0 top-[16rem] mt-2">
            <div className="flex gap-1">
            <Star />
            <p className="font-medium">{review}</p>
        </div>
        </div>
            <h1 className="text-xl font-semibold mt-2 px-2 ">{title}</h1>
            <p className="text-lg font-medium opacity-80 px-1 tracking-tight ">{distance}</p>
            <p className="text-lg font-medium opacity-80 px-1 ">{date}</p>
            <h2 className="text-md flex gap-1 font-semibold px-1">{price} <p className="font-normal opacity-80"> night</p></h2>
        </div>
        
        </div>
    );
};

export default Rental;

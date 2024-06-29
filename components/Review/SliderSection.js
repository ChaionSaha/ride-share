"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import { reviews } from "@/assets/reviews";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";



const SliderSection = () => {
    const sliderRef = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        beforeChange: (_,current) => {
            setSlideIndex(current);
        }
    };

    return (
        <div className="lg:w-[65%] rounded-xl px-3 lg:px-10 py-10 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)]">
            <div className="flex justify-end mb-5 items-center gap-x-3 z-[10]">
                <button
                    onClick={() => {
                        sliderRef.current.slickPrev();
                    }}
                    className="p-3 rounded-full border shadow-[(0px_1px_3px_rgba(0,0,0,0.25))]">
                    <ChevronLeftIcon className="w-3 h-3" />
                </button>
                <button
                    onClick={() => {
                        sliderRef.current.slickNext();
                    }}
                    className="p-3 rounded-full border shadow-[(0px_1px_3px_rgba(0,0,0,0.25))]">
                    <ChevronRightIcon className="w-3 h-3" />
                </button>
            </div>
            <Slider ref={slider => {
                sliderRef.current = slider
            }} {...settings} className=" z-[1]">
                {
                    reviews.map((review, index) => (
                        <Slide key={index} {...review} />
                    ))
                }
            </Slider>
            <div className="mt-10 flex justify-center gap-x-3">
                {
                    reviews.map((review, index) => (
                        <button
                            onClick={() => {
                                sliderRef.current.slickGoTo(index);
                            }}
                            key={index}
                            className={` h-3 rounded-full duration-300 ${slideIndex === index ? 'bg-primary w-10' : 'bg-gray-300 w-3'}`}
                        >
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default SliderSection;
import SliderSection from "./SliderSection";

const ReviewSection = () => {
    return (
        <section className="flex flex-col gap-y-10 lg:flex-row gap-x-10 container mt-40 h-fit lg:h-[65vh]">
            <div className="lg:w-[30%] bg-[#F6EEFE] rounded-xl p-14 flex justify-center items-center">
                <p className="text-3xl font-medium text-center">What Our Customers Say About Ride Share</p>
            </div>
            <SliderSection/>
        </section>
    );
}

export default ReviewSection;
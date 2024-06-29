import { riders } from "@/assets/riders";
import Rider from "./Rider";

const RidersSection = () => {
    return (
        <section id="riders" className="container mt-40">
            <p className="text-3xl font-bold text-center">
                Our Riders
            </p>
            <div className="mt-10 grid lg:grid-cols-4 gap-10">
                {
                    riders.map((rider, index) => (
                        <Rider key={index} {...rider} />
                    ))
                }
            </div>
        </section>
    );
}

export default RidersSection;
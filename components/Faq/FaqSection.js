import AccordionContainer from "./Accordion";

const FaqSection = () => {
    return (
        <section
            id="faq"
            className="container mt-40 bg-secondary-dark p-10 py-20 rounded-lg"
        >
            <p className="text-3xl font-bold text-center">Frequently Asked Question</p>
            <div className="lg:w-[80%] mt-10 mx-auto">
                <AccordionContainer />
            </div>
        </section>
    );
};

export default FaqSection;

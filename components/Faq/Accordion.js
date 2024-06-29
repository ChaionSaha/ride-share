"use client";

import { faq } from "@/assets/faq";
import { ChevronIcon } from "@/assets/icons";
import { Accordion, AccordionItem } from "@nextui-org/react";

const AccordionContainer = () => {
    return (
        <Accordion variant="splitted">
            {faq.map((item) => (
                <AccordionItem
                    indicator={<ChevronIcon className="w-7 h-7" />}
                    className="py-3"
                    key={item.id}
                    aria-label={item.title}
                    title={item.title}
                >
                    {item.description}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionContainer;

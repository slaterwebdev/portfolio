import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

type AccordionProps = {
  items: {
    title: string;
    content?: React.ReactNode;
  }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map(({ title, content }, index) => (
        <div key={index} className="shadow">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between font-bold w-full p-6 bg-gray-800 text-white cursor-pointer"
          >
            <span>{title}</span>
            <FaChevronLeft
              className={`transform transition-transform duration-300 ${
                openIndex === index && "-rotate-90"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden bg-white border-b transition-[max-height] duration-400 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 text-center float w-full">
              {content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

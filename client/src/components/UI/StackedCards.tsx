import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GridItem } from "@/utils/types";

const BASE_CARD_CLASSES = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat inset-0`;

const generateRandomDegrees = () => {
  const degree = Math.floor(Math.random() * 41) - 20;
  return `${degree}deg`;
};

type StackedCardsProps = {
  cards: GridItem[];
  height?: string;
  width?: string;
};

export const StackedCards = ({
  cards = [],
  height = "200px",
  width = "320px",
}: StackedCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (e: { pageX: number }, bool: boolean) =>
    e.pageX > 400 && setIsHovered(bool);

  return (
    <div
      className="w-full max-w-sm pb-8"
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      <div
        className="mx-auto p-4 relative sm:hover:overflow-x-scroll mb-6"
        style={{
          height: height,
          width: width,
        }}
      >
        {cards.map((card, index) => {
          if (!card || !card.src) return null;

          const transformValue = isHovered
            ? `rotate(0deg) translateX(${index * 120}%)`
            : `translateX(0) rotate(${generateRandomDegrees()})`;

          return (
            <a
              key={index}
              href={isHovered ? card.url : undefined}
              className={BASE_CARD_CLASSES}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transform: transformValue,
                backgroundImage: `url(${card.src})`,
              }}
            />
          );
        })}
      </div>
      {isHovered && (
        <p className={`flex justify-center items-center gap-5 text-primary`}>
          Scroll {<FaArrowRight />}
        </p>
      )}
    </div>
  );
};

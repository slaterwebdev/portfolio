import { getIcon } from "@/utils";
import { GridItem } from "@/utils/types";

type GridProps = {
  items: GridItem[];
  columns?: string;
  gap?: string;
};

const GridCard = ({ item }: { item: GridItem }) => {
  if (!item) return null;
  const { src, url, id, content } = item;
  return src ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-cover overflow-hidden bg-center bg-no-repeat pt-[55%] relative shadow-lg rounded-sm group block ${
        url ? "hover:scale-105" : ""
      }`}
      style={{
        backgroundImage: `url(${item.src})`,
      }}
    >
      {url && (
        <div className="bg-black text-white w-full h-[50px] sm:h-full bottom-0 absolute opacity-70 sm:opacity-0 hover:opacity-70 flex justify-center items-center cursor-pointer">
          <h2 className="underline">VIEW</h2>
        </div>
      )}
    </a>
  ) : (
    <div className="flex justify-between gap-5 items-center sm:mb-0 sm:flex-col shadow-lg rounded-md p-4">
      {id && <i>{getIcon(id)}</i>}
      {content && <p>{item.content}</p>}
    </div>
  );
};

export const Grid = ({
  items,
  columns = "1fr 1fr 1fr",
  gap = ".5rem",
}: GridProps) => (
  <div
    className="flex flex-col sm:grid"
    style={{ gridTemplateColumns: columns, gap: gap }}
  >
    {items.map((item) => (
      <GridCard key={item.id || item.src} item={item} />
    ))}
  </div>
);

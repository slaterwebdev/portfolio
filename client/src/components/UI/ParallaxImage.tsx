export const ParallaxImage = ({ imageUrl }: { imageUrl: string }) => (
  <div
    className="sm:bg-fixed bg-center bg-no-repeat bg-cover h-[400px] relative w-[100vw] left-1/2 -ml-[50vw]"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);

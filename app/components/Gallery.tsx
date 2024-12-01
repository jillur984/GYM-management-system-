import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-4xl md:text-4xl mb-2 animate-pulse bg-white text-black font-bold p-2 hover:bg-black hover:text-white">
        ---Our Gallery
      </h2>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex space-x-4">
          <Image src="/body1.jpg" alt="body1" height={400} width={400} />
          <Image src="/body2.jpg" alt="body2" height={200} width={400} />
          <Image src="/body3.jpg" alt="body3" height={200} width={400} />
          <Image src="/body4.jpg" alt="body4" height={200} width={400} />
          <Image src="/body5.jpg" alt="body5" height={200} width={400} />
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;

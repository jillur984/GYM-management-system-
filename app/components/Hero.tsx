import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src="/bg_gym.jpg"
        alt="Gym Background"
        width={500}
        height={300}
        className="object-cover w-full h-full opacity-80 "
      />

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          With Confidence Level High
        </h1>
        <p className="text-xl text-orange-300 md:text-2xl mb-6 max-w-3xl">
          Build the perfect body and shape for a good and healthy life with our
          expert trainers and motivating community.
        </p>

        <li>
          <Link
            href="/register"
            className="block text-xl md:text-lg text-black bg-gradient-to-r from-pink-600 to-purple-600 py-3 px-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
          >
            <span className="font-semibold text-lg">Become a Trainee</span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Hero;

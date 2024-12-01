import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-900 py-20 px-6">
      <div className="w-7xl md:w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section here */}
        <div className="flex-1 relative rounded-xl shadow-xl overflow-hidden">
          <Image
            src="/about.png.webp"
            alt="Gym Background"
            width={500}
            height={300}
            className="object-cover w-full h-full transform hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Content Section work this div */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <h1 className="text-2xl bg-white md:text-3xl text-center font-extrabold p-2 hover:bg-black hover:text-white text-black">
            ---About Our Gym
          </h1>
          <h2 className="w-auto text-center text-xl md:text-3xl lg:text-4xl text-orange-700 font-extrabold hover:text-black py-4">
            SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES YOUR VALUABLE TIME!
          </h2>

          <p className="text-lg text-white font-normal leading-8 ">
            At Brook Gym, we offer flexible, convenient, and customized workout
            solutions to help you achieve your fitness goals. Whether you're a
            beginner or an experienced athlete, our gym provides a safe
            environment with all the tools you need to succeed. Join us for a
            life-changing fitness experience!
          </p>
          <li>
            <Link
              href="/pages/register"
              className="block text-xl md:text-lg text-black bg-gradient-to-r  from-pink-600 to-purple-600 py-3 px-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
            >
              <span className="font-semibold justify-center text-2xl flex mx-auto">
                Join our Team
              </span>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default About;

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
const TrainerCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Trainer 1 */}
        <div className="card w-full bg-white shadow-lg rounded-lg group overflow-hidden">
          <figure className="relative">
            <Image
              src="/trainer1.png.webp"
              width={300}
              height={200}
              alt="Trainer 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-bold text-orange-500">
                Creative Director
              </h3>
              <h4 className="text-lg mt-2 text-orange-500">John Doe</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-blue-700">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Trainer 2 */}
        <div className="card w-full bg-white shadow-lg rounded-lg group overflow-hidden">
          <figure className="relative">
            <Image
              src="/trainer2.png.webp"
              width={300}
              height={200}
              alt="Trainer 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-bold text-orange-500">
                Lead Fitness Master
              </h3>
              <h4 className="text-lg mt-2 text-orange-500">Jane Smith</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-blue-700">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Trainer 3 */}
        <div className="card w-full bg-white shadow-lg rounded-lg group overflow-hidden">
          <figure className="relative">
            <Image
              src="/trainer3.png.webp"
              width={300}
              height={200}
              alt="Trainer 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-bold text-orange-500">
                Manager-Fitness Team
              </h3>
              <h4 className="text-lg mt-2 text-orange-500">Michael Johnson</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-blue-700">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;

import Image from "next/image";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="relative">
        {/* Overlay Image here */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/footer.webp"
            alt="footer"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>

        {/* Footer Content start from here */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 relative z-10">
          {/* Footer Sections start.... */}
          <div className="bg-opacity-60 shadow-xl rounded-lg p-6 ">
            <h3 className="text-lg font-bold text-white mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Press & Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-opacity-60 shadow-xl rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3 animate-">
              OPEN HOURS
            </h3>
            <ul className="space-y-2">
              <li>Monday: 11am - 7pm</li>
              <li>Tuesday-Friday: 11am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 11am - 6pm</li>
            </ul>
          </div>

          <div className="bg-opacity-60 shadow-xl rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">GYM Zone</h3>
            <p className="text-white text-md hover:text-red-400">
              Join our fitness community! Our expert trainers are here to guide
              you through your fitness journey. Check our class schedules, book
              your slots, and stay healthy!
            </p>
          </div>

          <div className="bg-opacity-60 shadow-xl rounded-lg p-6 ">
            <h3 className="text-lg font-bold text-white mb-3 animate-bounce">
              CONNECT
            </h3>
            <p className="text-sm text-white">
              Stay connected with us for updates, promotions, and more. Follow
              us on our social media profiles.
            </p>
            {/* Social Media Links start here  */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-gray-500">
        <p className="mt-2 text-2xl text-white">
          &copy; {new Date().getFullYear()} GymZone Company. All rights reserved
          by BdCallingIT.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

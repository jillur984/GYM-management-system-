import Image from "next/image";

const Servicecard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-6 px-4">
      {/* Card 1 */}
      <div className="relative bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-blue-100 via-white to-blue-200 group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
        <Image
          src="/service1.png"
          alt="Quality Equipment"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center group-hover:text-blue-800 transition-colors">
          Quality Equipment
        </h3>
        <p className="text-sm text-gray-600 text-center mt-2 group-hover:text-gray-700">
          High-grade equipment to enhance your workouts and meet your fitness
          goals with ease.
        </p>
        <button className="btn btn-secondary btn-xs sm:btn-sm mt-4 block mx-auto transform transition-transform group-hover:scale-110">
          Learn More
        </button>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-green-100 via-white to-green-200 group">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-white to-green-300 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
        <Image
          src="/service2.png"
          alt="Health Caring"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center group-hover:text-green-800 transition-colors">
          Health Caring
        </h3>
        <p className="text-sm text-gray-600 text-center mt-2 group-hover:text-gray-700">
          Personalized plans for physical and mental well-being tailored to your
          lifestyle.
        </p>
        <button className="btn btn-secondary btn-xs sm:btn-sm mt-4 block mx-auto transform transition-transform group-hover:scale-110">
          Learn More
        </button>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-red-100 via-white to-red-200 group">
        <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-white to-red-300 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
        <Image
          src="/service3.png"
          alt="Gym Strategies"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center group-hover:text-red-800 transition-colors">
          Gym Strategies
        </h3>
        <p className="text-sm text-gray-600 text-center mt-2 group-hover:text-gray-700">
          Expert guidance to maximize results with effective gym strategies for
          all fitness levels.
        </p>
        <button className="btn btn-secondary btn-xs sm:btn-sm mt-4 block mx-auto transform transition-transform group-hover:scale-110">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Servicecard;

import React from "react";

import Servicecard from "@/app/components/Servicecard";

const Service = () => {
  return (
    <section className="relative bg-base-200 py-12">
      {/* Background Image */}
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-60"
          style={{ backgroundImage: "url(/bg_service.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed z-0"></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-6 py-4 space-y-4">
          <h2 className="text-xl bg-white text-black sm:text-4xl md:text-5xl lg:text-4xl font-extrabold  leading-tight p-2 hover:text-white hover:bg-black">
            ---Our Service
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-orange-500 font-bold leading-relaxed">
            PUSH YOUR LIMITS FORWARD <br />
            <span className="font-semibold text-gray-100">
              Tailored solutions to meet your goals
            </span>
          </p>
          <button className="btn btn-primary btn-md sm:btn-lg px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-white hover:text-black">
            Explore Services
          </button>

          {/* Service Cards Section */}
          <Servicecard />
        </div>
      </div>
    </section>
  );
};

export default Service;
